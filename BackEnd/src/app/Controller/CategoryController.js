const CategoryService = require("../../services/category");

const index = async (req, res) => {
  const data = await CategoryService.getAllCategoryService();
  return res.render("category", { data: data });
};
const show = (req, res) => {
  res.send("ssss");
};
const formCreate = (req, res) => {
  res.render("category/create");
};
const create = async (req, res) => {
  const data = await CategoryService.getCategorysService(req.body);
  //   console.log(data);
  return res.render("category");
};
//form edit category
const edit = async (req, res, next) => {
  const categoryId = req.param("id");
  if (categoryId) {
    const categoryData = await CategoryService.getCategoryByIdService(
      categoryId
    );
    // console.log(categoryData);

    return res.render("category/edit", { data: categoryData });
  } else {
    return res.send("category not found");
  }
};
//update category
const update = async (req, res, next) => {
  const data = req.body;
  const newdata = await CategoryService.UpdateCategoryService(data);
  return res.redirect("/category");
};
const deletes = async (req, res, next) => {
  const categoryId = req.param("id");
  if (categoryId) {
    await CategoryService.deletesCategorytService(categoryId);
    return res.redirect("/category");
  } else {
    return res.send("id category not found");
  }
};

module.exports = { index, show, formCreate, create, edit, update, deletes };
