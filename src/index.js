const express = require('express');
const crypto = require('crypto');
const ver = "2019.05.16A01";

var app = express();

//http://127.0.0.1:3081/hash?keyword=키워드&hashtype=sha256&ecodingtype=hex
app.get('/hash', function(req, res) {
    console.log(req);
    let generalvalue = req.query.keyword;
    let hashtype = req.query.hashtype; //sha256 //sha512
    let encodingtype = req.query.encodingtype; // hex , base64

    var jsonObject = hashSet(generalvalue,hashtype,encodingtype);
    res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8'
    });
    res.end(jsonObject);
});

//기본 접속 경로 수정
app.get('/', function(req, res) {
    console.log(req);
    let generalvalue = req.query.keyword;
    let hashtype = req.query.hashtype; //sha256 //sha512
    let encodingtype = req.query.encodingtype; // hex , base64

    var jsonObject = JSON.stringify({"help" : "기본 파라미터는 /hash?keyword=키워드&hashtype=해시타입&encodingtype=인코딩타입 입니다."});
    res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8'
    });
    res.end(jsonObject);
});


//encodingtype까지 받는 경우
app.get('/:hashtype/:web/:encodingtype', function(req, res) {
    let generalvalue = req.params.web;
    let hashtype = req.params.hashtype; //sha256 //sha512
    let encodingtype = req.params.encodingtype; // hex , base64

    var jsonObject = hashSet(generalvalue,hashtype,encodingtype);
    res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8'
    });
    res.end(jsonObject);
});

//encodingtype은 제외하고 hex로 설정함.
app.get('/:hashtype/:web', function(req, res) {
    let generalvalue = req.params.web;
    let hashtype = req.params.hashtype; //sha256 //sha512
    let encodingtype = "hex"; // hex , base64

    var jsonObject = hashSet(generalvalue,hashtype,encodingtype);
    res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8'
    });
    res.end(jsonObject);
});


function hashSet(generalvalue, hashtype, encodingtype){
    let hashvalue = "";
    //다른값이 들어올경우..
    if(encodingtype != "hex" && encodingtype != "base64"){
        encodingtype = "hex";
    }
    console.log("encodingtype : " + encodingtype);
    hashvalue = crypto.createHash(hashtype).update(generalvalue).digest(encodingtype);
    console.log('hashed: ' , hashvalue);
    var jsonObject = {
        "hashvalue" : hashvalue ,
        "generalvalue" : generalvalue ,
        "type" : hashtype
    };
    return JSON.stringify(jsonObject);
}



app.listen(3081, function() {

    console.log("*  Hash API");
    console.log("*  버전 : 1.0 ver ( "+ver+" )");

    //3080번 포트 사용해서 오픈
    console.log('3081번 포트가 열렸습니다.');
});