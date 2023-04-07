const ProductsService = require("../../services/products");
const { Product } = require("../../models/product");

const index = async (req, res) => {
  const data = await ProductsService.getAllProductsService();
  return res.render("products", { data: data });
};
const show = (req, res, next) => {
  res.send("create produts");
};
const edit = async (req, res, next) => {
  const productId = req.param("id");

  if (productId) {
    const productData = await ProductsService.getProductsByIdService(productId);
    return res.render("products/edit", { data: productData });
  } else {
    return res.send("product not found");
  }
};
const update = async (req, res, next) => {
  const data = req.body;
  const newdata = await ProductsService.UpdateProductService(data);
  return res.redirect("/products");
};
const deletes = async (req, res, next) => {
  const productId = req.param("id");
  if (productId) {
    await ProductsService.deletesProductService(productId);
    return res.redirect("/products");
  } else {
    return res.send("id products not found");
  }
};
//get produts
const create = async (req, res, next) => {
  res.render("products/create");
};

//post produts save data
const store = async (req, res, next) => {
  const masages = await ProductsService.getProductsService(req.body);

  return res.render("products");
};

module.exports = { index, create, show, store, edit, update, deletes };
