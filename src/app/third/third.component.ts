import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  standalone: true,
  template:
    '<div>{{ componentName }} Lifecycle Component - {{ componentData }}</div>',
  selector: 'app-third',
})
export class ThirdComponent implements OnInit, OnDestroy {
  @Input() componentData: string = '';
  componentName: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.componentName = this.elementRef.nativeElement.tagName.toLowerCase();
    alert(
      `Entering ${this.componentName} Component with data: ${this.componentData}`
    );
  }

  ngOnDestroy(): void {
    alert(`Leaving ${this.componentName} Component`);
  }
}
