var mqtt = require('mqtt');
const fs = require('fs');
var http = require('http');

var settings = {
	port: 1883
};

var app = http.createServer(function(req,res){
    let parseReq = req.url.split("?");
    parseReq = parseReq[1].split("=");
    let rawdata = fs.readFileSync('./Es4/test.json'); // da modificare con il proprio path
    let fileContent = JSON.parse(rawdata);
    var result;
    var val = parseReq[1];
    for (var i = 0; i < fileContent.length; i++){
      if (fileContent[i].idTransport == val){
        result = {
          "idTransport" : val,
          "type": fileContent[i].type,
          "stopCode": fileContent[i].stopCode,
          "line": fileContent[i].line,
          "time": fileContent[i].time,
          "totalSeats": fileContent[i].totalSeats,
          "start": fileContent[i].start,
          "destination": fileContent[i].destination,
          "rows": fileContent[i].rows,
          "columns": fileContent[i].columns
        };
      } 
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result, null, 3));
});

app.listen(3000);

var array = new Array();

var client = mqtt.connect('mqtt://127.0.0.1', settings, 30);
client.subscribe('IOT22', {qos: 1});
//client.subscribe('TEST', {qos: 1});
//client.unsubscribe('TEST', {qos: 1});

 
console.log('Client subbed...');

// fired when new message is received
client.on('message', function(topic, message) {
  var receivedMessage = JSON.parse(message);
  console.log("The message received is:")
  console.log(receivedMessage);
  saveMessage(receivedMessage);
});

function saveMessage(message){
  array.push(message);
  writeJSON(array);
}

function writeJSON(content){

  try {
    fs.writeFileSync('./Es4/test.json', JSON.stringify(content));
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}
/*
var payload = {
  "idTransport": "number",
  "typo": "VEHICLE",
  "stopCode": "string",
  "line": "number",
  "time": "string",
  "totalSeats": "number",
  "start": "string",
  "destination": "string",
  "rows": "number",
  "columns": "number"
}
*/
