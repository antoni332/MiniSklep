import { Product } from "../../app/models/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Macbook Pro 16\"',
    price: 3999.99,
    category: 'Elektronika',
    description: 'Najbardziej zaawansowany Macbook Pro z procesorem M1 Pro, 16 GB RAM i 1 TB SSD. Do wymagających zadań.',
    image: 'images/macbook.jpg'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S26 Ultra',
    price: 2499.99,
    category: 'Elektronika',
    description: 'Galaxy S26 Ultra — topowy smartfon z AI, zaawansowaną kamerą i mocnym procesorem. Dla tych, którzy chcą najlepszego.',
    image: 'images/samsung_s26U.jpg'
  },
  {
    id: 3,
    name: 'Bowers & Wilkins Pi8',
    price: 299.99,
    category: 'Elektronika',
    description: 'Pi8. Nowe słuchawki w-ear. Klasa audio najwyższej jakości, dedykowane ANC i kryształowo czysta jakość rozmów w eleganckim, dobrze przemyślanym designie.',
    image: 'images/BW_Pi8.jpeg'
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
    name: 'Patek Philippe 5327G-001 Grand Complications',
    price: 4999.99,
    category: 'Akcesoria',
    description: 'Luksusowy zegarek z kalendarzem wiecznym, białe złoto. Idealny dla wymagających miłośników luksusu i precyzji.',
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