const Handlebars = require('handlebars')

module.exports = {
    sum : (a,b) =>  a+ b,
    sortable:(field,sort)=>{
      const sortType = field=== sort.column ? sort.type :'default'
      const icons ={
        default:'transgender-outline',
        asc:'thumbs-up-outline',
        desc:'thumbs-down-outline'
      }
      const types ={
        default:'desc',
        asc:'desc',
        desc:'asc',
      }
      const icon = icons[sortType]
      const type = types[sortType]

      //bao ve ma nguoi
      const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
      const output = `
      <a href="${href}">
      <ion-icon name="${icon}"></ion-icon>
      </a>
      `
      return new Handlebars.SafeString(output)
    }
}