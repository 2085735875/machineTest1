import { Component } from "@angular/core";
import { Istd } from "../interface/stdInterface";
import { stdArray } from "../const/stdTable";

@Component({
    selector : 'app-table',
    templateUrl : './table.component.html',
    styleUrls : ['./table.component.scss']
})
export class TableComponent{
    studentArray : Array<Istd> = stdArray;
}
