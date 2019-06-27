import { Component } from '@angular/core';


@Component({
    selector: 'app-mobile',
    templateUrl:'./mobile.component.html',
    styleUrls:['./mobile.component.css']
})




export class MobileComponent{
    num1=100;
    num2=200;
    num3= this.num1 + this. num2;
    GetAddition(): number
    {
        
         return this.num1+this.num2;

    }

}