import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'todoForm',
    templateUrl: 'todoForm.component.html',
    styleUrls: ['todoForm.component.css']
})
 export class TodoFormComponent{
    title: string = "";
    @Output() add = new EventEmitter();
    onSubmit(){        
         this.add.emit(this.title);
    }
 
 
 }