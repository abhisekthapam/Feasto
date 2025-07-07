import React from 'react';

const ContactForm = ({ onSubmit, isNewsletterChecked, setIsNewsletterChecked }) => {
  return (
    <div className="bg-[#212121] p-8 rounded border border-soft-gray/20">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-soft-gray mb-2 text-sm">First Name*</label>
            <input 
              type="text" 
              className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none" 
              required 
            />
          </div>
          <div>
            <label className="block text-soft-gray mb-2 text-sm">Last Name*</label>
            <input 
              type="text" 
              className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none" 
              required 
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-soft-gray mb-2 text-sm">Email Address*</label>
          <input 
            type="email" 
            className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-soft-gray mb-2 text-sm">Phone Number</label>
          <input 
            type="tel" 
            className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-soft-gray mb-2 text-sm">Company/Restaurant Name*</label>
          <input 
            type="text" 
            className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-soft-gray mb-2 text-sm">Inquiry Type*</label>
          <select 
            className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white focus:border-gold focus:outline-none appearance-none" 
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="sales">Sales Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="demo">Request a Demo</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-soft-gray mb-2 text-sm">Message*</label>
          <textarea 
            rows="5" 
            className="w-full bg-charcoal border border-soft-gray/40 rounded p-3 text-white resize-none focus:border-gold focus:outline-none" 
            required
          ></textarea>
        </div>
        <div className="mb-6 flex items-start">
          <div className="flex items-center h-5 mt-1">
            <div 
              className={`w-5 h-5 border border-soft-gray/40 rounded flex items-center justify-center cursor-pointer ${
                isNewsletterChecked ? 'bg-gold/10' : ''
              }`}
              onClick={() => setIsNewsletterChecked(!isNewsletterChecked)}
            >
              <i className={`ri-check-line text-gold ${isNewsletterChecked ? '' : 'hidden'}`}></i>
            </div>
          </div>
          <label className="ml-3 text-soft-gray text-sm cursor-pointer">
            Subscribe to our newsletter for product updates and industry insights
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-gold/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
