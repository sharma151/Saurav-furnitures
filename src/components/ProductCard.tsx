'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400'
            : index < rating
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div
      className="card group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ${
          isHovered ? 'bg-opacity-20' : ''
        }`}>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Link
              href={`/products/${product.id}`}
              className="bg-white text-primary-800 px-6 py-3 rounded-lg font-medium hover:bg-accent-500 hover:text-white transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Out of Stock
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-2 right-2 bg-accent-500 text-white px-2 py-1 rounded text-xs font-medium capitalize">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-primary-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-primary-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-primary-600">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-800">
            ${product.price.toLocaleString()}
          </div>
          
          <Link
            href={`/products/${product.id}`}
            className="text-accent-600 hover:text-accent-700 font-medium text-sm transition-colors duration-200"
          >
            Learn More →
          </Link>
        </div>

        {/* Product Details */}
        {product.material && (
          <div className="mt-3 pt-3 border-t border-primary-100">
            <div className="flex justify-between text-xs text-primary-600">
              <span>Material:</span>
              <span className="font-medium">{product.material}</span>
            </div>
            {product.color && (
              <div className="flex justify-between text-xs text-primary-600 mt-1">
                <span>Color:</span>
                <span className="font-medium">{product.color}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 