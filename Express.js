// import  express from 'express'
const express = require('express')
const axios = require('axios')

const app = express()
app.use('/', express.static(__dirname + '/'))

app.get('/main', function (request, response) {
    // response.send('Hello Express')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send("Hello Ajax")
})

app.get('/ie', function (request, response) {
    // response.send('Hello Express')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send("Hello IE")
})

app.get('/delay', function (request, response) {
    // response.send('Hello Express')
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(function () {
        response.send("Hello Delay")
    }, 1000)
})


app.post('/main', function (request, response) {
    // response.send('Hello Express')
    // console.log(request.data)
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send("Hello Ajax POST")
})
app.post('/json-server', function (request, response) {
    // response.send('Hello Express')
    // console.log(request.query)
    // console.log(request)
    request.on('data', function (data) {
        console.log("Server recieve1")
        let obj = JSON.parse(data)
        console.log(obj)
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.setHeader('Access-Control-Allow-Headers', '*')
        // let res_data = obj.data
        // console.log(res_data)
        // console.log(res)
        let str = JSON.stringify(obj)
        response.send(str)
    })
})
app.get('/json-server', function (request, response) {
    // response.send('Hello Express')
    // console.log(request.query)
    // console.log(request)
    console.log("Server recieve")
    response.send('OK')
})

app.get('/', function (request, response) {
    // console.log(__dirname+'/main.html')
    response.sendFile(__dirname + '/main.html')
})

app.all('/check_value',function (request,response) {
    const data = {
        msg:"all exist"
    }
    let str = JSON.stringify(data)
    console.log(str)
    response.end(`handle(${str})`)
})


app.all('/jquery_check_value',function (request,response) {
    // console.log("Server recieve")
    console.log("Server recieve")
    // console.log(data)
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // let res_data = obj.data
    // console.log(res_data)
    // console.log(res)
    let func = request.query.callback
    console.log(request.query)
    let data = request.query.data
    console.log(JSON.parse(data))
    const res_data = {
        msg: JSON.parse(data).val+" is all exist"
    }
    let str = JSON.stringify(res_data)
    console.log(str)
    response.end(`${func}(${str})`)
})

app.listen(8000, function () {
    console.log("服务已启动")
})