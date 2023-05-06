const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController{
    //[Get] / Home
    index(req,res, next){
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    //show [get] / news/:slug
    search(req,res){
        res.render('search');
    }
}


module.exports = new SiteController();