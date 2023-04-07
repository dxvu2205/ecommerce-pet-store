const db = require("../models");

const getCategorysService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Category.create({
        name: data.name,
        status: data.status,
      });
      resolve("create new Category successfully");
    } catch (error) {
      reject(error);
    }
  });
};
const getAllCategoryService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Category.findAll({
        raw: true,
      });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
const getCategoryByIdService = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Category.findOne({
        where: {
          id: categoryId,
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
const UpdateCategoryService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataCategory = await db.Category.findOne({
        where: { id: data.id },
      });
      if (dataCategory) {
        dataCategory.name = data.name;
        dataCategory.status = data.status;

        await dataCategory.save();

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
const deletesCategorytService = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Category.findOne({
        where: { id: categoryId },
      });
      if (data) {
        data.destroy();
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getCategorysService,
  getAllCategoryService,
  getCategoryByIdService,
  UpdateCategoryService,
  deletesCategorytService,
};
