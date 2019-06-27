import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employeecomponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { BookComponent } from './Book/book.component';
import { BikeComponent } from './Bike/bike.component';
import { ListComponent } from './List/list.component';
import { ClothComponent } from './cloth/cloth.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './Contact/contact.component';
import { StudentComponent } from './Student/student.component';
import { ArithmaticComponent } from './Arithmatic/arithmatic.component';
import { BindingComponent } from './Binding/binding.component';
import { FormComponent } from './Forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    Employeecomponent,
    CustomerComponent,
    CompanyComponent,
    MobileComponent,
    DesktopComponent,
    BookComponent,
    BikeComponent,
    ListComponent,
    ClothComponent,
    ElectronicsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentComponent,
    ArithmaticComponent,
    BindingComponent,
    FormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
