import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {
  transform(value: any, args?: any): any {
      console.log("pipe: ",value,args);
        if (typeof args[0] === "undefined") {
                return value;
        }
        let direction = args[0][0]; 
        let column = args.replace('-','');
        if(args == '-patientFor')
        value.sort((a: any, b: any) => {
                let left = Number(new Date(a.date));
                let right = Number(new Date(b.date));
                return (direction === "-") ? right - left : left - right;
        });
        else if(args == '-create_date')
        value.sort((a: any, b: any) => {
            let left = Number(new Date(a.visitDetails.date));
            let right = Number(new Date(b.visitDetails.date));
            return (direction === "-") ? right - left : left - right;
    });
        return value;
    }
}