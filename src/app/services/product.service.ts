import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../../assets/data/products';
import { Filters } from '../models/filters';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS;

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): string[] {
    const categories = this.products.map(product => product.category);
    return [...new Set(categories)];
  }

  filterProducts(filter: Filters): Product[] {
    return this.products.filter(product => 
      (!filter.category || product.category === filter.category) &&
      (!filter.minPrice || product.price >= filter.minPrice) &&
      (!filter.maxPrice || product.price <= filter.maxPrice) &&
      (!filter.searchQuery || product.name.toLowerCase().includes(filter.searchQuery.toLowerCase() ?? ''))
    )
  }
}
