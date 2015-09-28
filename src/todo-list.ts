import {Component, View, NgFor, NgClass} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoService} from "./todoService";
import {TodoModel} from "./todoService";


@Component({
    selector: 'todo-list'
})
@View({
    directives:[NgFor, NgClass],
    styles:[`
        .done{text-decoration: line-through}
    `],
    template: `
        <div>
            <h2 [hidden]="todoService.hasTodos">Add a todo</h2>
            <h2 [hidden]="!todoService.allDone">You're all done!</h2>
            <div *ng-for="#todo of todoService.todos">
                <span [ng-class]="todo.status">{{todo.thing}}</span>
                <button (click)="onToggle(todo)">Toggle</button>
            </div>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ){}

    onToggle(todo:TodoModel){
        todo.toggle();
    }
}