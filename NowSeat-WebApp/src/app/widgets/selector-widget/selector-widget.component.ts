import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-widget',
  templateUrl: './selector-widget.component.html',
  styleUrls: ['./selector-widget.component.scss']
})
export class SelectorWidgetComponent implements OnInit {
    selector: boolean = false


  constructor() { }

  ngOnInit() {
  }

  search(value: string) {
    // TODO: Be call
  }

}
