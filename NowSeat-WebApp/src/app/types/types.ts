import { SEAT_STATE, VEHICLE } from "../constants/constants"

export type singleTransport = {
    idTransport: number,
    typo: VEHICLE,
    stopCode: string,
    line: number,
    time: string,
    totalSeats: number,
    start: string,
    destination: string,
    rows: number,
    columns: number,
    seatsInfo?: boolean
}

export type seat = {
    idTransport: number,
    seat: {
      row: number,
      column: number,
      state: SEAT_STATE
    }
}
