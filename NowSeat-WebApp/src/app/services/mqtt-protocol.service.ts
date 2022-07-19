import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable, Subscription } from 'rxjs';
import { StateService } from './state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class MqttProtocolService {
    private subscription!: Subscription;
    private isSub: boolean = false

    constructor(private _mqttService: MqttService, readonly state: StateService) {}
    
      public subscribeTopic(idTransport: number): void {
        this.isSub = true
        this.subscription = this._mqttService.observe(`${idTransport}`).subscribe((message: IMqttMessage) => {
            this.state.updateSeats(idTransport, JSON.parse(message.payload.toString()))
          })
      }
    
      public unsubscribe() {
        if(this.subscription && this.isSub){
            this.subscription.unsubscribe();
            this.isSub = false
        }
      }
}
