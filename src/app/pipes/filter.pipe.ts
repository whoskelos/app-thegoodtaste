import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3 ) {
      return value;
    }
    const resultRest = [];
    for (const rest of value) {
      if(rest.tipo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRest.push(rest);
      };
    };
    return resultRest;
  }

}
