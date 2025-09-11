import React from 'react';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features, price }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 ml-4">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <span className="text-gray-500 text-sm">Starting from</span>
        </div>
        <button
          onClick={scrollToContact}
          className="group w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center font-semibold"
        >
          Free Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;