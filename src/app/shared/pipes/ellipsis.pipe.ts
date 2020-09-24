import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  constructor(){
  }

  transform(value: string, ...args: number[]): string {
    console.log(args);
    value = value.substr(0, args[0]);
    return value + '...';
  }

  // util methods

}
