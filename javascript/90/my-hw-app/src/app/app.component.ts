import { Component } from '@angular/core';
import { Order } from './shared/order';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';
  person: Person = {
    firstName: 'Joe',
    lastName: 'Biden',

    address: {
      street: 'Road Avenue',
      city: 'SomewhereVille',
      state: 'RF',
      zip: '79245'
    }
  };
  order: Order = {
    person: {
      firstName: 'John',
      lastName: 'Smith',
      address: {
        street: 'Avenue Road',
        city: 'NowhereVille',
        state: 'SM',
        zip: '99235'
      }
    },
    date: '8/27/2022',
    item: {
      name: 'Book',
      description: 'New. 432 pages.',
      price: '$5.99'
    }
  }
}
