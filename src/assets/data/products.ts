import { Product } from "../../app/models/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Laptop Premium',
    price: 3999.99,
    category: 'Elektronika',
    description: 'Wydajny laptop do pracy i rozrywki.',
    image: 'images/macbook.jpg'
  },
  {
    id: 2,
    name: 'Smartfon Pro',
    price: 2499.99,
    category: 'Elektronika',
    description: 'Najnowszy smartfon z aparatem 108 MP i 5G.',
    image: 'images/smartphone_s26.jpg'
  },
  {
    id: 3,
    name: 'Słuchawki bezprzewodowe',
    price: 299.99,
    category: 'Elektronika',
    description: 'Wysokiej jakości słuchawki z aktywną redukcją szumów.',
    image: 'images/wireless_bw.jpg'
  },
  {
    id: 4,
    name: 'Buty sportowe',
    price: 349.99,
    category: 'Sport',
    description: 'Wygodne buty do biegania z amortyzacją.',
    image: 'images/sport_nike.jpg'
  },
  {
    id: 5,
    name: 'Plecak turystyczny',
    price: 199.99,
    category: 'Sport',
    description: 'Pojemny plecak idealny na wyprawy.',
    image: 'images/tourist_backpack.jpg'
  },
  {
    id: 6,
    name: 'T-shirt bawełniany',
    price: 79.99,
    category: 'Odzież',
    description: '100% bawełna, komfortowy i stylowy.',
    image: 'images/cotton_tshirt.jpg'
  },
  {
    id: 7,
    name: 'Elegancki zegarek',
    price: 599.99,
    category: 'Akcesoria',
    description: 'Elegancki zegarek na każdą okazję.',
    image: 'images/patek_watch.jpg'
  },
  {
    id: 8,
    name: 'Ekspres do kawy z młynkiem',
    price: 899.99,
    category: 'Dom',
    description: 'Automatyczny ekspres do kawy z wbudowanym młynkiem.',
    image: 'images/coffemaker.jpg'
  }
];