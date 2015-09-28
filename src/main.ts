import {Component, View, bootstrap} from "angular2/angular2";
import {TodoList} from "./todo-list";
import {TodoService} from "./todoService";
import {TodoInput} from "./todo-input";
import {TodoClear} from "./todo-clear";

@Component({
    selector: 'app'
})
@View({
    directives:[TodoList, TodoInput, TodoClear],
    template: `
        <div>
            <h2>Todo App</h2>
            <todo-input></todo-input>
            <todo-list></todo-list>
            <todo-clear></todo-clear>
        </div>
    `
})
class App{}

bootstrap(App,
    [TodoService]
).then(
    success => console.log('app starting...'),
    error => console.log(error)
);