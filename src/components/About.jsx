import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Aiirobots</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted local technology partner, committed to empowering South African businesses with cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Local Businesses</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the technology gap for South African SMEs, Aiirobots combines 
              cutting-edge innovation with personalized service. We understand the unique challenges faced 
              by local businesses and provide tailored solutions that drive growth and efficiency. Every client 
              starts with a completely free consultation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As an online-based business serving all of South Africa, we've helped dozens of businesses transform 
              their operations through intelligent web solutions, AI-powered customer service, and reliable technical support. 
              Our commitment goes beyond just delivering services – we build lasting partnerships with free ongoing consultations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Local Focus</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 ml-4">Our Mission</h4>
              </div>
              <p className="text-gray-600">
                To democratize access to advanced technology for South African SMEs, enabling them to 
                compete effectively in the digital economy while maintaining their local identity and values.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 ml-4">Our Values</h4>
              </div>
              <p className="text-gray-600">
                Integrity, innovation, and community-first approach guide everything we do. We believe 
                in transparent communication, fair pricing, and delivering results that exceed expectations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 ml-4">Our Promise</h4>
              </div>
              <p className="text-gray-600">
                Fast, reliable service with ongoing support. We're not just service providers – we're 
                your technology partners, invested in your long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


