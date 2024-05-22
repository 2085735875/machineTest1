import { Component } from "@angular/core";
import { Ipost } from "../interface/postInterface";
import { posts } from "../const/post";


@Component({
    selector : 'app-card',
    templateUrl : './card.component.html',
    styleUrls : ['./card.component.scss']
})
export class CardComponent{

    postArray : Array<Ipost> = posts;
}