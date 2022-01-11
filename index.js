var express = require('express')
var app = express()
app.listen(3000);
// respond with "hello world" when a GET request is made to the homepage

/*
app.get('/', function (req, res) {
    res.send('dddd')
})
*/
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/Login.js");

app.get('/Login', function (req, res) {
    res.sendFile(__dirname+"/Login.js");
})

/*

//첫줄 - 로컬호스트3000으로 들어갈때 함수를 실행해라
app.listen(3000,function(){ }//localhost:3000

//둘째줄~ - 3000/식권 url로 접속햇을 때 함수(응답및 요청에 따라)를 실행하라
app.get('/식권', function (req, res) {//localhost:3000/식권
    res.send('식권을 받았다')//화면 출력
})

*/