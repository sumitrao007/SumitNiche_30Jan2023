import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
    transform(value: any[], searchTerm:string) {
    
      let EmpArr=[];
     
    
      for(let i=0;i<value.length;i++){

        if(value[i].name.trim().toLowerCase().indexOf(searchTerm.trim().toLowerCase())>-1){
          EmpArr.push(value[i]);
        }else if(value[i].dept.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
            EmpArr.push(value[i]);
        }else if(value[i].status.toLowerCase().startsWith(searchTerm.toLowerCase())){
          EmpArr.push(value[i]);
        }else if(value[i].country.toLowerCase().startsWith(searchTerm.toLowerCase())){
          EmpArr.push(value[i]);
        }

      }
      return EmpArr;

}
}


