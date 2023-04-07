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
const getProductsByIdService = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Product.findOne({
        where: {
          id: productId,
        },
        raw: true,
      });
      if (data) {
        resolve(data);
      } else {
        resolve(null);
      }
    } catch (error) {
      reject(error);
    }
  });
};
const UpdateProductService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataProduct = await db.Product.findOne({
        where: { id: data.id },
      });
      if (dataProduct) {
        dataProduct.name = data.name;
        dataProduct.qty = data.qty;
        dataProduct.imagesId = data.linkimages;
        dataProduct.title = data.title;
        dataProduct.price = data.price;
        dataProduct.price_sale = data.price_sale;
        dataProduct.status = data.status;

        await dataProduct.save();

        const newdata = await db.Product.findAll();
        resolve(newdata);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};
const deletesProductService = (productId)=>{
  return new Promise(async(resolve, reject)=>{
      try {
        const data = await db.Product.findOne({
          where: { id: productId}
        });
        if (data) {
          data.destroy();
        }
        resolve();
      } catch (error) {
        reject(error)
      }
  })

}

module.exports = {
  getProductsService,
  getAllProductsService,
  getProductsByIdService,
  UpdateProductService,
  deletesProductService
};
