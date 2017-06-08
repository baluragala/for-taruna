import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'powerof'
})
export class PowerOfPipe implements PipeTransform {

  transform(value: number, toPower: number): number {
    return Math.pow(value, toPower);
  }

}
