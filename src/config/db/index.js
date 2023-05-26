const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/ServerNodeJS',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully hay ma');
    }catch(error){
        console.log('connect failure !!!');
    }
}
//f8_nodejs_dev
module.exports = {connect};