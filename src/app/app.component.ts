import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftService } from './services/gift.service';
import { MenuItem } from 'primeng/api';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnDestroy(): void {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange(event: StorageEvent): void {
    if (event.key === 'user') {
      this.updateUser();
    }
  }
  updateUser(): void {
    let userData = sessionStorage.getItem('user');
    this.user.name = userData ? JSON.parse(userData).name : '';
  }

  title = 'Chinese-Auction';
  items: MenuItem[] | undefined;
    activeItem: MenuItem | undefined;
    user:User=new User();
    ngOnInit() {
      let userData = sessionStorage.getItem('user');
      this.user.name = userData ? JSON.parse(userData).name : '';
      window.addEventListener('storage', this.handleStorageChange);
        this.items = [
            { label: 'home', icon: 'pi pi-fw pi-user',routerLink:'home'},
            { label: 'gifts', icon: 'pi pi-fw pi-gift',routerLink:'user/gifts'},
            { label: 'cart', icon: 'pi pi-fw pi-shopping-cart',routerLink:'user/cart'},
           { label: 'manager', icon: 'pi pi-fw pi-user',routerLink:'manager'}
              ];
        this.activeItem = this.items[0];
  }
}