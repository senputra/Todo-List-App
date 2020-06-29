import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-output-stream',
  templateUrl: './output-stream.component.html',
  styleUrls: ['./output-stream.component.css']
})
export class OutputStreamComponent implements OnInit {
  @Input() task:any;
  @Output() submitRemove:EventEmitter<any> = new EventEmitter();
  @Output() submitUpdate:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitTask(){
    this.submitRemove.emit(this.task.$key);
  }

  changeTask(){
    this.submitUpdate.emit({
      task:this.task,
      changes:!this.task.isChecked
    });
  }
}
