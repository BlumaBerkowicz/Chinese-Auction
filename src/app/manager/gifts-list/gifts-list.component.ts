import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Donor } from 'src/app/models/donor.model';
import { Gift } from 'src/app/models/gift.model';
import { DonorService } from 'src/app/services/donor.service';
import { GiftService } from 'src/app/services/gift.service';


@Component({
  selector: 'app-gifts-list',
  templateUrl: './gifts-list.component.html',
  styleUrls: ['./gifts-list.component.css'],
  providers: [MessageService]

})
export class GiftsListComponent implements OnInit {
constructor(private giftService:GiftService,private donorService:DonorService,private messageService:MessageService){
}
new:boolean=false;
ngOnInit(): void {
  this.giftService.getAllGifts().subscribe(data=>{
    this.gifts=data;});
    this.donorService.GetAllDonors().subscribe(data=>{
      this.donors=data;
    })
}
donors:Donor[]=[]
gifts:Gift[]=[]
visible: boolean = false;
selectedGift:Gift=new Gift();
giftToUpdate:Gift=new Gift();
selectedDonor: Donor | undefined;
showDialog(gift:Gift) {
  this.visible = true;
  this.selectedGift=gift;
  this.giftToUpdate.id=gift.id;
  this.giftToUpdate.cost=gift.cost;
  this.giftToUpdate.description=gift.description;
  this.giftToUpdate.donor=gift.donor;
  this.giftToUpdate.image=gift.image;
  this.giftToUpdate.name=gift.name;
  this.giftToUpdate.tickets=gift.tickets ? gift.tickets:[];
}
closeDialog() {
  this.visible = false;
}
newGift(){
  this.giftToUpdate=new Gift();
  this.visible=true;
  this.new=true;
}
updateGift(){
  if(this.new)
{
this.giftService.postGift(this.giftToUpdate).subscribe(data=>{
  this.giftService.getAllGifts().subscribe(data=>{
    this.gifts=data;});
    this.closeDialog();
    this.new=false;
})
}  
else 
{this.giftToUpdate.id=this.selectedGift.id;
  this.giftService.updateGift(this.giftToUpdate).subscribe(data=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Sucssesfully' });
    this.giftService.getAllGifts().subscribe(data=>{
      this.gifts=data;});
    return data;
  }
  )
  this.closeDialog();
}}

deleteGift(gift:Gift){
if(gift.tickets.length>0){
  alert("not aloud to delete this gift.")
}
else{
   this.giftService.deleteGift(gift.id).subscribe(data=>{
    this.gifts= this.gifts.filter(obj => obj.id !== gift.id);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Sucssesfully' });
    return data;
  }
  )
}
}
}
