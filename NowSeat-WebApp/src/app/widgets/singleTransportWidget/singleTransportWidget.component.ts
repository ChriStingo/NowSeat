import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SEAT_STATE } from 'src/app/constants/constants';
import { seat, singleTransport } from 'src/app/types/types';

@Component({
  selector: 'app-singleTransportWidget',
  templateUrl: './singleTransportWidget.component.html',
  styleUrls: ['./singleTransportWidget.component.scss']
})
export class SingleTransportWidgetComponent implements OnInit {
    @Input() singleTransport!: singleTransport
    @Input() seats: seat[] | undefined
    @Output() seatsInfoSelectorFunction = new EventEmitter<number>()
    @Input() seatsPrepared: SEAT_STATE[][] | undefined
    SEAT_STATE_TYPE = SEAT_STATE

  constructor() { }

  ngOnInit() {}

  seatsInfo(){
    this.seatsInfoSelectorFunction.emit(this.singleTransport.idTransport)
  }
}
