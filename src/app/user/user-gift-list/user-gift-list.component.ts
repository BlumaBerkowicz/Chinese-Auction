import { state } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Gift } from 'src/app/models/gift.model';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-user-gift-list',
  templateUrl: './user-gift-list.component.html',
  styleUrls: ['./user-gift-list.component.css'],
  providers:[MessageService]
})
export class UserGiftListComponent {

  constructor(private giftService:GiftService,private activatedroute: ActivatedRoute,private router:Router,private messageService:MessageService) { }
  
  gift:Gift=new Gift;
  totalSum:number=0;
  gifts:Gift[]=[];
  cart:Gift[]=[];

  ngOnInit(): void {
    this.getAllGifts();
    let cartData = sessionStorage.getItem("cart");
    this.cart = cartData ? JSON.parse(cartData) : [];  
  }

  addToCart(gift:Gift){
    this.totalSum+=gift.cost;
    this.cart.push(gift)
    sessionStorage.setItem("cart",JSON.stringify(this.cart));
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `gift ${gift.name} added successfully to cart` });
  }

  goToCart(){
    this.router.navigate(["./cart"],{relativeTo:this.activatedroute});
  }

  getAllGifts(){
  this.giftService.getAllGifts().subscribe(data=>{
    this.gifts=data;});
  }
}
