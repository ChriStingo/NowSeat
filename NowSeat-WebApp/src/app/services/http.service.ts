import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BE_URL } from '../constants/constants';
import { StateService } from './state-manager.service';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private state: StateService) {
  }

  public getVehicles(stopCode: string) {
    this.http.get<any[]>(BE_URL+`?stopCode=${stopCode}`)
    .subscribe(data => {
        this.state.updateTransports(data)
    },
    error => {
        alert("Error:\n" + error)
    });
  }

  public getVehicleData(idTransport: number) {
    // TODO
  }
}