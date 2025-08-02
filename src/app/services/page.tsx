"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ServicesPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [estimateData, setEstimateData] = useState({
    service: "",
    roomSize: "",
    complexity: "medium",
    timeline: "2-4 weeks",
  });

  const services: Service[] = [
    {
      id: "custom-furniture",
      title: "Custom Furniture Works",
      description:
        "Bespoke furniture designed and crafted to your exact specifications, ensuring perfect fit and style for your space.",
      features: [
        "Personalized design consultation",
        "Custom measurements and specifications",
        "Premium materials selection",
        "Handcrafted quality",
        "Installation and setup included",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1444208393177-b2a88904ed8d?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "client-designs",
      title: "Design Given by Client Works",
      description:
        "We bring your vision to life by implementing your specific design requirements with precision and craftsmanship.",
      features: [
        "Design consultation and review",
        "Technical feasibility assessment",
        "Material and finish recommendations",
        "Prototype development",
        "Quality assurance throughout",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop",
    },
    {
      id: "contracts",
      title: "Contracts for Office and Housing",
      description:
        "Comprehensive furniture solutions for commercial and residential spaces, from concept to completion.",
      features: [
        "Project planning and management",
        "Bulk pricing and discounts",
        "Installation and setup services",
        "Warranty and maintenance",
        "Ongoing support and service",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      id: "interior",
      title: "Interior House Works",
      description:
        "Complete interior design and furniture solutions to transform your living spaces into beautiful, functional environments.",
      features: [
        "Space planning and layout design",
        "Color scheme and material selection",
        "Lighting design and installation",
        "Accessories and finishing touches",
        "Complete project management",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: "iron-works",
      title: "Iron Wielding Works",
      description:
        "Custom metal furniture and decorative elements crafted with precision and artistic flair.",
      features: [
        "Custom metal furniture design",
        "Decorative iron work",
        "Gates and railings",
        "Outdoor furniture",
        "Restoration and repair services",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: "sofa-works",
      title: "Sofa Works",
      description:
        "Premium sofas and seating solutions designed for comfort, style, and durability.",
      features: [
        "Custom sofa design",
        "Premium fabric selection",
        "Ergonomic design",
        "Reupholstering services",
        "Maintenance and care",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "How long does a custom furniture project take?",
      answer:
        "Custom furniture projects typically take 2-6 weeks depending on complexity and materials. We'll provide a detailed timeline during consultation.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Yes, we provide complete installation and setup services for all our furniture. Our team ensures everything is properly installed and positioned.",
    },
    {
      question: "What warranty do you offer?",
      answer:
        "We offer a 2-year warranty on all custom furniture and 1-year warranty on standard pieces. Extended warranties are available for commercial contracts.",
    },
    {
      question: "Can you work with my existing furniture?",
      answer:
        "Absolutely! We offer restoration, reupholstering, and modification services to breathe new life into your existing furniture pieces.",
    },
    {
      question: "Do you handle commercial projects?",
      answer:
        "Yes, we specialize in commercial furniture solutions for offices, restaurants, hotels, and retail spaces with bulk pricing and project management.",
    },
  ];

  const calculateEstimate = () => {
    let basePrice = 0;
    let multiplier = 1;

    // Service type pricing
    switch (estimateData.service) {
      case "custom-furniture":
        basePrice = 2500;
        break;
      case "interior":
        basePrice = 5000;
        break;
      case "iron-works":
        basePrice = 1500;
        break;
      case "sofa-works":
        basePrice = 1200;
        break;
      default:
        basePrice = 2000;
    }

    // Room size multiplier
    switch (estimateData.roomSize) {
      case "small":
        multiplier *= 0.8;
        break;
      case "large":
        multiplier *= 1.5;
        break;
      case "extra-large":
        multiplier *= 2.2;
        break;
    }

    // Complexity multiplier
    switch (estimateData.complexity) {
      case "simple":
        multiplier *= 0.9;
        break;
      case "complex":
        multiplier *= 1.4;
        break;
    }

    return Math.round(basePrice * multiplier);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              From custom furniture to complete interior solutions, we offer
              comprehensive services to transform your spaces with quality
              craftsmanship and design excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary-600 mr-3">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 text-primary-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${service.id}`}
                  className="btn-primary w-full text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Estimate Calculator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-8">
            Estimate Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  value={estimateData.service}
                  onChange={(e) =>
                    setEstimateData({
                      ...estimateData,
                      service: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="custom-furniture">Custom Furniture</option>
                  <option value="interior">Interior Design</option>
                  <option value="iron-works">Iron Works</option>
                  <option value="sofa-works">Sofa Works</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Size
                </label>
                <select
                  value={estimateData.roomSize}
                  onChange={(e) =>
                    setEstimateData({
                      ...estimateData,
                      roomSize: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select room size</option>
                  <option value="small">Small (Under 200 sq ft)</option>
                  <option value="medium">Medium (200-500 sq ft)</option>
                  <option value="large">Large (500-1000 sq ft)</option>
                  <option value="extra-large">Extra Large (1000+ sq ft)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Complexity
                </label>
                <select
                  value={estimateData.complexity}
                  onChange={(e) =>
                    setEstimateData({
                      ...estimateData,
                      complexity: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="simple">Simple</option>
                  <option value="medium">Medium</option>
                  <option value="complex">Complex</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estimated Cost
              </h3>
              {estimateData.service && estimateData.roomSize ? (
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary-600">
                    ${calculateEstimate().toLocaleString()}
                  </div>
                  <p className="text-gray-600">
                    This is an estimated cost based on your selections. Final
                    pricing will be determined after consultation.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Get Detailed Quote
                  </Link>
                </div>
              ) : (
                <div className="text-gray-500">
                  Please select service type and room size to get an estimate.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create something beautiful
            together. Our team is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get Free Consultation
            </Link>
            <Link href="/products" className="btn-primary">
              Browse Our Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
