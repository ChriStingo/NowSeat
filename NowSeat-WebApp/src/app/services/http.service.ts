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
    this.http.get<any[]>("http://"+BE_URL+`/?idTransport=${stopCode}`)
    .subscribe(data => {
        console.log(data)
        this.state.updateTransports(data)
    },
    error => {
        alert("Error:\n" + (error as HttpErrorResponse).message)
    });
  }
}