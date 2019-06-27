import { Component } from "@angular/core";



@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})

export class StudentComponent{
    name: string="Assimilate";
    lname: string="Technologies";
    city= "Pune , New Sanghavi";
    landmark="Bank of Baroda";
    DateofStarting="01/01/2018";
    StarterPackage="2000";

}