import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateArray',
  pure: false         // works with change detection -- try changing this to true and then check the o/p
})
export class UpdateArrayPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.join();
  }

}
