import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

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
      
      const mailtoLink = `mailto:ajammujaahid9@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
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
    window.location.href = 'mailto:ajammujaahid9@gmail.com?subject=Free%20Consultation%20Request';
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
                  <p className="text-blue-600 group-hover:underline">ajammujaahid9@gmail.com</p>
                  <p className="text-sm text-gray-500">Get your free consultation via email</p>
                </div>
              </div>

              <div
                onClick={handleWhatsAppClick}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-green-100 p-4 rounded-lg group-hover:bg-green-200 transition-colors duration-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-green-600 group-hover:underline">064 047 2350</p>
                  <p className="text-sm text-gray-500">Quick response for urgent inquiries</p>
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


