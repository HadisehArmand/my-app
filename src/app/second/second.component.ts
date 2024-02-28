import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  @Input() counterNum = 0;
  @Output() counterClick = new EventEmitter();
  // @Input() props!: { counterNum: number; counterChenge: number };
  // @Output() counterClick: EventEmitter<number> = new EventEmitter();
  // @Output() ClickChange: EventEmitter<number> = new EventEmitter();
  // counterClickChange: any;

  public onClickBtn() {
    this.counterClick.emit(++this.counterNum);
  }
  // public onClickBTn() {
  //   this.counterClickChange.emit(this.props.counterChenge);
  // }
}
