import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'; 
import { AppComponent } from './app.component';
import { DonorListComponent } from './manager/donor-list/donor-list.component';
import { GiftsListComponent } from './manager/gifts-list/gifts-list.component';
import { ManagerComponent } from './manager/manager.component';
import { CartComponent } from './user/cart/cart.component';
import { UserGiftListComponent } from './user/user-gift-list/user-gift-list.component';
import { HomeComponent } from './home/home.component';
import { RaffleComponent } from './manager/raffle/raffle.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent,children:[
  {path:'gifts',component:UserGiftListComponent} ,
  {path:'cart',component:CartComponent}]},
  {path:'man',component:ManagerComponent},
  {path:'manager',component:ManagerComponent,children:[
  {path:'donors',component:DonorListComponent},
  {path:'gifts',component:GiftsListComponent},
  {path:'raffle',component:RaffleComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
