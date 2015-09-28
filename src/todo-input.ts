import {Component, View} from "angular2/angular2";
import {FORM_DIRECTIVES} from "angular2/forms";
import {TodoModel, TodoService} from "./todoService";


@Component({
    selector: 'todo-input'
})
@View({
    directives:[FORM_DIRECTIVES],
    template:`
        <div>
            <form (ng-submit)="onSubmit()">
                <div>{{model.thing}}</div>
                <input type="text" [(ng-model)]="model.thing">
            </form>
        </div>
    `
})
export class TodoInput{
    model = new TodoModel("");

    constructor(
        public todoService:TodoService
    ){}

    onSubmit(){
        this.todoService.addTodo(this.model);
        this.model = new TodoModel("");
    }
}