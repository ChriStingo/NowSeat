import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VEHICLE } from 'src/app/constants/constants';

@Component({
  selector: 'app-selector-widget',
  templateUrl: './selector-widget.component.html',
  styleUrls: ['./selector-widget.component.scss']
})
export class SelectorWidgetComponent implements OnInit {
    selector: boolean = false
    @Output() vehicleTypeSelectorFunction = new EventEmitter<VEHICLE>()


  constructor() { }

  ngOnInit() {
  }

  changeSelector(value: boolean){
    this.selector = value
    this.vehicleTypeSelectorFunction.emit(this.selector ? "train" : "bus")
  }

  search(value: string) {
    // TODO: Be call
  }

}
