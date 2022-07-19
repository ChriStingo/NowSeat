import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VEHICLE } from 'src/app/constants/constants';
import { HttpService } from 'src/app/services/http.service';
import { MqttProtocolService } from 'src/app/services/mqtt-protocol.service';
import { StateService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-selector-widget',
  templateUrl: './selector-widget.component.html',
  styleUrls: ['./selector-widget.component.scss']
})
export class SelectorWidgetComponent implements OnInit {
    selector: boolean = false
    noInput: boolean = false
    @Output() vehicleTypeSelectorFunction = new EventEmitter<VEHICLE>()

  constructor(readonly state: StateService, readonly http: HttpService, readonly mqttService: MqttProtocolService) { }

  ngOnInit() {
  }

  changeSelector(value: boolean){
    if(value !== this.selector){
        this.mqttService.unsubscribe()
        this.state.closeTransport()
    }
    this.selector = value
    this.vehicleTypeSelectorFunction.emit(this.selector ? VEHICLE.train : VEHICLE.bus)
  }

  search(value: string) {
    if(value.length > 0){
        this.noInput = false
        this.state.reset()
        this.mqttService.unsubscribe()
        this.http.getVehicles(value)
    } else {
        this.noInput = true
    }
  }

}
