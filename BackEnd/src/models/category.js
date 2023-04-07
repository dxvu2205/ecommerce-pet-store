"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, { foreignKey: "catagoryId" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      metakey: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
