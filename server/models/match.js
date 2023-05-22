'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match.belongsTo(models.Club, { foreignKey: 'club1_id', as: 'club1' });
      Match.belongsTo(models.Club, { foreignKey: 'club2_id', as: 'club2' });
    }
  }
  Match.init({
    club1_id: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Club is required"
        },
        notEmpty : {
          msg : "Club is required"
        },
      }
    },
    club2_id: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Club is required"
        },
        notEmpty : {
          msg : "Club is required"
        },
      }
    },
    score_club1: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Score is required"
        },
        notEmpty : {
          msg : "Score is required"
        },
      }
    },
    score_club2: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Score is required"
        },
        notEmpty : {
          msg : "Score is required"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};