import { Component, OnInit } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private subscription: ZenObservable.Subscription | null = null;
  title = 'amplify-app';

  async ngOnInit() {
    // this.api.ListRestaurants().then(event => {
    //   this.restaurants = event.items as Restaurant[];
    // });

    // /* subscribe to new restaurants being created */
    // this.subscription = this.api.OnCreateRestaurantListener().subscribe(
    //   (event: any) => {
    //     const newRestaurant = event.value.data.onCreateRestaurant;
    //     this.restaurants = [newRestaurant, ...this.restaurants];
    //   }
    // );
  }
}
