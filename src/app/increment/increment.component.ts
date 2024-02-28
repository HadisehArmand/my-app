import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent implements OnInit {
  @Output() increment = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  increase() {
    this.increment.emit(1);
  }

  decrease() {
    this.increment.emit(-1);
  }
}
