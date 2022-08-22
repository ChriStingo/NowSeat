import { Component, Input, OnInit } from '@angular/core';
import { VEHICLE } from 'src/app/constants/constants';
import { HttpService } from 'src/app/services/http.service';
import { MqttProtocolService } from 'src/app/services/mqtt-protocol.service';
import { StateService } from 'src/app/services/state-manager.service';
import { seat, singleTransport } from 'src/app/types/types';

@Component({
  selector: 'app-transport-list-fragment',
  templateUrl: './transport-list-fragment.component.html',
  styleUrls: ['./transport-list-fragment.component.scss']
})
export class TransportListFragmentComponent implements OnInit {  
    @Input() vehicleSelector: VEHICLE = VEHICLE.bus

  constructor(readonly state: StateService, readonly http: HttpService, readonly mqttService: MqttProtocolService) { }

  ngOnInit() {
  }

  openSeatsInfo(id: number) {
    this.state.openSeatsInfo(id)
    this.mqttService.unsubscribe()
    if(this.state.transports.find(({idTransport}) => idTransport === id)?.seatsInfo){
        this.http.getVehicleInitialState(id)
        this.mqttService.subscribeTopic(id)
    }       
  }

  ngOnDestroy(){
    this.mqttService.unsubscribe()
  }

}
