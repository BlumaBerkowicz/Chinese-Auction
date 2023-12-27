import { Component, Input, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift.model';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MessageService]

})
export class CartComponent implements OnInit{
  constructor(private activatedroute: ActivatedRoute,private router:Router,private messageService:MessageService,private activatedRoute:ActivatedRoute,private giftService:GiftService){}
  user:User=new User();
  userData=sessionStorage.getItem("user");
ngOnInit(): void {
  if(this.cart.length==0){
    alert("your cart is empty")
    this.router.navigate(["../gifts"],{relativeTo:this.activatedroute});
  }
  this.user=this.userData? JSON.parse(this.userData):'';
    this.load();
  for(let i=0;i<this.cart.length;i++){
    this.totalSum=this.totalSum+this.cart[i].cost;
  }
}
cartData = sessionStorage.getItem("cart");
cart = this.cartData ? JSON.parse(this.cartData) : [];
totalSum:number=0;
delete(gift:Gift,count:number){
  
this.totalSum=this.totalSum-(count*gift.cost)
this.cart=this.cart.filter((p: { id: number; })=>p.id!=gift.id)
sessionStorage.setItem("cart",JSON.stringify(this.cart))
this.load();
}

placeHolder(){
    if(this.login()){
    for(let i=0;i<this.cart.length;i++){
      if(!this.cart[i].tickets){
        this.cart[i].tickets=[];
      }
      this.cart[i].tickets.push(this.user.id);
      this.giftService.updateGift(this.cart[i]).subscribe(data=>{
      })
    }
    sessionStorage.removeItem("cart");
        this.load();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'your order has been eccepted' });
  }
}

login(){
if(this.user){
  return true;}
else{
  alert("please login")
  this.router.navigate(["../../home"],{relativeTo:this.activatedroute});
  return false;}
};

uniqueGifts: { gift: Gift, count: number }[] = [];
load(){
const giftCount: { [key: number]: number } = {}; 
this.uniqueGifts = [];
for (const gift of this.cart) {
    const giftId = gift.id;
    giftCount[giftId] = (giftCount[giftId] || 0) + 1;
    }
    for (const gift of this.cart) {
      const giftId = gift.id;
      const existingGift = this.uniqueGifts.find((g) => g.gift.id === giftId);
      if (existingGift) {
        existingGift.count++;
      } else {
        this.uniqueGifts.push({ gift, count: 1 });
      }
    }
  }

  plus(id:number){
    var gift:Gift=this.cart.find( (p: { id: number; }) =>p.id==id)
    this.cart.push(gift);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.totalSum+=gift.cost;
  this.load();
  }

  minus(id:number){
    let deleted:boolean = false;
    this.cart = this.cart.filter((p:{ id: number,cost:number }) => {
  if (!deleted && p.id !== id) {
    return true;
  } else
   if (!deleted && p.id === id) {
    this.totalSum-=p.cost;
    deleted = true; 
    return false; 
  } else {
    return true; 
  }
});
sessionStorage.setItem("cart", JSON.stringify(this.cart));
this.load();
}
}