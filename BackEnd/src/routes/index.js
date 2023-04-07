const newRouter = require("./news");
const homeRouter = require("./home");
const authRouter = require("./user");
const productRouter = require("./products");
const categoryRouter = require("./category");
const userRouter = require("./user");

function route(app) {
  // app.use("/api/v1/auth", authRouter);

  app.use("/news", newRouter);
  app.use("/products", productRouter);
  app.use("/category", categoryRouter);
  app.use("/users", userRouter);

  app.use("/", homeRouter);
}
module.exports = route;
