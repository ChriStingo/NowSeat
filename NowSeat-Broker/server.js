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
 *                  Data
 * #########################################*/
var actualState = new Map() // Topic -> [...{ idTransport: 'x', seat: { row: y, column: z, state: '...' } }]

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
    console.log('message from client', client.id, 'on topic:', packet.topic.toString())

    // Add state to HashMap
    const actualStateArray = actualState.get(packet.topic.toString()) || []
    let changed = false

    // Try to update an already known state
    const parsedPacket = JSON.parse(packet.payload.toString())
    actualStateArray.forEach((singleTransport) => {
        if(singleTransport.seat.row === parsedPacket.seat.row && singleTransport.seat.column === parsedPacket.seat.column){
            singleTransport.seat.state = parsedPacket.seat.state
            changed = true
        }
    })

    // If it's a new state
    if(!changed){
        actualStateArray.push(JSON.parse(packet.payload.toString()))
        actualState.set(packet.topic.toString(), actualStateArray)
    }
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
    const requestType = req.url.split("?")[1].split("=")[0];
    const requestCode = req.url.split("?")[1].split("=")[1];
    var result = [];

    // Different APIs
    if(requestType === "stopCode") {
        // Retrieve information from the Database (data.json file) about the transports at a given stopCode
        const fileContent = JSON.parse(fs.readFileSync('data.json'));
        for (var i = 0; i < fileContent.length; i++){
            if (fileContent[i].stopCode.toString().toUpperCase() == requestCode.toString().toUpperCase()){
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
    } else { // requestType === "idTransport"
        // Retrieve the actual state of a single transport
        result = actualState.get(requestCode.toString()) || []
    }
    
    // Send response
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(result));
})

httpServer.listen(httpPort);