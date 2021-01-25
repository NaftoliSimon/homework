import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/shared/blog.service';
import { Post } from 'src/app/shared/Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!: Observable<Post[]>;
  startingIndex!: number;
  lastIndex!: number;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.startingIndex = 0;
    this.lastIndex = 9;
    const blogId = this.route.snapshot.params.blogId;
    this.posts = this.blogService.getBlog(blogId);
  }
   onNext() {
     if(this.startingIndex < this.lastIndex) {
     this.startingIndex = this.startingIndex + 3;
     }
  }
  onPrev() {
    if(this.startingIndex !== 0) {
    this.startingIndex = this.startingIndex - 3;
    }
 }
}
// TODO: get the proper lastIndex 
