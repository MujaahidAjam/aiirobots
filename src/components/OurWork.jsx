import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'our-work-web',
    title: 'Web Development',
    items: [
      {
        company: 'Umzansi Fresh Foods',
        role: 'Grocery Retailer, Cape Town',
        quote: 'Our online orders doubled within two months. The site is fast, clean and easy for customers.',
        person: 'Naledi M.',
        rating: 4.9,
      },
      {
        company: 'Kalahari Outdoor Gear',
        role: 'E‑commerce, Northern Cape',
        quote: 'Migration to the new storefront was seamless. Page speed and SEO improvements were immediate.',
        person: 'Riaan V.',
        rating: 4.8,
      },
    ],
  },
  {
    id: 'our-work-ai',
    title: 'AI Chatbot Integration',
    items: [
      {
        company: 'MetroCare Dental',
        role: 'Clinic, Johannesburg',
        quote: 'The chatbot books appointments after hours and answers FAQs. Our call volume dropped by 40%.',
        person: 'Dr. Thandi N.',
        rating: 4.8,
      },
      {
        company: 'Savanna Guest Lodge',
        role: 'Hospitality, Mpumalanga',
        quote: 'Guests get instant replies about availability and rates. Conversions improved significantly.',
        person: 'Sipho D.',
        rating: 4.9,
      },
    ],
  },
  {
    id: 'our-work-repairs',
    title: 'Laptop Repairs',
    items: [
      {
        company: 'Bay Logistics',
        role: 'Transport, Durban',
        quote: 'Fleet laptops were repaired and optimized over a weekend. Zero downtime on Monday.',
        person: 'Anusha P.',
        rating: 5.0,
      },
      {
        company: 'Greenfield Accounting',
        role: 'Financial Services, Pretoria',
        quote: 'Data recovery saved a critical client file. Quick and professional service throughout.',
        person: 'Jaco S.',
        rating: 4.9,
      },
    ],
  },
];

const Star = ({ filled }) => (
  <svg
    className={`h-4 w-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Rating = ({ value }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center" aria-label={`Rating ${value} out of 5`}>
      {stars.map((s, i) => (
        <motion.span
          key={s}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: i * 0.06, type: 'spring', stiffness: 260, damping: 18 }}
          className="mr-1"
        >
          <Star filled={s <= Math.round(value)} />
        </motion.span>
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{value.toFixed(1)}</span>
    </div>
  );
};

const TestimonialCard = ({ company, role, quote, person, rating, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6, boxShadow: '0 10px 25px rgba(59,130,246,0.15)' }}
    className="rounded-xl p-6 bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-lg/50 transition-all duration-300"
  >
    <div className="mb-4 flex items-start justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{company}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <Rating value={rating} />
    </div>
    <p className="text-gray-700 leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm text-gray-600">— {person}</div>
  </motion.div>
);

const OurWorkSection = () => {
  return (
    <section id="our-work" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
          <p className="text-gray-600 mt-3">Realistic reviews from South African businesses we’ve helped.</p>
        </div>
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{cat.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.items.map((item, idx) => (
                <TestimonialCard key={item.company} index={idx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;


