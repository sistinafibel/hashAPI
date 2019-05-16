const express = require('express');
const crypto = require('crypto');
const ver = "2019.05.16A01";

var app = express();


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