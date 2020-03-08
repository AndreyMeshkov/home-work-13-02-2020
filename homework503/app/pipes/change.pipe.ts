import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().split('_').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  }

}
