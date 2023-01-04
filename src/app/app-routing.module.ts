import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {CartsComponent} from './carts/carts.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'carts', component: CartsComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
]
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}