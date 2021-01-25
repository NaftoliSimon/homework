import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/Blog';
import { Observable } from 'rxjs';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs!: Observable<Blog[]>

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}
