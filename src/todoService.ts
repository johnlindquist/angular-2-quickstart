export class TodoModel {
    status:string = "started";

    constructor(
        public thing:string
    ) {}

    toggle():void {
        this.status =
            this.status == "started"
                ? "done" : "started"
    }
}

export class TodoService {
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code"),
    ];

    get allDone():boolean {
        return this.todos.every(item => item.status == "done")
            && this.todos.length > 0;
    }

    get hasTodos():boolean {
        return this.todos.length > 0;
    }

    addTodo(todo):void {
        this.todos.push(todo);
    }

    clearDone():void {
        this.todos =
            this.todos.filter(
                todo => todo.status == "started"
            )
    }
}