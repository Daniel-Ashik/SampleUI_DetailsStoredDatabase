const express=require('express')
const router=express.Router()
router.get('/',function(req,res){
    res.render('home')
})
router.get('/about',function(req,res){
    res.render('about')
})
router.get('/project',function(req,res){
    res.render('project')
})
router.get('/contact',function(req,res){
    res.render('contact')
})
router.get('/thank',function(req,res){
    res.render('thank')
})
router.post('/submit',function(req,res){
    res.render('submit')
})
module.exports=router
