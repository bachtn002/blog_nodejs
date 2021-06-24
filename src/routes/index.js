
const errorRouter = require('./errorRouter');
const siteRouter = require('./siteRouter');
const postRouter = require('../routes/postRouter');
const authRouter = require('../routes/auth');

function route(app) {
  app.use('/error', errorRouter);
  app.use('/', siteRouter);
  app.use('/search', siteRouter);
  app.use('/post', postRouter);
  app.use('/api/user/register',authRouter);
}
module.exports = route;