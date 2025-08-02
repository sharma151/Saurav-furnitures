export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  material?: string;
  color?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
} 