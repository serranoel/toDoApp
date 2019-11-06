import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.css']
})
export class ToDoElementComponent implements OnInit {

  arrTask = [];

  constructor() { 
    let tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    this.arrTask = (tasksLocalStorage !== null ? tasksLocalStorage : [] );
  }

  ngOnInit() {
  }

  addTask() {
    if((<HTMLInputElement>document.querySelectorAll(".input__space")[0]).value !== "") {
      let newTask: string = (<HTMLInputElement>document.querySelectorAll(".input__space")[0]).value;
      this.arrTask.push(newTask);
      (<HTMLInputElement>document.querySelectorAll(".input__space")[0]).value = "";
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem("tasks", JSON.stringify(this.arrTask))
      } 
    } else {
      alert("Your task is empty!")
    }
    
  }

  removeTask(index) {
    this.arrTask.splice(index, 1);
    if (typeof(Storage) !== 'undefined') {
    localStorage.setItem("tasks", JSON.stringify(this.arrTask))
    }
  }
}
