const express = require('express')
const app = express ()
const bodyparser = require('body-parser')
const path = require('path')
const db = require('./models')


app.use(bodyparser.urlencoded({extended: false }))
app.use(bodyparser.json())
app.use(express.static('public'))


app.use('/api', require('./routes'));

app.get('/*', function(req,res){
	res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync({force:true}).then(function(){
	app.listen(3000, ()=> console.log('Server running on port 3000'))
})

module.exports = app