var cookall = require('../action/cookall');
var home = require('../action/home');
var user = require('../action/user');

module.exports = function (app) {

    /**
     * 重定向首页
     */
    app.get('/', function (req, res, next) {
        res.render('index');
    });

    cookall(app);
    home(app);
    user(app);
}