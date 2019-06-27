import { Component } from "@angular/core";


@Component({
    selector : 'app-cloth',
    templateUrl: './cloth.component.html',
    styleUrls:['./cloth.component.css']
})

export class ClothComponent{
    clothname = "Shirt";
    clothcolor= "Blue";
    size="Double Excel";
    Type="Cotton";
}