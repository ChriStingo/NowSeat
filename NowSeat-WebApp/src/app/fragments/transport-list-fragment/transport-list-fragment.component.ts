import { Component, Input, OnInit } from '@angular/core';
import { VEHICLE } from 'src/app/constants/constants';
import { StateService } from 'src/app/services/state-manager.service';
import { seat, singleTransport } from 'src/app/types/types';

@Component({
  selector: 'app-transport-list-fragment',
  templateUrl: './transport-list-fragment.component.html',
  styleUrls: ['./transport-list-fragment.component.scss']
})
export class TransportListFragmentComponent implements OnInit {  
    @Input() vehicleSelector: VEHICLE = "bus"

  constructor(readonly state: StateService) { }

  ngOnInit() {
  }

  openSeatsInfo(id: number) {
    this.state.openSeatsInfo(id)
  }

}
