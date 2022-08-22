import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BE_URL } from '../constants/constants';
import { StateService } from './state-manager.service';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private state: StateService) {
  }

  public getVehicles(stopCode: string) {
    this.http.get<any[]>("http://"+BE_URL+`/?stopCode=${stopCode}`)
    .subscribe(data => {
        this.state.updateTransports(data)
    },
    error => {
        alert("Error:\n" + (error as HttpErrorResponse).message)
    });
  }

  public getVehicleInitialState(idTransport: number) {
    this.http.get<any[]>("http://"+BE_URL+`/?idTransport=${idTransport}`)
    .subscribe(data => {
        console.log(data)
        data.forEach((singleSeat) => this.state.updateSeats(idTransport, singleSeat))
    },
    error => {
        alert("Error:\n" + (error as HttpErrorResponse).message)
    });
  }
}