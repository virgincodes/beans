module.exports = function (express, app) {

    const listEndpoints = require('express-list-endpoints')
    const logsControl = require('./controllers/logs.controller')
  
    // var Auth = require('./middlewares/auth.middleware.js');
  
  
    var apiRoutes = express.Router();
  
    // app.get('/', MainController.index);
  
    app.use('/api', apiRoutes);
    // apiRoutes.get('/logs', Item.getWishList);
    apiRoutes.post('/logs', logsControl.saveALog);
    apiRoutes.get('/logs/:size/:pagination', logsControl.getLogs);
  
    console.log(listEndpoints(app));
  
  }
  