import { VEHICLE } from "../constants/constants"

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
    columns: number
}