import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchKey:string,propName:string): any[] {
    if(!allproducts||searchKey==""||propName==""){
      return allproducts;
    }
    const result:any=[]
    allproducts.forEach((products:any)=>{
      if(products[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(products)
      }
    })
    return result;
  }

}
