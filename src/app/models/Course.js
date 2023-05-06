const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const { TRUE } = require('node-sass');
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    name: {type: String, required :true },
    description: {type: String, maxLength: 696},
    image: {type: String,maxLength: 255},
    slug : {type:String,  slug: 'name',unique:true,slugOn:{updateOne:true}},
    videoId : {type : String,required :true},
},{
    timestamps: true,
});

//custom query helpers
CourseSchema.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')){
        const isValidType = ['asc','desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]:isValidType ? req.query.type:'desc'
        })
    }
    return this;
}



//add plugin
mongoose.plugin(slug)
CourseSchema.plugin(mongooseDelete, { deletedAt:true,overrideMethods: 'all' })

module.exports = mongoose.model('Course',CourseSchema)

