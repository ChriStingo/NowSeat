#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

#define weightPressurePin A0 //analog pin 0

// Const
char* row = "1";
char* column = "1";
bool seatState = "Disabled";

// WiFi
const char* ssid = "";
const char* password = "";
WiFiServer server(80);
WiFiClient espClient;
PubSubClient client(espClient);

// MQTT Broker
const char *mqtt_broker = "mqtt://127.0.0.1";
const char *topic = "TEST";
const int mqtt_port = 1883;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    delay(500); // Connecting to Wi-Fi
  }
  Serial.println(WiFi.localIP());
  
  // Connecting to a broker
  client.set_server(mqtt_broker, mqtt_port);  
  client.subscribe(topic);
}

void loop() {
  // put your main code here, to run repeatedly:
  int weightForce = analogRead(weightPressurePin);
  int percentForce = map(weightForce, 0, 205, 0, 100);
  if(percentForce >= 60){
    seatState = "Full";
  }
  else if(percentForce < 60){
    seatState = "Empty";
  }
  else{
    seatState = "Disabled";
  }

  StaticJsonDocument<128> Seat;
  Seat["idTransport"] = "111";
  JsonObject seat = Seat.createNestedObject("seat");
  seat["row"] = row;
  seat["column"] = column;
  seat["state"] = seatState;
  
  String output = "";
  
  serializeJson(Seat, output);
  client.publish(topic, output);
}
