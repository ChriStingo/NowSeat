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
    seatsPrepared!: SEAT_STATE[][]
    SEAT_STATE_TYPE = SEAT_STATE

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    this.prepareSeats()
  }

  private prepareSeats(){
    if(this.seats) {
        this.seatsPrepared = []
        for(let row = 0; row < this.singleTransport.rows; row++){
            this.seatsPrepared.push([])
            for(let col = 0; col < this.singleTransport.columns; col++){
                this.seatsPrepared[row].push(SEAT_STATE.disabled)
            }
        }
        this.seats.forEach(({seat}) => this.seatsPrepared[seat.row-1][seat.column-1] = seat.state)
    }
  }

  seatsInfo(){
    this.seatsInfoSelectorFunction.emit(this.singleTransport.idTransport)
  }
}
