import { Component, Input } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input()
  categories: Category[];
  selectedCategory: Category;

  handleClick(category: Category, i: number) {
    this.selectedCategory = this.categories[i];
  }
  addCategory(name) {
    if (name) {
      this.categories.push(
        {
          name: name,
          items: []
        }
      );
    }
  }
  deleteCategory(category) {
    this.categories.splice(category, 1);
  }
}
