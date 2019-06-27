import { Component } from "@angular/core";



@Component({
    selector:'app-arithmatic',
    templateUrl:'./arithmatic.component.html',
    styleUrls:['./arithmatic.component.css']
})

export class ArithmaticComponent{
    Num1 = 800;
    Num2 = 600;

Addition(): number
{
    return this.Num1+ this.Num2;

}
Substraction(): number
{
return this.Num1- this.Num2;
}

Multiplication():number
{
    return this.Num1*this.Num2;
}

}