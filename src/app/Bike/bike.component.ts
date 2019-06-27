import { Component } from "@angular/core";


@Component({
    selector : 'app-bike',
    templateUrl:'./bike.component.html',
    styleUrls:['./bike.component.css']
})

export class BikeComponent{
    Bikename="Honda Activa 5G";
    Engine="109.19cc";
    Speed= "60 kmph";
    weight= "109 kg"

}