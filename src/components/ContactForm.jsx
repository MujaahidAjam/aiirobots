import React, { useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { openMailto } from '../utils/links';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`Free Consultation Request - ${formData.service || 'General Inquiry'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Service Interest: ${formData.service || 'Not specified'}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nThis is a free consultation request from the Aiirobots website.`
      );
      
      openMailto('aiirobots.co@gmail.com', subject, body);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27640472350?text=Hello%2C%20I%27m%20interested%20in%20a%20free%20consultation%20for%20your%20services', '_blank');
  };

  const handleEmailClick = () => {
    openMailto('aiirobots.co@gmail.com', 'Free Consultation Request');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a completely free consultation and personalized quote.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            100% Free Consultation - No Obligations
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start Your Free Consultation</h3>
            
            <div className="space-y-6 mb-8">
              <div
                onClick={handleEmailClick}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-gray-900">Email Us</h4>
                  <p className="text-blue-600 group-hover:underline">aiirobots.co@gmail.com</p>
                  <p className="text-sm text-gray-500">Get your free consultation via email</p>
                </div>
              </div>

              <div
                onClick={handleWhatsAppClick}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-green-100 p-4 rounded-lg group-hover:bg-green-200 transition-colors duration-200 flex items-center justify-center">
                  <WhatsAppIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-green-600 group-hover:underline">064 047 2350</p>
                  <p className="text-sm text-gray-500">Quick response for urgent inquiries</p>
                </div>
              </div>

              <div
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Call us at 064 047 2350"
              >
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-800">064 047 2350</p>
                  <p className="text-sm text-gray-500">Speak directly with our team</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Get in Your Free Consultation:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Personalized technology assessment
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Custom solution recommendations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Detailed project timeline & pricing
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  No pressure, no obligations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Your Free Consultation</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service (optional)</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI Chatbot Services">AI Chatbot Services</option>
                  <option value="Laptop Repairs">Laptop Repairs</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your business and what you'd like to discuss in your free consultation..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 flex items-center justify-center font-semibold"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Request Free Consultation
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-600 font-medium">
                  Thank you! Your free consultation request has been sent. We'll respond within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-red-600 font-medium">
                  There was an error sending your request. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


