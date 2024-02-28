import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css'],
})
export class DecrementComponent implements OnInit {
  @Output() decrement = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  decrease() {
    this.decrement.emit(-1);
  }
}
