const ProductsService = require("../../services/products");
const { Product } = require("../../models/product");

const index = async (req, res) => {
  const data = await ProductsService.getAllProductsService();
  console.log(data)
  return res.render("products",{data:data});
};
const show = (req, res, next) => {
  res.send("create produts");
};
//get produts
const create = async (req, res, next) => {
  res.render("products/create");
};

//post produts save data
const store = async (req, res, next) => {
  const masages = await ProductsService.getProductsService(req.body);
  console.log(masages);

  res.send("post store produts");
};

module.exports = { index, create, show, store };
