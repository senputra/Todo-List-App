import { Component, OnInit } from '@angular/core';
import { ModifyService } from '../services/modify.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  providers: [ ModifyService ]
})
export class TaskManagerComponent implements OnInit {
  todoList : any[];

  constructor(private modifyService : ModifyService) { }

  ngOnInit(){
    this.modifyService.getTasks().snapshotChanges().
    subscribe(item => {
      this.todoList = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.todoList.push(x);
      })
      this.todoList.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })
    });

  }

  addTask(itemTitle){
    this.modifyService.addItem(itemTitle.value);
    itemTitle.value = null;
  }

  removeTask($key:string){
    this.modifyService.removeItem($key);
  }

  updateTask(task,changes){
    this.modifyService.updateItem(task,changes);
  }
}
