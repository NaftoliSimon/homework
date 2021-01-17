import { Component } from '@angular/core';
import { Category } from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'item-search';

  public categories: Category[] =
    [
      {
        name: 'Food',
        items: [
          {
            name: 'Bananas',
            price: '$1.50'
          },
          {
            name: 'Kugel',
            price: '$4.99'
          },
          {
            name: 'Eggs',
            price: '$1.99'
          }
        ]
      },
      {
        name: 'Books',
        items: [
          {
            name: 'The Book About Books',
            price: '$4.99'
          },
          {
            name: 'Do Not Read Books',
            price: '$2.99'
          }
        ]
      },
      {
        name: 'Electronics',
        items: [
          {
            name: 'Vacuum Cleaner',
            price: '$54.99'
          },
          {
            name: 'Laptop',
            price: '$699.97'
          }
        ]
      },
      {
        name: 'Empty Category',
        items: [

        ]
      }
    ]
}
/*
calagory list

item list (per catagory)
 (with itemList or a seperate component?) item name and price
*/