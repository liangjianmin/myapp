var cookall=require('../action/cookall');

module.exports = function (app) {
  /**
   * 重定向首页
   */
  app.get('/', function (req, res, next) {
    res.render('index');
  });
  cookall(app)
  app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    if (params.name) {
      result = result.filter(function (stock) {
        return stock.name.indexOf(params.name) !== -1;
      });
    }
    res.json(result);
  });

  app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) {
      return stock.id == req.params.id;
    }));
  });

};


var Stock = (function () {
  function Stock(id, name, imgUrl, rating) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.rating = rating;
  }

  return Stock;
}());

var stocks = [
  new Stock(1, "第一条新闻", 'assets/images/1.jpg', 3.5),
  new Stock(2, "第二条新闻", 'assets/images/2.jpg', 1.2),
  new Stock(3, "第三条新闻", 'assets/images/3.jpg', 2.2),
  new Stock(4, "第四条新闻", 'assets/images/4.jpg', 5)
];


exports.Stock = Stock;
