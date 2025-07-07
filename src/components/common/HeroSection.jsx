import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage, buttons = [] }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-[3%] md:px-[7%]">
        <div className="max-w-4xl">
          <h1 className="mb-8 font-bold leading-tight text-white text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl mb-12 text-xl text-soft-gray leading-relaxed">
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
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-gold"></i>
      </div>
    </section>
  );
};

export default HeroSection;
