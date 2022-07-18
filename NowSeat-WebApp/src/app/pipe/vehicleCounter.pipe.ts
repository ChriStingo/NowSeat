import { Pipe, PipeTransform } from '@angular/core';
import { VEHICLE } from '../constants/constants';
import { singleTransport } from '../types/types';

@Pipe({
  name: 'vehicleCounter'
})
export class VehicleCounterPipe implements PipeTransform {

  transform(value: singleTransport[], vehicle?: VEHICLE): number {
    let result = 0
    value.forEach(({typo}) => {if(typo === vehicle) result++});
    return result
  }

}
