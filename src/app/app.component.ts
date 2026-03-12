import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPanelComponent } from "./filter-panel/filter-panel.component";
import { CartSidebarComponent } from "./cart-sidebar/cart-sidebar.component";
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { Filters } from './models/filters';

@Component({
  selector: 'app-root',
  imports: [FilterPanelComponent, CartSidebarComponent, ProductCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cartItemCount = 0;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {};

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  };

  applyFilters(filters: Filters) {
    this.filteredProducts = this.productService.filterProducts(filters);
  }

  toggleCart() {
    // toggle cart sidebar visibility
  }
}
