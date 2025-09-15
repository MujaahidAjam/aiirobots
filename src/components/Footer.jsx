import React from 'react';
import { Bot, Mail } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27640472350?text=Hello%2C%20I%27m%20interested%20in%20a%20free%20consultation', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ajammujaahid9@gmail.com?subject=Free%20Consultation%20Request';
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">Aiirobots</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering South African SMEs with cutting-edge technology solutions. 
              From web development to AI chatbots and laptop repairs - we're your 
              complete digital transformation partner. Free consultations available.
            </p>
            <div className="space-y-3">
              <div
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-3" />
                <span>ajammujaahid9@gmail.com</span>
              </div>
              <div
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-200"
              >
                <WhatsAppIcon className="h-5 w-5 mr-3" />
                <span>064 047 2350</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">AI Chatbot Services</li>
              <li className="text-gray-300">Laptop Repairs</li>
              <li className="text-gray-300">Free Consultations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aiirobots. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                aria-label="WhatsApp us"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


