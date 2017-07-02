import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Todo } from '../shared/todo'

@Component({
    moduleId: module.id,
    selector: 'todoItem',
    templateUrl: 'todoItem.component.html',
    styleUrls: ['todoItem.component.css']
})
export class TodoItemComponent{
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
     
    toggle(){
        this.todo.completed = !this.todo.completed;
    }
     
    onDelete(){
        this.delete.emit(this.todo);
    }
}