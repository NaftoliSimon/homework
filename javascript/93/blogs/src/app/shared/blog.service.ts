import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogServerProps } from './Blog';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogs() {
    return this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(blogs => {
        return blogs.map(blog => ({
          id: blog.id,
          name: blog.name,
          username: blog.username,
          email: blog.email,
          website: blog.website,
          companyName: blog.company.name
        }))
      }));
  }

  getBlog(blogId: number) {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`);
  }
}
