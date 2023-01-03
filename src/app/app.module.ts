import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ObserversModule } from '@angular/cdk/observers';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './products/product/product.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      {path: ':id', component: ProductComponent }
    ]
  },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'carts', component: CartsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    PostsComponent,
    CartsComponent,
    HomeComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    ObserversModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
