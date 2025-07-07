import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#212121] rounded overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill"></i>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{testimonial.name}</h3>
        <p className="text-soft-gray mb-4">"{testimonial.testimonial}"</p>
        <p className="text-gold font-medium">{testimonial.owner}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
