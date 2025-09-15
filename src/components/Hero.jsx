import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27640472350?text=Hello%2C%20I%27m%20interested%20in%20your%20services', '_blank');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-blue-600 block mt-2">Smart Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering South African SMEs with cutting-edge web development, AI chatbot solutions, 
            and reliable laptop repair services. Get your free consultation today - no obligations, just expert advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center font-semibold"
            >
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="group border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center font-semibold"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              WhatsApp Us
            </button>
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-full">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-green-800 font-semibold">Free Consultation Available - No Strings Attached</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


