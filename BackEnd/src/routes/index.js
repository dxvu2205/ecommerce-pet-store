const newRouter = require('./news')
const homeRouter = require('./home');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', homeRouter);

 
}
module.exports = route;
