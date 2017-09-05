module.exports = function (app) {

    app.get('/news', function (req, res) {
        var news = [
            {
                id: 1,
                name: "第一条新闻",
                imgUrl: "assets/images/1.jpg",
                rating: 3.5
            },
            {
                id: 2,
                name: "第二条新闻",
                imgUrl: "assets/images/2.jpg",
                rating: 1.2
            },
            {
                id: 4,
                name: "第三条新闻",
                imgUrl: "assets/images/3.jpg",
                rating: 2.2
            },
            {
                id: 4,
                name: "第四条新闻",
                imgUrl: "assets/images/4.jpg",
                rating: 5
            },
        ]


        res.json(news);
    });


}