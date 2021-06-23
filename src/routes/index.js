
const errorRouter = require('./errorRouter');
const siteRouter = require('./siteRouter');
function route(app) {

  app.use('/error', errorRouter);
  app.use('/', siteRouter);
  app.use('/search', siteRouter);
  
  
}
module.exports = route;