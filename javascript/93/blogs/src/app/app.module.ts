import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { BlogInfoComponent } from './blog-list/blog-info/blog-info.component';
import { BlogComponent } from './blog-list/blog/blog.component';
import { PostComponent } from './blog-list/blog/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BlogInfoComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
