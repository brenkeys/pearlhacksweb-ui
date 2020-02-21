import { Component } from '@angular/core';
import { ToDoService } from './app.service';
import { ToDoItem } from './toDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pearl Hacks To Do List';
  items: Array<ToDoItem> = [];
  

  constructor(private appService: ToDoService){
  }

  ngOnInit(){
    this.appService.get().subscribe(items => {this.items = items}, error => {console.log(error)}  );
  }


  handleComplete = (id) => {
    this.appService.completeItem(id);
  }

  handleAdd = (input) => {
    let item = {id: null, description: input, completed: false};
    this.appService.add(item);
  }

  handleDelete = (id) => {
    this.appService.delete(id);
  }

}