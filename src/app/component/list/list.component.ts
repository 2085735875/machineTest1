import { Component } from "@angular/core";



@Component({
    selector : "app-list",
    templateUrl : "./list.component.html",
    styleUrls : ["./list.component.scss"]
})
export class ListComponent{
    cities : Array<string> = ['Bhadgaon', 'Chalisgaon', 'Pochora', 'Jalgaon'];
}
