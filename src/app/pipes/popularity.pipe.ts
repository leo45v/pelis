import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity',
})
export class PopularityPipe implements PipeTransform {
  transform(value: number, digits: number = 2): unknown {
    return value.toFixed(digits);
  }
}
