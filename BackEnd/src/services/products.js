const db = require("../models");

const getProductsService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        name: data.name,
        // slug: DataTypes.STRING,
        qty: data.qty,
        // catagoryId: DataTypes.STRING,
        imagesId: data.linkimages,
        title: data.title,
        price: data.price,
        price_sale: data.price_sale,
        status: data.status,
      });
      resolve("create new product successfully");
    } catch (error) {
      reject(error);
    }
  });
};
const getAllProductsService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Product.findAll({
        raw: true,
        attributes: {
          exclude: ["catagoryId"],
        },
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getProductsService, getAllProductsService };
