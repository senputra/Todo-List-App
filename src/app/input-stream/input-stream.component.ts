import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-stream',
  templateUrl: './input-stream.component.html',
  styleUrls: ['./input-stream.component.css']
})
export class InputStreamComponent implements OnInit {

  @Output() submit:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitName(task:any){
    this.submit.emit(task);
  }
}
