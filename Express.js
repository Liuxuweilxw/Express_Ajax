
// import  express from 'express'
const express = require('express')

const app = express()
app.use('/',express.static(__dirname+'/'))

app.get('/main',function(request,response){
    // response.send('Hello Express')
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send("Hello Ajax")
})


app.post('/main',function(request,response){
    // response.send('Hello Express')
    // console.log(request.data)
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send("Hello Ajax POST")
})
app.post('/json-server',function(request,response){
    // response.send('Hello Express')
    // console.log(request.query)
    // console.log(request)

    request.on('data',function (data) {
        let obj = JSON.parse(data)
        console.log(obj)
        response.setHeader('Access-Control-Allow-Origin','*')
        response.setHeader('Access-Control-Allow-Headers','*')
        let res_data = obj
        // console.log(res)
        let str = JSON.stringify(res_data)
        response.send(str)
    })

})

app.get('/',function(request,response){
    // console.log(__dirname+'/main.html')
    response.sendFile(__dirname+'/main.html')
})

app.listen(8000,function(){
    console.log("服务已启动")
})