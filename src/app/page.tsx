import Image from 'next/image'
import Link from 'next/link'
import { carouselItems, categories, products, testimonials } from '@/lib/data'
import HeroCarousel from '@/components/HeroCarousel'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel items={carouselItems} />

      {/* Featured Categories */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4">
              Explore Our Collections
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Discover beautiful furniture for every room in your home. From living room essentials to bedroom comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Our most popular pieces, crafted with premium materials and timeless design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Crafting Quality Furniture Since 1995
              </h2>
              <p className="text-lg text-primary-200 mb-6">
                For over 25 years, Saurav Furnitures has been creating beautiful, durable furniture that transforms homes into sanctuaries. Our commitment to quality craftsmanship and timeless design has made us a trusted name in furniture manufacturing.
              </p>
              <p className="text-primary-200 mb-8">
                We source only the finest materials and work with skilled artisans to create pieces that will last for generations. Every piece tells a story of quality, comfort, and style.
              </p>
              <Link href="/about" className="btn-primary">
                Learn Our Story
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Furniture workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our furniture and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-secondary">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a personalized consultation and discover how our furniture can enhance your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-secondary">
              Browse Products
            </Link>
            <Link href="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 