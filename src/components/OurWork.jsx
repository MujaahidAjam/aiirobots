import React from 'react';

const reviews = {
  web: [
    {
      company: 'Umzansi Fresh Foods',
      role: 'Grocery Retailer, Cape Town',
      quote: 'Our online orders doubled within two months. The site is fast, clean and easy for customers.',
      person: 'Naledi M.',
    },
    {
      company: 'Kalahari Outdoor Gear',
      role: 'E‑commerce, Northern Cape',
      quote: 'Migration to the new storefront was seamless. Page speed and SEO improvements were immediate.',
      person: 'Riaan V.',
    },
  ],
  ai: [
    {
      company: 'MetroCare Dental',
      role: 'Clinic, Johannesburg',
      quote: 'The chatbot books appointments after hours and answers FAQs. Our call volume dropped by 40%.',
      person: 'Dr. Thandi N.',
    },
    {
      company: 'Savanna Guest Lodge',
      role: 'Hospitality, Mpumalanga',
      quote: 'Guests get instant replies about availability and rates. Conversions improved significantly.',
      person: 'Sipho D.',
    },
  ],
  repairs: [
    {
      company: 'Bay Logistics',
      role: 'Transport, Durban',
      quote: 'Fleet laptops were repaired and optimized over a weekend. Zero downtime on Monday.',
      person: 'Anusha P.',
    },
    {
      company: 'Greenfield Accounting',
      role: 'Financial Services, Pretoria',
      quote: 'Data recovery saved a critical client file. Quick and professional service throughout.',
      person: 'Jaco S.',
    },
  ],
};

const ReviewCard = ({ company, role, quote, person }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="mb-3">
      <h4 className="text-lg font-semibold text-gray-900">{company}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
    <p className="text-gray-700 italic leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm text-gray-600">— {person}</div>
  </div>
);

const Section = ({ id, title, items }) => (
  <div id={id} className="mb-16">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </div>
  </div>
);

const OurWork = () => {
  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
          <p className="text-gray-600 mt-3">Realistic reviews from South African businesses we’ve helped.</p>
        </div>

        <Section id="our-work-web" title="Web Development" items={reviews.web} />
        <Section id="our-work-ai" title="AI Chatbot Integration" items={reviews.ai} />
        <Section id="our-work-repairs" title="Laptop Repairs" items={reviews.repairs} />
      </div>
    </section>
  );
};

export default OurWork;


