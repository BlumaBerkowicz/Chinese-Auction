import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MessageService]
})
export class HomeComponent implements OnInit {
  users:User[]=[]
  newUser:User=new User();
  userLogin:User=new User();
  password: FormControl=new FormControl('');
  LoginPassword: FormControl=new FormControl('');
  constructor(private activatedroute: ActivatedRoute,private router:Router,private userService:UserService,private messageService:MessageService){
  }
  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe(data=>{
      this.users=data;
    })
  }

login(){
this.userLogin.password=this.LoginPassword.value;
var userToFounf =this.users.find(p=>p.email==this.userLogin.email && p.password==this.userLogin.password);
  if(userToFounf){
    sessionStorage.setItem("user",JSON.stringify(userToFounf));
    this.messageService.add({ severity: 'success', summary: 'התחברת בהצלחה' });
    this.router.navigate(["../user/gifts"],{relativeTo:this.activatedroute});
  }
  else
  alert("Incorrect details please try again")
}

signUp(){
this.newUser.password=this.password.value;
if(this.newUser.password && this.newUser.name && this.newUser.email){
  console.log("here")
this.userService.PostUser(this.newUser).subscribe(data=>{
  console.log("test",data)
  this.messageService.add({ severity: 'success', summary: 'נרשמת בהצלחה', detail: 'כעת התחבר בבקשה' });
this.ngOnInit()
})
}}
}
