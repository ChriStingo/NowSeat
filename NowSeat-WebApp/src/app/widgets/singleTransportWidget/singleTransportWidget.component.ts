import { Component, Input, OnInit } from '@angular/core';
import { singleTransport } from 'src/app/types/types';

@Component({
  selector: 'app-singleTransportWidget',
  templateUrl: './singleTransportWidget.component.html',
  styleUrls: ['./singleTransportWidget.component.scss']
})
export class SingleTransportWidgetComponent implements OnInit {
    @Input() singleTransport!: singleTransport
    @Input() seats: any

  constructor() { }

  ngOnInit() {
  }

}
