import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): string {
    let long, short;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Aiport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'München':
        short = 'MUC';
        long = 'Aiport Munich Franz-Joseph Strauß';
        break;
      default:
        return short = long = value; // 'ROM';
    }

    if (fmt === 'short') return short;
    return long;


  }

}
