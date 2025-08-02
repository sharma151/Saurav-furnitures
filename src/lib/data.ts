import { Product, Testimonial, Category, CarouselItem } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Leather Sofa',
    description: 'Elegant leather sofa with premium comfort and contemporary design. Perfect for living rooms.',
    price: 1299.99,
    category: 'sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    dimensions: { length: 220, width: 85, height: 75 },
    material: 'Genuine Leather',
    color: 'Brown'
  },
  {
    id: '2',
    name: 'Queen Size Bed Frame',
    description: 'Sturdy wooden bed frame with elegant design. Includes headboard and footboard.',
    price: 899.99,
    category: 'beds',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    dimensions: { length: 200, width: 160, height: 120 },
    material: 'Solid Wood',
    color: 'Oak'
  },
  {
    id: '3',
    name: 'Storage Cabinet',
    description: 'Versatile storage cabinet with multiple compartments. Perfect for organizing any room.',
    price: 599.99,
    category: 'cabinets',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 67,
    dimensions: { length: 120, width: 40, height: 180 },
    material: 'Engineered Wood',
    color: 'White'
  },
  {
    id: '4',
    name: 'Dining Table Set',
    description: 'Complete dining set with table and 6 chairs. Modern design for contemporary homes.',
    price: 1499.99,
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1617098907768-60b3c9a85c8f?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1617098907768-60b3c9a85c8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617098907768-60b3c9a85c8f?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    dimensions: { length: 180, width: 90, height: 75 },
    material: 'Solid Wood',
    color: 'Walnut'
  },
  {
    id: '5',
    name: 'Accent Chair',
    description: 'Stylish accent chair with plush upholstery. Adds character to any room.',
    price: 399.99,
    category: 'chairs',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 43,
    dimensions: { length: 75, width: 75, height: 85 },
    material: 'Fabric',
    color: 'Gray'
  },
  {
    id: '6',
    name: 'Coffee Table',
    description: 'Modern coffee table with storage. Perfect for living room organization.',
    price: 299.99,
    category: 'tables',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=600&fit=crop'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 78,
    dimensions: { length: 120, width: 60, height: 45 },
    material: 'Glass & Metal',
    color: 'Clear'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    company: 'Design Studio Co.',
    content: 'The quality of furniture from Saurav Furnitures is exceptional. Their pieces have transformed my clients\' homes with elegance and style.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Homeowner',
    company: '',
    content: 'I purchased a dining set from Saurav Furnitures and couldn\'t be happier. The craftsmanship is outstanding and delivery was seamless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    company: 'Urban Living',
    content: 'We\'ve been sourcing furniture from Saurav Furnitures for our properties. Their products are durable, beautiful, and reasonably priced.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-05'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Restaurant Owner',
    company: 'The Bistro',
    content: 'The commercial furniture we ordered exceeded our expectations. Great quality and professional service throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    date: '2023-12-28'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    role: 'Architect',
    company: 'Modern Spaces',
    content: 'Saurav Furnitures has become our go-to supplier for high-end residential projects. Their attention to detail is remarkable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    date: '2023-12-20'
  },
  {
    id: '6',
    name: 'Robert Kim',
    role: 'Hotel Manager',
    company: 'Grand Hotel',
    content: 'We outfitted our entire hotel with furniture from Saurav Furnitures. The quality and durability have been outstanding.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    date: '2023-12-15'
  }
];

export const categories: Category[] = [
  {
    id: 'sofas',
    name: 'Sofas',
    description: 'Comfortable and stylish sofas for your living room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    productCount: 12
  },
  {
    id: 'beds',
    name: 'Beds',
    description: 'Quality beds and bed frames for restful sleep',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop',
    productCount: 8
  },
  {
    id: 'cabinets',
    name: 'Cabinets',
    description: 'Storage solutions for every room in your home',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop',
    productCount: 15
  },
  {
    id: 'dining',
    name: 'Dining',
    description: 'Elegant dining tables and chairs for memorable meals',
    image: 'https://images.unsplash.com/photo-1617098907768-60b3c9a85c8f?w=400&h=300&fit=crop',
    productCount: 10
  },
  {
    id: 'chairs',
    name: 'Chairs',
    description: 'Comfortable chairs for every occasion',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
    productCount: 20
  },
  {
    id: 'tables',
    name: 'Tables',
    description: 'Functional and beautiful tables for your space',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=300&fit=crop',
    productCount: 14
  }
];

export const carouselItems: CarouselItem[] = [
  {
    id: '1',
    title: 'Modern Living Collection',
    description: 'Discover our latest collection of contemporary furniture designed for modern living.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop',
    link: '/products',
    buttonText: 'Shop Now'
  },
  {
    id: '2',
    title: 'Premium Quality Furniture',
    description: 'Crafted with the finest materials and attention to detail for lasting beauty.',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&h=600&fit=crop',
    link: '/about',
    buttonText: 'Learn More'
  },
  {
    id: '3',
    title: 'Special Offers',
    description: 'Limited time deals on selected furniture pieces. Don\'t miss out!',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=600&fit=crop',
    link: '/products',
    buttonText: 'View Offers'
  }
]; 