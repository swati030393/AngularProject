import { Component } from "@angular/core";


@Component({
    selector : 'app-about',
    templateUrl: './about.component.html',
    styleUrls:['./about.component.css']
})

export class AboutComponent{
    Name = "Kamlesh";
    Surname= "More";
    Designation="Softskill Trainer";
    Fees="8000";

}