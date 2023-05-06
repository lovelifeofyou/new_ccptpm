class NewsController{
    //[Get] / news
    index(req,res){
        res.render('news')
    }

    //show [get] / news/:slug
    show(req,res){
        res.send('News DeTail!!! em pro')
    }
}


module.exports = new NewsController();