import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-filter-panel',
  imports: [FormsModule, CommonModule],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css'
})
export class FilterPanelComponent {

  categories: string[] = [];
  constructor(private productService: ProductService) {}
  
  filters: Filters = {
    category: '',
    minPrice: 0,
    maxPrice: 5000,
    searchQuery: ''
  };

  @Output() filtersChange = new EventEmitter<Filters>();

  updateFilters() {
    this.filtersChange.emit(this.filters);
  }


  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

}
