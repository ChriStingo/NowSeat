import { Component, OnInit } from '@angular/core';
import { VEHICLE } from 'src/app/constants/constants';
import { StateService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    vehicleSelector: VEHICLE = "bus"

  constructor(readonly state: StateService) { }

  ngOnInit(): void {
  }

  vehicleTypeSelectorFunction(value: VEHICLE){
    this.vehicleSelector = value
  }

}
