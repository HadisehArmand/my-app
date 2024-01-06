import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
@Component({
  imports: [RouterOutlet],
  standalone: true,
  template:
    '<div>{{ componentName }} Lifecycle Component - {{ componentData.name }} - {{ componentData.age }}</div>',
  selector: 'Practice',
})
export class ThirdComponent implements OnInit, OnDestroy {
  @Input() componentData: Person = new Person('', 0);
  componentName: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.componentName = this.elementRef.nativeElement.tagName.toLowerCase();
    alert(
      `Entering ${this.componentName}  with name: ${this.componentData.name} and age ${this.componentData.age}`
    );
  }

  ngOnDestroy(): void {
    alert(`Leaving ${this.componentName} Component`);
  }
}
