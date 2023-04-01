"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      catagoryId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
      metakey: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      price_sale: DataTypes.STRING,
      status: DataTypes.STRING
     
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
