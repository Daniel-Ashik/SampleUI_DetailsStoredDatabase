const config=require('../config/localhost')
for(let key in config){
    process.env[key]=config[key]
}
global.db=require('./database')
const http=require('http')
let app=require('../app')
let server=http.createServer(app)
var port=process.env.port||'3059'
app.set('port',port)
server.listen(port)