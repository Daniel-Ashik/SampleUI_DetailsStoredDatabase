
var express=require('express')
const needle=require('needle')
const callpost=require('./apicall')
var router=express.Router()
router.post('/submit',async function(req,res){
    // console.log(req.body)
    try{
        let reqRes=await callpost.callPostMethod(`/submit`,req.body)
        // res.send(reqRes)
        // const response=await needle('post','http://localhost:8002/submit',req.body)
        // console.log(response.body)
    }catch(err){
        res.status(500).send(err.message || 'Server Error!')
    }
})
module.exports=router