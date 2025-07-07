import React from 'react';

const FeatureCard = ({ icon, title, description, features = [], linkText, linkUrl, hoverEffect = true }) => {
  return (
    <div className={`bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 p-8 rounded-2xl border border-slate-600/50 h-[400px] flex flex-col backdrop-blur-sm shadow-xl ${
      hoverEffect ? 'hover:border-amber-400/50 transition-all duration-300 group' : ''
    }`}>
      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400/12 to-orange-400/8 rounded-xl mb-6 border border-amber-400/20 ${
        hoverEffect ? 'group-hover:border-amber-400/40 group-hover:bg-amber-400/15 transition-all duration-300' : ''
      }`}>
        <i className={`${icon} text-2xl text-amber-400`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-amber-400 transition-colors duration-300">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed flex-1">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-200">
              <i className="ri-check-line text-amber-400 mr-3 text-lg"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {linkText && linkUrl && (
        <a 
          href={linkUrl}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300 mt-auto"
        >
          {linkText}
          <i className="ri-arrow-right-line ml-2"></i>
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
