import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchResident: string): any[] {
    if(!items) return [];
    if(!searchResident) return items;

searchResident = searchResident.toLowerCase();

return items.filter( it => {
      return it.name.toLowerCase().includes(searchResident) ||
      it.status.toLowerCase().includes(searchResident) ||
      it.caretaker.toLowerCase().includes(searchResident) ||
      it.room.toLowerCase().includes(searchResident);
    });
   }
}