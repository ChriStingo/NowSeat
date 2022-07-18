var mqtt = require('mqtt');
 
var settings = {
	port: 1883
};

var client = mqtt.connect('mqtt://127.0.0.1', settings, 30);
 
console.log('Client publishing...');

// fired when new message is received
client.on('message', function(topic, message) {
  console.log(message.toString());
});

/////////////////////////////////////////////////////
// create a new message
var message = {
  topic: 'IOT22',
  payload: "jsonPayload",
  qos: 1,
  retain: true
};

var jsonPayload = { 
  'studentID': '4663991', 
  'timestamp': "Date().toString()",
  'value': "Math.random()" 
};

var payload = {
  "idTransport": "1",
  "type": "VEHICLE",
  "stopCode": "testStop",
  "line": "356",
  "time": "string",
  "totalSeats": "50",
  "start": "testStart",
  "destination": "testDest",
  "rows": "10",
  "columns": "5"
}

var payloadSeat = {
  "idTransport": "1",
  "seats": {
    "row": "1",
    "column": "2",
    "state": "SEAT_STATE"
  }
}


function buildMessage() {
  // message.payload = JSON.stringify(jsonPayload);
  // message.payload = JSON.stringify(payloadSeat);
  message.payload = JSON.stringify(payload);
}

function updatePayload(){
  // jsonPayload.timestamp = Date().slice(0,24);
  // jsonPayload.value = (Math.random()*100).toString();
  payload.idTransport = parseInt(payload.idTransport) + 1;
  payload.time = Date().slice(16, 21);
  payload.type = 'Bus';

  /*
  payloadSeat.seats.row = parseInt(payloadSeat.seats.row) + 1
  payloadSeat.seats.column = parseInt(payloadSeat.seats.column) + 2
  payloadSeat.seats.state = 'Full'
  */
}

function messageToClient() {
  updatePayload();
  buildMessage();
  console.log('message sent');
  // console.log(jsonPayload);
  console.log(payload);
	// client.publish('IOT22', JSON.stringify(jsonPayload));
  client.publish('IOT22', JSON.stringify(payload));
  
}

updatePayload();
client.publish('TEST', JSON.stringify(payload));

// the server sends the message 
setInterval(messageToClient, 3000);

