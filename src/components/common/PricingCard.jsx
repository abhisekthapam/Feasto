import React from 'react';

const PricingCard = ({ plan }) => {
  return (
    <div className={`bg-charcoal rounded-lg border overflow-hidden ${
      plan.popular ? 'border-gold relative' : 'border-soft-gray/20'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-gold text-charcoal px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-soft-gray mb-6">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{plan.price}</span>
          {plan.price !== 'Custom' && (
            <span className="text-soft-gray">/month</span>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-soft-gray">
              <i className="ri-checkbox-circle-fill text-gold mr-2"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full font-semibold py-3 rounded-lg transition-colors ${
          plan.popular 
            ? 'bg-gold text-charcoal hover:bg-gold/90' 
            : plan.price === 'Custom'
              ? 'border border-gold text-white hover:bg-gold/10'
              : 'bg-gold text-charcoal hover:bg-gold/90'
        }`}>
          {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
