import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './product-list/products-list.component';
import { ProductRoutingModule } from './product-route.module';
import { ProductComponent } from './product.component'

@NgModule({
    imports: [CommonModule, ProductRoutingModule, MatCardModule, MatPaginatorModule, HttpClientModule],
    providers: [ProductsListComponent],
    declarations: [ProductDetailComponent, ProductsListComponent, ProductComponent]
})

export class ProductsModule {}