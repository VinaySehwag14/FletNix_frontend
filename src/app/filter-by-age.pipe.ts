import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {
  transform(items: any[], age: number): any[] {
    if (!items) return [];
    return items.filter(item => item.ageRating <= age);
  }
}
