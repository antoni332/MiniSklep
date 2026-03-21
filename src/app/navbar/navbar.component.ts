import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItems$!: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
  }
}
