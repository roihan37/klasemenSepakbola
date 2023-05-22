'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Club.hasMany(models.Match, { foreignKey: 'club1_id', as: 'match1' });
      Club.hasMany(models.Match, { foreignKey: 'club2_id', as: 'match2' });
    }
  }
  Club.init({
    logo: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : "Logo Club already exists"
      },
      validate : {
        notNull : {
          msg : "Logo is required"
        },
        notEmpty : {
          msg : "Logo is required"
        },
      }
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : "Club name already exists"
      },
      validate : {
        notNull : {
          msg : "Name is required"
        },
        notEmpty : {
          msg : "Name is required"
        },
      }
    },
    city: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : "Club city already exists"
      },
      validate : {
        notNull : {
          msg : "City is required"
        },
        notEmpty : {
          msg : "City is required"
        },
      }
    },
    matchTotals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    draw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    loss: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    golScored: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lossGol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'Club',
  });

  Club.beforeCreate((club, options) => {
    club.matchTotals = 0
    club.win = 0
    club.draw = 0
    club.loss = 0
    club.golScored= 0,
    club.lossGol= 0
  });
  
  return Club;
};