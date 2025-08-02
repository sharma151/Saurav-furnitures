import { testimonials } from '@/lib/data'
import TestimonialCard from '@/components/TestimonialCard'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our Customers Say
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover why homeowners and businesses trust us to transform their spaces 
              with our premium furniture collections.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {testimonials.length}+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              4.8
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their homes 
            and offices with our premium furniture collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn-primary">
              Browse Our Collection
            </a>
            <a href="/contact" className="btn-secondary">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 