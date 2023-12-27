import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Gift } from 'src/app/models/gift.model';
import { User } from 'src/app/models/user.model';
import { GiftService } from 'src/app/services/gift.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css'],
  providers:[MessageService]
})
export class RaffleComponent implements OnInit {
constructor(private messageService:MessageService,private giftService:GiftService,private userService:UserService){
}
gifts:Gift[]=[];
users:User[]=[];
winners:any[]=[];

ngOnInit(): void {
  this.giftService.getAllGifts().subscribe(data=>{
    this.gifts=data;
    })
    this.userService.GetAllUsers().subscribe(data=>{
      this.users=data;
    })
}
  raffle(){
  for(let i=0;i<this.gifts.length;i++){
    if(this.gifts[i].tickets){
    let m = Math.floor(Math.random() * (this.gifts[i].tickets.length));
    let id=this.gifts[i].tickets[m];
    this.userService.GetUserById(id).subscribe(data=>{
      this.gifts[i].tickets=[];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `the winner is: ${data.name} with gift: ${this.gifts[i].name}` });  
    })}
  }
}
}
