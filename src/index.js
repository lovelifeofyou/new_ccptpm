const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars  = require('express-handlebars')
const SortMiddleware = require('./app/middleware/sortMiddleware')
const path = require('path')
const app = express()
// 
//ket noi database
const router = require('./routes')
const db = require('./config/db')
db.connect()
const port = 3000
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))
app.engine('hbs',handlebars.engine({extname:'.hbs',
    helpers: require('./helper/handlebars')
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resource','views'))

//xu ly du lieu tu form len
app.use(express.urlencoded({
  extended : true
}))
//gui du lieu tu js len
app.use(express.json())


app.use(methodOverride('_method'))


//middleware
app.use(SortMiddleware)
//Route init

//req request || res response
app.listen(port, () => {
  console.log(`App listening at http://localhost: ${port}`)
})
router(app);