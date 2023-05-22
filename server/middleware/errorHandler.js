function errHandler(err, req, res, next){
     if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError" ){
        res.status(400).json({message : err.errors[0].message})
     }else if(err.name === "matchExists"){
        res.status(400).json({ message: "Matches can't be the same" })
    }else if(err.name === "sameClub"){
        res.status(400).json({ message: "Clubs can't be the same" })
    }else if(err.name === "notFound"){
        res.status(404).json({message : "Club Not Found"})
    }else if(err.name === "emptyData"){
        res.status(400).json({ message: "Form cannot be empty" })
    }else if(err.name === "notMin"){
        res.status(400).json({message : "Score cannot be less than 0"})
    }else {
        res.status(500).json({message : "Internal Server Error" })
    }
}

module.exports = errHandler