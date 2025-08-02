'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-black transition-all duration-300 ${
            isHovered ? 'bg-opacity-30' : 'bg-opacity-10'
          }`} />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-300 transition-colors duration-200">
              {category.name}
            </h3>
            <p className="text-sm text-white/90 mb-3 line-clamp-2">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {category.productCount} Products
              </span>
              <span className="text-accent-300 font-medium group-hover:translate-x-1 transition-transform duration-200">
                Explore →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 