import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
 items: MenuItem[] =[
  
];
 activeItem: MenuItem =this.items[0];
 user:any={};
  constructor(private activatedroute: ActivatedRoute,private router:Router) { }
  visible:boolean=false;
  ngOnInit(): void {
    let userData=sessionStorage.getItem("user");
    this.user=userData ? JSON.parse(userData):"";
    if(this.user.password=="1234"){  
        this.visible=true;
    }
    else{
      alert("please login as manager")
      this.router.navigate(["../home"],{relativeTo:this.activatedroute});
    }
    this.items=[{ label: 'donors', icon: 'pi pi-fw pi-user',routerLink:'donors' },
    { label: 'gifts', icon: 'pi pi-fw pi-gift',routerLink:'gifts'  },
    { label: 'raffle', icon: 'pi pi-fw pi-calendar',routerLink:'raffle'  },]
      this.activeItem = this.items[0];
  }
  checkManager(){
    this.visible=true;
  }
}
