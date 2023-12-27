import { Component ,OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Donor } from 'src/app/models/donor.model';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css'],
  providers: [MessageService]

})
export class DonorListComponent implements OnInit{
  donors:Donor[]=[];
  selectedDonor:Donor=new Donor();
  donorToUpdate: Donor = new Donor();
  deletedSucssesfully:boolean=false;
  new:boolean=false;
constructor(private donorService:DonorService,private messageService:MessageService){}
ngOnInit(): void {
  this.getAllDonors();
}
visible: boolean = false;
getAllDonors(){
  this.donorService.GetAllDonors().subscribe(data=>{
    this.donors=data;
  })
}
showDialog(donor:Donor) {
    this.visible = true;
    this.selectedDonor=donor;
    this.donorToUpdate.id=donor.id;
    this.donorToUpdate.email=donor.email;
    this.donorToUpdate.name=donor.name;
}

closeDialog() {
    this.visible = false;
}

updateDonor(){
  if(this.new){
    this.donorService.addDonor(this.donorToUpdate).subscribe(data=>{
      this.getAllDonors();
      this.new=false;
      this.closeDialog();
    })
  }
  else{
  this.donorToUpdate.id=this.selectedDonor.id;
  this.donorService.UpdateDonor(this.donorToUpdate).subscribe(data=>{
    this.donors[this.donors.findIndex(g => g.id === this.donorToUpdate.id)]=this.donorToUpdate;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `gift ${this.donorToUpdate.id} Updated Sucssesfully` });  
      this.visible = false;
        return data;
  })}
}
deleteDonor(id:number){
this.donorService.deleteDonor(id).subscribe(
data=>{
  this.messageService.add({ severity: 'success', summary: 'Success', detail: `Gift ${id} Deleted Sucssesfully` });
  this.getAllDonors();
}
)
}
newDonor(){
  this.selectedDonor=new Donor();
  this.visible=true;
  this.new=true;
}
}
