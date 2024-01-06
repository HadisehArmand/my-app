import { Component } from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit, OnDestroy {
  public routeItem = '';
  subs: Subscription = new Subscription();
  constructor(private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs = this.route.params.subscribe((next) => {
      console.log(next);
      this.routeItem = next['id'];
    });
  }
}
