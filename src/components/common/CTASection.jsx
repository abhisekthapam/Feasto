import React from 'react';

const CTASection = ({ title, subtitle, buttons = [], backgroundColor = "bg-[#212121]" }) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="bg-charcoal rounded-lg p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">{title}</h2>
              <p className="text-soft-gray mb-8 text-lg">
                {subtitle}
              </p>
              {buttons.length > 0 && (
                <div className="flex flex-wrap gap-6">
                  {buttons.map((button, index) => (
                    <button 
                      key={index}
                      className={button.className}
                      onClick={button.onClick}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
