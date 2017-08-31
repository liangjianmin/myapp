/**
 * Created by gan on 2017/8/31.
 */
var fs=require('fs');
var path=require('path');


module.exports=function (app) {
  app.get('/api/getcooklist',function (req, res) {
    res.json(stocks);
  });
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
    new Stock(1, "第一", 'assets/images/foods/1.jpg', 3.5),
    new Stock(2, "第二", 'assets/images/foods/2.jpg', 1.2),
    new Stock(3, "第三", 'assets/images/foods/3.jpg', 2.2),
    new Stock(4, "第四", 'assets/images/foods/4.jpeg', 5),
    new Stock(5, "第五", 'assets/images/foods/5.jpeg', 4.3),
    new Stock(6, "第六", 'assets/images/foods/7.jpeg', 3.1),
    new Stock(6, "第六", 'assets/images/foods/8.jpeg', 3.1),
    new Stock(6, "第六", 'assets/images/foods/9.jpeg', 3.1),
    new Stock(6, "第六", 'assets/images/foods/10.jpeg', 3.1),
    new Stock(6, "第六", 'assets/images/foods/11.jpeg', 3.1),
    new Stock(6, "第六", 'assets/images/foods/12.jpeg', 3.1),
  ];

}

