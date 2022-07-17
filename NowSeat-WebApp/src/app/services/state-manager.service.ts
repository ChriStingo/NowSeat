import { Injectable } from '@angular/core';
import { seat, singleTransport } from '../types/types';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    transports: singleTransport[] = []
    seats!: Map<number, seat[]>

  constructor() {
    this.seats = new Map<number, seat[]>()
    this.transports = [
        {
          idTransport: 0,
          typo: "bus",
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
            typo: "bus",
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
          state: "Full"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 2,
          state: "Empty"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 1,
          state: "Full"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 2,
          state: "Disabled"
        },
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 3,
          state: "Full"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 1,
          column: 3,
          state: "Empty"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 4,
          state: "Full"
        }
      },
      {
        idTransport: 0,
        seat: {
          row: 2,
          column: 4,
          state: "Disabled"
        },
      }])
  }

  public updateTransports(newTransports: singleTransport[]){
    this.transports = newTransports
  }

  public updateSeats(idTransport: number, seats: seat[]){
    this.seats.set(idTransport, seats)
  }

  public openSeatsInfo(idTransport: number) {
    this.transports.forEach((el) => {
        if(el.idTransport === idTransport)
            el.seatsInfo = !el.seatsInfo
        else
            el.seatsInfo = false
    })
  }
}