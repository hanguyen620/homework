import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './product-list/products-list.component';
import { ProductComponent } from './product.component'

const routes: Routes = [
    {path: '', component: ProductsListComponent},
    {
        path: 'products', children: [
            { path: '', component: ProductsListComponent },
            { path: ':id', component: ProductDetailComponent },
        ]
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
}) 
export class ProductRoutingModule {

}