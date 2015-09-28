import {Component, View} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoService} from "./todoService";
@Component({
    selector: 'todo-clear'
})
@View({
    template: `
        <div>
            <button (click)="onClear()">Clear Done</button>
        </div>
    `
})
export class TodoClear{
    constructor(
        public todoService:TodoService
    ){}

    onClear(){
        this.todoService.clearDone();
    }
}