const newRouter = require('./news');
const homeRouter = require('./home');
const authRouter = require ('./auth');
function route(app) {
    app.use('/api/v1/auth', authRouter)
    
    app.use('/news', newRouter);
      app.use('/', homeRouter);

 
}
module.exports = route;
