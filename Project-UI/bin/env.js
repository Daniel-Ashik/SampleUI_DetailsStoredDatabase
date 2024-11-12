const config=require('../config/localhost')
Object.keys(config).forEach(key=>{
    process.env[key]=config[key]
})
let port=process.env.port || 8000
let http=require('http')
let app=require('../app')
let server=http.createServer(app)
server.listen(port,
    ()=>{
            console.log(`Server is running on http://localhost:${port}`)
        })
app.set('port',port)