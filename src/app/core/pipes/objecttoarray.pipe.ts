import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ObjectToArray'})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push({key, value: value[key]});
      }
    }
    return keys;
  }
}
