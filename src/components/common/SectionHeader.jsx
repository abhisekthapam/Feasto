import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      {subtitle && (
        <p className={`text-soft-gray text-lg ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
