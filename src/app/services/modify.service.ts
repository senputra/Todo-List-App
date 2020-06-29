import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ModifyService {
  tasks : AngularFireList<any>;
  constructor(private firebasedb : AngularFireDatabase) { }
  getTasks(){
    this.tasks = this.firebasedb.list("titles");
    return this.tasks;
  }

  addItem(title:string){
    this.tasks.push({
      title:title,
      isChecked:false
    });
  }

  removeItem($key:string){
    this.tasks.remove($key);
  }

  updateItem(task,changes){
    this.tasks.update(task.$key,{
      isChecked:changes
    });

  }

}
