import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

import { GetsService } from '../gets.service'
import { Product } from './product'

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    products = 'products'
    dataAll!: Observable<Product[]>

    constructor(private gets: GetsService) {
    }
    
    getProduct() {
        this.gets.fetchData(this.products).subscribe(data => {
            return this.dataAll = data.products 
        })
    }
}