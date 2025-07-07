import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className="bg-gradient-to-b from-[#212121] to-charcoal rounded overflow-hidden border border-soft-gray/20 group">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-gold mb-3">{member.role}</p>
        <p className="text-soft-gray text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
