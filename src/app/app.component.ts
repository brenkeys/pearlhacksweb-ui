import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pearl Hacks To Do List';

  items: Array<any> = [];
  // [{title: "Meet another participant", completed: true}, 
  // {title: "Meet a mentor", completed: true},
  // {title: "Eat lots of food", completed: true},
  // {title: "Drink caffeine", completed: false},
  // {title: "Learn a new coding language", completed: true},
  // {title: "Learn about a sponsor organization", completed: false},
  // {title: "Attend the project demos", completed: false}];


  handleClick = (item) => {  
    const index = this.items.findIndex(x => x.title == item.title);
    this.items[index].completed = !this.items[index].completed;
  }

  handleAdd = (input) => {
    this.items.push({title: input, completed: false});
  }

  handleDelete = (item) => {
    const index = this.items.findIndex(x => x.title == item.title);
    this.items.splice(index, 1);
  }

}