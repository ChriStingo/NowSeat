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
    seatsPrepared: Map<number, SEAT_STATE[][]> = new Map<number, SEAT_STATE[][]>()

  constructor() {
    // MOCK
    /*this.transports = [
        {
          idTransport: 0,
          type: VEHICLE.bus,
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
            type: VEHICLE.bus,
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

  public updateSeats(idTransport: number, seat: seat){
    let obj = this.seats.get(idTransport)
    if(!obj)
        obj = [seat]
    else
        obj.push(seat)
    this.seats.set(idTransport, obj)
    this.prepareSeats(idTransport)
  }

  private prepareSeats(id: number){
    const transport = this.transports.find(({idTransport}) => idTransport === id)
    if(!this.seatsPrepared.get(id) && transport){
        let seatsPrepared: SEAT_STATE[][] = []
        for(let row = 0; row < transport.rows; row++){
            seatsPrepared.push([])
            for(let col = 0; col < transport.columns; col++){
                seatsPrepared[row].push(SEAT_STATE.disabled)
            }
        }
        this.seatsPrepared.set(id, seatsPrepared)
    }
    const seatMatrix = this.seatsPrepared.get(id)
    if(seatMatrix){
        this.seats.get(id)?.forEach(({seat}) => seatMatrix[seat.row-1][seat.column-1] = seat.state)
        this.seatsPrepared.set(id, seatMatrix)
    }
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