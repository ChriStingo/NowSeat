import { Injectable } from '@angular/core';
import { SEAT_STATE, VEHICLE } from '../constants/constants';
import { seat, singleTransport } from '../types/types';
import { MqttProtocolService } from './mqtt-protocol.service';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    transports: singleTransport[] = []
    seats: Map<number, seat[]> = new Map<number, seat[]>()

  constructor() {
    // MOCK
    /*this.transports = [
        {
          idTransport: 0,
          typo: VEHICLE.bus,
          stopCode: "0000",
          line: 0,
          time: "00:00",
          totalSeats: 0,
          start: "Genova Piazza Principe",
          destination: "Genova Sampierdarena",
          rows: 2,
          columns: 4
        },
        {
            idTransport: 1,
            typo: VEHICLE.bus,
            stopCode: "0000",
            line: 0,
            time: "00:00",
            totalSeats: 0,
            start: "Genova Piazza Principe",
            destination: "Genova Sampierdarena",
            rows: 2,
            columns: 4
          }
      ]
    this.seats.set(0, [{
        idTransport: 0,
        seat: {
          row: 1,
          column: 1,
          state: SEAT_STATE.full
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 2,
          state: SEAT_STATE.empty
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 1,
          state: SEAT_STATE.full
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 2,
          state: SEAT_STATE.disabled
        },
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 3,
          state: SEAT_STATE.full
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 3,
          state: SEAT_STATE.empty
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 4,
          state: SEAT_STATE.full
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 4,
          state: SEAT_STATE.disabled
        },
      }])*/
  }

  public updateTransports(newTransports: singleTransport[]){
    this.transports = newTransports
  }

  public updateSeats(idTransport: number, seats: seat[]){
    this.seats.set(idTransport, seats)
  }

  public openSeatsInfo(idTransport: number) {
    this.transports.forEach((el) => {
        if(el.idTransport === idTransport){
            el.seatsInfo = !el.seatsInfo
        }else
            el.seatsInfo = false
    })
  }

  public reset(){
    this.transports = []
    this.seats.clear()
  }

  public closeTransport(){
    this.transports.forEach((el) => el.seatsInfo = false)
  }
}