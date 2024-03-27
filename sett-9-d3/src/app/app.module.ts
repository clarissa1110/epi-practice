import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TopPostComponent } from './components/home/top-post/top-post.component';
import { RelatedComponent } from './components/home/related/related.component';
import { MightLikeComponent } from './components/home/might-like/might-like.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'activePosts',
    component: ActivePostsComponent
  },
  {
    path:'inactivePosts',
    component: InactivePostsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TopPostComponent,
    RelatedComponent,
    MightLikeComponent,
    PostDetailsComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
