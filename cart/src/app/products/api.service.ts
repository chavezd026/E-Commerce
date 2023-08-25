import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallproducts(){
    return this.http.get('http://localhost:3000/all-products')
  }
  searchKey=new BehaviorSubject('')


  //add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      description:product.description
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
  }

  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }

  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }

}
