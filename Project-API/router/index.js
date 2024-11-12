var express=require('express')
var router=express.Router()
router.post('/submit',async function(req,res){
    // console.log(req.body)
    let errors={}
    let body=req.body
    // console.log(req.body)
    if(typeof body !=='object'){
        try{
            body=JSON.parse(body)
        }catch(err){
            if(!Object.keys(errors).includes('action')){
                errors.action=errors.action || []
            }
            errors.action.push(`unable to get body.${err.message}`)
        }
    }
    let body_name, body_phone, body_email
    if(Object.keys(errors).length===0){
        let bodyKeys=Object.keys(body)

        let createdon_func=new Date().getTime()
        if(bodyKeys.includes('name')&& body.name !==''){
            body_name=body.name
        }else{
            if(!Object.keys(errors).includes('name')){
                errors.name=errors.name || []
            }
            errors.name.push('Name Must Provide an Value')
        }
        if(bodyKeys.includes('phone')&&body.phone !==''){
            body_phone=body.phone
        }else{
            if(!Object.keys(errors).includes('phone')){
                errors.phone=errors.phone || []
            }
            errors.phone.push('Phone number must be provide an value')
        }
        if(bodyKeys.includes('email')&&body.email !==''){
            body_email=body.email
        }else{
            if(!Object.keys(errors).includes('email')){
                errors.email=errors.email || []
            }
            errors.email.push('Email must be provide an value')
        }
    }
    let users_output
    if(Object.keys(errors).length===0){
        try{
            let sql_insert_query=`INSERT INTO project(
                name,phoneno,emailid)VALUES
                ('${global.db.formatString(body_name)}','${global.db.formatString(body_phone)}','${global.db.formatString(body_email)}')RETURNING*`
                let query_users_result=await global.db.runQuery(sql_insert_query)
                users_output=query_users_result.rows[0]
        }catch(err){
            if(!Object.keys(errors).includes('action')){
                errors.action=errors.action || []
            }
            errors.action.push(`Unable to complete this.${err.message}`)
        }
    }
    if(Object.keys(errors).length===0){
        res.status(200).send({
            status:'SUCCESS',
            users:users_output
        })
    }else{
        res.status(601).send({
            status:'ERROR',
            errors:errors
        })
    }
})

module.exports=router