import { Component, OnInit } from '@angular/core';
import { singleTransport } from 'src/app/types/types';

@Component({
  selector: 'app-transport-list-fragment',
  templateUrl: './transport-list-fragment.component.html',
  styleUrls: ['./transport-list-fragment.component.scss']
})
export class TransportListFragmentComponent implements OnInit {
    elem: singleTransport[] = [
        {
          idTransport: 0,
          typo: "bus",
          stopCode: "0000",
          line: 0,
          time: "00:00",
          totalSeats: 0,
          start: "Genova Piazza Principe",
          destination: "Genova Sampierdarena",
          rows: 0,
          columns: 0
        },
        {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          },
          {
            idTransport: 1,
            stopCode: "0000",
            typo: "train",
            line: 1,
            time: "00:00",
            totalSeats: 0,
            start: "Start",
            destination: "Destination",
            rows: 0,
            columns: 0
          }
      ]
      

  constructor() { }

  ngOnInit() {
  }

}
