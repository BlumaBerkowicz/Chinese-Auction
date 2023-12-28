import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { DonorListComponent } from './manager/donor-list/donor-list.component';
import { GiftsListComponent } from './manager/gifts-list/gifts-list.component';
import { CartComponent } from './user/cart/cart.component';
import { UserGiftListComponent } from './user/user-gift-list/user-gift-list.component';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { RaffleComponent } from './manager/raffle/raffle.component';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DonorListComponent,
    GiftsListComponent,
    ManagerComponent,
    CartComponent,
    UserGiftListComponent,
    HomeComponent,
    RaffleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    PasswordModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    DividerModule,
    CardModule,
    ToastModule,
    TabMenuModule,
    DataViewModule,
    CommonModule,
    MenubarModule,
    ImageModule,
    TabViewModule,
    CalendarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
