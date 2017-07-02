import { Component, Input } from '@angular/core'

import { Todo } from '../shared/todo'
import { TodoService } from '../shared/todo.service'

@Component({
    moduleId: module.id,
    selector: 'todoList',
    templateUrl: 'todoList.component.html',
    styleUrls: ['todoList.component.css']
})
export class TodoListComponent{
    @Input() todos: Todo[];
     
    constructor(private todoService: TodoService){
        this.todos = [];
    }
    
    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
     
    toggle(todo: Todo){
        todo.completed = !todo.completed;
    }

    delete(todo: Todo){
        console.log("delete");
        let index = this.todos.indexOf(todo);
        if(index > -1){
            this.todos.splice(index,1);
        }
    }
}