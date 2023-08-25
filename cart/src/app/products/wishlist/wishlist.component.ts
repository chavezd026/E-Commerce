import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  wishlist:any=[]
  eMsg:any

  constructor(private api:ApiService,private router:Router,private cart:CartService){

  }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.products
        if(this.wishlist.length==0){
          this.eMsg="Empty wishlist"
        }
      },
      (data:any)=>{
        this.eMsg=data.error.message
      }
    )
  }

  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        window.location.reload() //autorefresh
        // this.wishlist=result.wishlist
        // if(this.wishlist.length==0){

        // }
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

  addtocart(product:any){
    this.cart.addtocart(product)
    this.deletewish(product)
  }
}
