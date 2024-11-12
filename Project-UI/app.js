const express=require('express')
const path=require('path')
const app=express()
const port=8000
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'images')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',require('./router/index'))
app.use('/user',require('./router/users'))
// app.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`)
// })
module.exports=app