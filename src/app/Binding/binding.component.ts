import { Component } from "@angular/core";
import { Employee } from './binding.model';



@Component({
    selector:'app-binding',
    templateUrl:'./binding.component.html',
    styleUrls:['./binding.component.css']
})

export class BindingComponent{
    employee: Employee[];
    constructor()
    {
     this.employee= [
     {id:100, name:"Swati", city:"Pune", gender:"female", salary:2000, doj:"01/01/2019"},
     {id:101, name:"Dipalee", city:"Pune", gender:"female", salary:3000, doj:"01/01/2019"},
     {id:102, name:"Priti", city:"Pune", gender:"female", salary:4000, doj:"01/01/2019"},
     {id:103, name:"Kamlesh", city:"Pune", gender:"male", salary:5000, doj:"01/01/2019"},
     {id:104, name:"Vivek", city:"Pune", gender:"male", salary:6000, doj:"01/01/2019"},
    ]
    }
    imagePath: string= "https://angular.io/assets/images/logos/angular/angular.svg";
     isDisable=false;

     name:string= "Assimilate";

     name1: string="Assimilate";

     name2: string="Assimilate";
     show:boolean= True;
     
     buttonclicked(){
         console.log(this.show);
         this.show=!this.show;
     }

     HideShowImage(): boolean{
         return this.show=!this.show;
     }

     getCountAllEmployee(): number
        {
        return this.employee.length;
        }
        getCountofAllMale():number{
            return this.employee.filter(data=>data.gender.toLowerCase()==="male").length;
        }
        getCountofAllFemale():number{
            return this.employee.filter(data=>data.gender.toLowerCase()==="female").length;
        }
    }
