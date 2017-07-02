import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todoForm/todoForm.component';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoItemComponent } from './todoItem/todoItem.component';
import { TodoService } from './shared/todo.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
     
}