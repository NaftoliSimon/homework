import { Component, Input } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input()
  category: Category;

}
