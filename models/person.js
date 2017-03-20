"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person= sequelize.define("Person", {
    name: DataTypes.STRING,
    favoriteCity: DataTypes.STRING
    
  });

  return Person;
};
