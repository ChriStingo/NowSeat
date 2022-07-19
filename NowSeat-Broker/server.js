'use strict'

const fs = require('fs');
const http = require('http');

/** #########################################
 *                  Ports
 * #########################################*/
const httpPort = 3000
const mqttPort = 1883
const wsPort = 8883

/** #########################################
 *         BROKER (mqtt and websocket)
 * #########################################*/
const aedes = require('aedes')()
const mqttServer = require('net').createServer(aedes.handle)

mqttServer.listen(mqttPort, function () {
    console.log('server listening on port', mqttPort)
})

const ws = require('websocket-stream')
const wsServer = require('http').createServer()
ws.createServer({ server: wsServer }, aedes.handle)

wsServer.listen(wsPort, function () {
    console.log('server listening on port', wsPort)
})


aedes.on('clientError', function (client, err) {
console.log('client error', client.id, err.message, err.stack)
})

aedes.on('connectionError', function (client, err) {
    console.log('client error', client, err.message, err.stack)
})

aedes.on('publish', function (packet, client) {
if (client) {
    console.log('message from client', client.id)
}
})

aedes.on('subscribe', function (subscriptions, client) {
if (client) {
    console.log('subscribe from client', subscriptions, client.id)
    
}
})

aedes.on('client', function (client) {
    console.log('new client', client.id)
})

/** #########################################
 *          HTTP SERVER (API REST)
 * #########################################*/
let httpServer = http.createServer(function(req,res){
    const stopCodeRequest = req.url.split("=")[1];
    const fileContent = JSON.parse(fs.readFileSync('data.json'));
    var result = [];
    for (var i = 0; i < fileContent.length; i++){
        if (fileContent[i].stopCode == stopCodeRequest){
            result.push({
                "idTransport" : fileContent[i].idTransport,
                "type": fileContent[i].type,
                "stopCode": fileContent[i].stopCode,
                "line": fileContent[i].line,
                "time": fileContent[i].time,
                "totalSeats": fileContent[i].totalSeats,
                "start": fileContent[i].start,
                "destination": fileContent[i].destination,
                "rows": fileContent[i].rows,
                "columns": fileContent[i].columns
            });
        } 
    }
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(result));
})

httpServer.listen(httpPort);