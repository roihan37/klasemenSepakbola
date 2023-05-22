const { Op } = require('sequelize');
const { Match, Club, sequelize } = require('../models/index')

class Controller {
    static async addMatchOneByOne(req, res,next) {
        try {
            const { club1_id, club2_id, score_club1, score_club2 } = req.body;
            // console.log(club1_id);
            const club1 = await Club.findByPk(club1_id)
            const club2 = await Club.findByPk(club2_id)

            if(!club1 || !club2){
                throw {name : "notFound" }
            }

            const isMatchExist = await Match.findOne({
                where: {
                  [Op.or]: [
                    { club1_id: club1_id, club2_id: club2_id },
                    { club1_id: club2_id, club2_id: club1_id }
                  ]
                }
              });

            if (isMatchExist) {
                throw {name : "matchExists" }
            }

            if(club1_id === club2_id){
                throw{name : 'sameClub'}
            }

            await Match.create({
                club1_id,
                club2_id,
                score_club1,
                score_club2,
              });

              if (score_club1 > score_club2) {
                // CLUB 1
                club1.matchTotals += 1
                club1.win += 1
                club1.golScored += score_club1
                club1.lossGol += score_club2
                club1.point += 3
                
                // CLUB 2
                club2.matchTotals += 1
                club2.loss += 1
                club2.golScored += score_club2
                club2.lossGol += score_club1

              } else if (score_club1 < score_club2) {
                // ClUB 2
                club2.matchTotals += 1
                club2.win += 1
                club2.golScored += score_club2
                club2.lossGol += score_club1
                club2.point += 3

                // CLUB 1
                club1.matchTotals += 1
                club1.loss += 1
                club1.golScored += score_club1
                club1.lossGol += score_club2

              } else {
                // MATCH
                club1.matchTotals += 1
                club2.matchTotals += 1
                club1.draw += 1
                club2.draw += 1

                // GOOL SCORED
                club2.golScored += score_club2
                club2.lossGol += score_club1
                club1.golScored += score_club1
                club1.lossGol += score_club2

                // POINT
                club2.point += 1
                club1.point += 1
              }

            await club1.save();
            await club2.save();

            res.status(201).json({ message: 'Soccer Match has been saved' });
        } catch (err) {
            next(err)
        }
    }

    static async addMatchMultiple(req, res,next){
        try {
            // VALIDATION
            const { data } = req.body;
            if (!data || data.length === 0) {
                throw{name : "emptyData"}
            }
            
            const checkedPairs = []
            console.log(data);
            for(let i = 0; i < data.length; i++){
                let { club1_id, club2_id, score_club1, score_club2 } = data[i];
                // if (!club1_id || !club2_id || !score_club1 || !score_club2) {
                //     throw{name : "badRequest"}
                //   }
                
                  score_club1 = Number(score_club1)
                  score_club2 = Number(score_club2)
                  console.log(score_club2);

                if(score_club1 < 0 || score_club2 < 0 ){
                    throw{name : "notMin"}
                }

                if(club1_id === club2_id){
                    throw{name : 'sameClub'}
                }
                
                const club1 = await Club.findByPk(club1_id)
                const club2 = await Club.findByPk(club2_id)
    
                if(!club1 || !club2){
                    throw {name : "notFound" }
                }
                
                const isMatchExist = await Match.findOne({
                    where: {
                      [Op.or]: [
                        { club1_id: club1_id, club2_id: club2_id },
                        { club1_id: club2_id, club2_id: club1_id }
                      ]
                    }
                  });

                const pair = [club1_id, club2_id].sort().join('-');
                
                if (isMatchExist) {
                    throw {name : "matchExists" }
                }
                if(checkedPairs.includes(pair)) {
                    throw { name: 'matchExists' };
                }

                checkedPairs.push(pair);
            }

            const transaction = await sequelize.transaction();
            for (let i = 0; i < data.length; i++) {
                const { club1_id, club2_id, score_club1, score_club2 } = data[i];
            
                const club1 = await Club.findByPk(club1_id,{transaction});
                const club2 = await Club.findByPk(club2_id,{transaction});
          
                
                await Match.create({
                    club1_id,
                    club2_id,
                    score_club1,
                    score_club2,
                    transaction
                  });
                

                  if (score_club1 > score_club2) {
                    // CLUB 1
                    club1.matchTotals += 1
                    club1.win += 1
                    club1.golScored += score_club1
                    club1.lossGol += score_club2
                    club1.point += 3
                    
                    // CLUB 2
                    club2.matchTotals += 1
                    club2.loss += 1
                    club2.golScored += score_club2
                    club2.lossGol += score_club1
    
                  } else if (score_club1 < score_club2) {
                    // ClUB 2
                    club2.matchTotals += 1
                    club2.win += 1
                    club2.golScored += score_club2
                    club2.lossGol += score_club1
                    club2.point += 3
    
                    // CLUB 1
                    club1.matchTotals += 1
                    club1.loss += 1
                    club1.golScored += score_club1
                    club1.lossGol += score_club2
    
                  } else {
                    // MATCH
                    club1.matchTotals += 1
                    club2.matchTotals += 1
                    club1.draw += 1
                    club2.draw += 1
    
                    // GOOL SCORED
                    club2.golScored += score_club2
                    club2.lossGol += score_club1
                    club1.golScored += score_club1
                    club1.lossGol += score_club2
    
                    // POINT
                    club2.point += 1
                    club1.point += 1
                  }
                  await club1.save();
                  await club2.save();
              }

            await transaction.commit();
            res.status(201).json({ message: 'Soccer Match has been saved' });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async getAllMatch(req, res, next){
        try {
            const allMatch = await Match.findAll({order: [
                ['id', 'ASC']
            ],
            include : ['club1', 'club2']
        })
        res.status(200).json(allMatch)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller