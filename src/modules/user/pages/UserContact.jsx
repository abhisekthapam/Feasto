import React, { useState } from "react";

function UserContact() {
  const [newsletter, setNewsletter] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNewsletter = () => {
    setNewsletter((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiry: "",
      message: "",
    });
    setNewsletter(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white">
      <section
        className="relative flex items-center min-h-screen"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20futuristic%20restaurant%20interior%20at%20night%20with%20glowing%20interfaces%20and%20holographic%20displays%2C%20dark%20ambiance%20with%20gold%20accents%2C%20high-tech%20POS%20systems%20seamlessly%20integrated%20into%20luxurious%20decor%2C%20dramatic%20lighting%20effects%20creating%20an%20immersive%20atmosphere%2C%20ultra%20wide%20perspective&width=1920&height=1080&seq=6&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-[#1B1B1B]/80 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-[7%] pt-20 sm:pt-24 md:pt-28 py-4">
          <div className="max-w-4xl">
            <h1 className="mb-6 sm:mb-8 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Get in <span className="text-gold">Touch</span> with Us
            </h1>
            <p className="max-w-2xl mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl text-gray-300">
              Ready to transform your restaurant operations? We're here to help you get started with our cutting-edge POS solutions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <button className="bg-gold text-[#1B1B1B] px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto">
                <span>Schedule Demo</span>
                <i className="ri-arrow-right-line"></i>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 font-medium text-white transition-all border-2 border-gray-300 rounded-lg hover:border-gold hover:text-gold w-full sm:w-auto">
                <i className="ri-phone-line"></i>
                <span>Call Us Now</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-12 sm:mt-14 md:mt-16 space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex -space-x-2 sm:-space-x-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20happy%20restaurant%20owner%2C%20confident%20expression&width=100&height=100&seq=7&orientation=squarish"
                  alt="Client"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1B1B1B]"
                />
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20successful%20chef%2C%20wearing%20chef%20uniform&width=100&height=100&seq=8&orientation=squarish"
                  alt="Client"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1B1B1B]"
                />
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20restaurant%20manager%2C%20business%20attire&width=100&height=100&seq=9&orientation=squarish"
                  alt="Client"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1B1B1B]"
                />
              </div>
              <div>
                <div className="flex items-center mb-1 space-x-1 text-gold">
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Trusted by 5,000+ restaurants worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute transform -translate-x-1/2 bottom-6 sm:bottom-8 md:bottom-10 left-1/2 animate-bounce">
          <i className="text-xl sm:text-2xl text-gold ri-arrow-down-line"></i>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1B1B1B] to-[#252525]">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="mb-12 sm:mb-14 md:mb-16 text-center">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">Why Partner with Feasto?</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
              With over 7 years of innovation and 5,000+ successful restaurant implementations, we're the trusted choice for modern restaurant management.
            </p>
          </div>
          <h2 className="mb-8 sm:mb-10 text-xl sm:text-2xl md:text-3xl font-bold text-center">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-customer-service-2-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">24/7 Expert Support</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Our dedicated support team ensures your restaurant operations never miss a beat with round-the-clock technical assistance.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-rocket-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Rapid Implementation</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Get up and running in days, not weeks. Our streamlined onboarding process gets your restaurant operating at peak efficiency quickly.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-shield-check-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Proven Success</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Join thousands of restaurants that have increased efficiency by 40% and customer satisfaction by 25% using our solutions.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-team-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Partnership Approach</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We don't just provide software - we become your technology partner, growing alongside your restaurant business.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-lightbulb-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Continuous Innovation</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Stay ahead with regular updates and new features based on industry trends and customer feedback.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-global-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Global Reach</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Operating in 15 countries with local support teams who understand your regional market needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#1B1B1B]">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="mb-12 sm:mb-14 md:mb-16 text-center">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">Contact Information</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
              Ready to transform your restaurant? Our team is here to guide you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-map-pin-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Headquarters</h3>
              <p className="text-sm sm:text-base text-gray-300">
                123 Tech Avenue, Suite 500<br/>
                San Francisco, CA 94107<br/>
                United States
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-customer-service-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Support</h3>
              <p className="text-sm sm:text-base text-gray-300">
                support@feasto.com<br/>
                +1 (415) 555-1234<br/>
                24/7 Technical Assistance
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-time-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Business Hours</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Monday - Friday<br/>
                9:00 AM - 6:00 PM PST<br/>
                Closed on major holidays
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-building-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Regional Offices</h3>
              <p className="text-sm sm:text-base text-gray-300">
                New York • Chicago<br/>
                London • Singapore<br/>
                Sydney • Toronto
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 bg-[#222222]">
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">How quickly can we get started?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Our streamlined onboarding process gets most restaurants operational within 3-5 business days. For complex setups, we'll work with your timeline to ensure smooth implementation.
                </p>
              </div>
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">What kind of support do you provide?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  We offer 24/7 technical support, dedicated account managers, comprehensive training, and ongoing consultation to ensure your success.
                </p>
              </div>
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">Do you integrate with existing systems?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Yes! Our platform integrates with most major accounting, inventory, and third-party delivery systems. We'll handle the technical integration process for you.
                </p>
              </div>
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">What's included in the demo?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Our personalized demo showcases features tailored to your restaurant type, includes ROI projections, and provides a clear implementation roadmap.
                </p>
              </div>
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">Can you handle multiple locations?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Absolutely! Our enterprise solutions are designed for multi-location restaurants, with centralized management and location-specific customizations.
                </p>
              </div>
              <div className="bg-[#1B1B1B] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gold">What makes Feasto different?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  7+ years of restaurant-focused innovation, 5,000+ successful implementations, and a partnership approach that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#1B1B1B]">
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Send Us a Message</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div>
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Contact Information</h3>
                <div className="flex items-start mb-3 sm:mb-4">
                  <i className="mt-1 mr-3 sm:mr-4 text-xl sm:text-2xl text-gold ri-map-pin-line"></i>
                  <div>
                    <p className="text-sm sm:text-base text-white">123 Tech Avenue, Suite 500</p>
                    <p className="text-sm sm:text-base text-gray-300">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start mb-3 sm:mb-4">
                  <i className="mt-1 mr-3 sm:mr-4 text-xl sm:text-2xl text-gold ri-mail-line"></i>
                  <div>
                    <p className="text-sm sm:text-base text-white">contact@feasto.com</p>
                    <p className="text-sm sm:text-base text-gray-300">support@feasto.com</p>
                  </div>
                </div>
                <div className="flex items-start mb-6 sm:mb-8">
                  <i className="mt-1 mr-3 sm:mr-4 text-xl sm:text-2xl text-gold ri-phone-line"></i>
                  <div>
                    <p className="text-sm sm:text-base text-white">+1 (415) 555-1234</p>
                    <p className="text-sm sm:text-base text-gray-300">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Follow Our Journey</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Since 2018, we've been revolutionizing restaurant management. Join our community to stay updated on the latest innovations.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="text-gold hover:text-gold text-2xl sm:text-3xl">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-2xl sm:text-3xl">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-2xl sm:text-3xl">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-2xl sm:text-3xl">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Our Location</h3>
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden rounded">
                  <img
                    src="https://public.readdy.ai/gen_page/map_placeholder_1280x720.png"
                    alt="Office Location Map"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm sm:text-base text-gray-300">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm sm:text-base text-gray-300">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="company" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Company/Restaurant Name*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="inquiry" className="block mb-2 text-sm sm:text-base text-gray-300">
                      How Can We Help You?*
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start mb-4 sm:mb-6">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={newsletter}
                      onChange={handleNewsletter}
                      className="w-4 h-4 mr-3 mt-1 text-gold bg-[#1B1B1B] border border-gray-600 rounded focus:ring-gold focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-sm sm:text-base text-gray-300">
                      Subscribe to our newsletter for the latest restaurant technology insights and product updates
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-gold text-[#1B1B1B] px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-lg hover:bg-gold/90 transition-all w-full sm:w-auto text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                  {success && (
                    <div className="mt-4 text-center text-gold">
                      Thank you for your message! Our team will contact you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserContact;