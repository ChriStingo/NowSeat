import { IMqttServiceOptions } from "ngx-mqtt";

export enum VEHICLE {
    bus = "bus",
    train = "train"
}

export enum SEAT_STATE {
    empty = "Empty",
    full = "Full",
    disabled = "Disabled"
}

export const BE_URL = "localhost:3000"

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: 'localhost',
    port: 9001,
    path: ''
};
