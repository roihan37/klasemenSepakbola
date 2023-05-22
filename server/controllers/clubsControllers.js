const { Club } = require('../models/index')

class Controller{

    static async addClub(req, res, next){
        try {
            const newClub = await Club.create({
                logo : req.body.logo,
                name : req.body.name,
                city : req.body.city,
            })

            res.status(201).json({club : newClub})

        } catch (err) {
            next(err)
        }
    }

    static async getAllClubs(req,res, next){
        try {
            const allClubs = await Club.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(allClubs)
        } catch (err) {
            next(err)
        }
    }

}

module.exports = Controller