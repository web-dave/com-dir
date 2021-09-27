import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
})
export class PagesPipe implements PipeTransform {
  transform(value: number, arg: string = 'number of pages'): string {
    console.log('Pipe');
    return `${arg}: ${value}`;
  }
}
