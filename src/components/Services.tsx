import React from 'react';
import { Globe, Bot, Laptop } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies to help your business establish a strong online presence and reach more customers.',
      features: [
        'Responsive design for all devices',
        'SEO optimization for better visibility',
        'Content management systems',
        'E-commerce integration',
        'Performance optimization',
        'Ongoing maintenance & support'
      ],
      price: 'R5,000'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Services',
      description: 'Intelligent chatbots that provide 24/7 customer support, answer queries instantly, and help convert visitors into customers while reducing operational costs.',
      features: [
        '24/7 automated customer support',
        'Multi-language support',
        'Lead generation & qualification',
        'Integration with existing systems',
        'Analytics and reporting',
        'Continuous learning & improvement'
      ],
      price: 'R2,500'
    },
    {
      icon: Laptop,
      title: 'Laptop Repairs',
      description: 'Professional laptop repair services with quick turnaround times. We fix hardware issues, software problems, and provide maintenance to keep your business running.',
      features: [
        'Hardware diagnostics & repairs',
        'Software troubleshooting',
        'Data recovery services',
        'Virus removal & security',
        'Performance optimization',
        'Warranty on all repairs'
      ],
      price: 'R500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed specifically for South African small and medium businesses. 
            Free consultation available for all services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;