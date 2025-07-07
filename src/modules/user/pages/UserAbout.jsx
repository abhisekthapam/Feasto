import React, { useEffect, useRef } from "react";

function UserAbout() {
  const countersRef = useRef([]);

  useEffect(() => {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const speed = 200;
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.floor(count);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
          if (target === 98) {
            counter.innerText = target + "%";
          }
        }
      };
      updateCount();
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => {
      countersRef.current.forEach((counter) => {
        if (counter) observer.unobserve(counter);
      });
    };
  }, []);

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
              Revolutionizing <span className="text-gold">Restaurant</span>{" "}
              Management
            </h1>
            <p className="max-w-2xl mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl text-gray-300">
              We're transforming the dining industry with cutting-edge POS
              solutions that streamline operations and create exceptional
              experiences for both restaurants and their customers.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <button className="bg-gold text-[#1B1B1B] px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto">
                <span>Get Started</span>
                <i className="ri-arrow-right-line"></i>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 font-medium text-white transition-all border-2 border-gray-300 rounded-lg hover:border-gold hover:text-gold w-full sm:w-auto">
                <i className="ri-play-circle-line"></i>
                <span>Watch Demo</span>
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
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
              To empower restaurant businesses with cutting-edge technology that
              simplifies management, boosts revenue, and creates exceptional
              dining experiences for customers worldwide.
            </p>
          </div>
          <h2 className="mb-8 sm:mb-10 text-xl sm:text-2xl md:text-3xl font-bold text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-award-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We strive for excellence in everything we do, from product
                development to customer support, ensuring the highest quality
                solutions.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-lightbulb-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We continuously innovate to stay ahead of industry trends and
                provide forward-thinking solutions to complex restaurant
                challenges.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-customer-service-2-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Customer Focus</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Our clients' success is our success. We listen, adapt, and
                deliver solutions that address real restaurant needs.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-team-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We believe in the power of teamwork, both within our
                organization and with our restaurant partners, to achieve
                exceptional results.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-shield-check-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Integrity</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We conduct business with honesty, transparency, and ethical
                standards that build trust with our clients and partners.
              </p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded border border-gray-700 border-opacity-20">
              <i className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-gold ri-rocket-line"></i>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Adaptability</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We embrace change and continuously evolve our solutions to meet
                the dynamic needs of the restaurant industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#1B1B1B]">
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#222222] rounded overflow-hidden">
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20CEO%20in%20his%2040s%20with%20a%20confident%20expression%2C%20wearing%20a%20dark%20suit%2C%20neutral%20background%2C%20high-quality%20corporate%20headshot%2C%20professional%20lighting&width=400&height=400&seq=2&orientation=portrait"
                  alt="CEO Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="mb-1 text-lg sm:text-xl font-bold">Robert Harrison</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gold">CEO & Founder</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                  With over 20 years in restaurant technology, Robert founded
                  Feasto to address the real challenges faced by modern
                  restaurants.
                </p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#222222] rounded overflow-hidden">
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20CTO%20in%20her%2030s%20with%20a%20friendly%20expression%2C%20wearing%20business%20attire%2C%20neutral%20background%2C%20high-quality%20corporate%20headshot%2C%20professional%20lighting&width=400&height=400&seq=3&orientation=portrait"
                  alt="CTO Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="mb-1 text-lg sm:text-xl font-bold">Sophia Chen</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gold">Chief Technology Officer</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                  Sophia leads our engineering team with expertise in cloud
                  architecture and payment systems integration for hospitality.
                </p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#222222] rounded overflow-hidden">
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20COO%20in%20his%2030s%20with%20a%20thoughtful%20expression%2C%20wearing%20business%20casual%20attire%2C%20neutral%20background%2C%20high-quality%20corporate%20headshot%2C%20professional%20lighting&width=400&height=400&seq=4&orientation=portrait"
                  alt="COO Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="mb-1 text-lg sm:text-xl font-bold">Marcus Johnson</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gold">Chief Operations Officer</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                  Marcus brings extensive experience from managing high-volume
                  restaurants to optimize our operational solutions.
                </p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#222222] rounded overflow-hidden">
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20CMO%20in%20her%2040s%20with%20a%20creative%20expression%2C%20wearing%20stylish%20business%20attire%2C%20neutral%20background%2C%20high-quality%20corporate%20headshot%2C%20professional%20lighting&width=400&height=400&seq=5&orientation=portrait"
                  alt="CMO Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="mb-1 text-lg sm:text-xl font-bold">Olivia Rodriguez</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gold">Chief Marketing Officer</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                  Olivia crafts our brand strategy and helps restaurants
                  leverage Feasto to enhance their customer engagement.
                </p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gold hover:text-gold text-lg sm:text-xl">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#222222]">
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute w-full h-0.5 bg-gray-500 top-8 sm:top-10 left-0 z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-8 sm:gap-y-12">
              <div className="relative pt-6 sm:pt-8">
                <div className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1/2 rounded-full bg-gold left-1/2 -top-1.5 sm:-top-2"></div>
                <div className="bg-[#1B1B1B] p-4 sm:p-6 rounded border border-gray-700 border-opacity-20">
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-gold">2018</h3>
                  <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
                    Company Founded
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Feasto was established with a mission to revolutionize
                    restaurant management technology.
                  </p>
                </div>
              </div>
              <div className="relative pt-6 sm:pt-8 md:mt-16 lg:mt-24">
                <div className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1/2 rounded-full bg-gold left-1/2 -top-1.5 sm:-top-2"></div>
                <div className="bg-[#1B1B1B] p-4 sm:p-6 rounded border border-gray-700 border-opacity-20">
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-gold">2019</h3>
                  <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
                    First POS System Launch
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Released our flagship product serving 50+ restaurants in the
                    first year.
                  </p>
                </div>
              </div>
              <div className="relative pt-6 sm:pt-8">
                <div className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1/2 rounded-full bg-gold left-1/2 -top-1.5 sm:-top-2"></div>
                <div className="bg-[#1B1B1B] p-4 sm:p-6 rounded border border-gray-700 border-opacity-20">
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-gold">2021</h3>
                  <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
                    Series A Funding
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Secured $12M in funding to expand our product offerings and
                    market reach.
                  </p>
                </div>
              </div>
              <div className="relative pt-6 sm:pt-8 md:mt-16 lg:mt-24">
                <div className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1/2 rounded-full bg-gold left-1/2 -top-1.5 sm:-top-2"></div>
                <div className="bg-[#1B1B1B] p-4 sm:p-6 rounded border border-gray-700 border-opacity-20">
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-gold">2023</h3>
                  <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
                    International Expansion
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Expanded operations to Europe and Asia, serving restaurants
                    in 15 countries.
                  </p>
                </div>
              </div>
              <div className="relative pt-6 sm:pt-8">
                <div className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1/2 bg-green-400 rounded-full left-1/2 -top-1.5 sm:-top-2"></div>
                <div className="bg-[#1B1B1B] p-4 sm:p-6 rounded border border-gray-700 border-opacity-20">
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-green-400">
                    2025
                  </h3>
                  <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
                    Present Day
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Now serving 5,000+ restaurants globally with a comprehensive
                    suite of management solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 md:py-20 bg-[#1B1B1B]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#222222] p-6 sm:p-8 rounded text-center">
              <div
                className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold transition-all duration-500 text-gold"
                data-target="5000"
                ref={(el) => (countersRef.current[0] = el)}
              >
                0
              </div>
              <p className="text-base sm:text-lg text-white">Restaurants Served</p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded text-center">
              <div
                className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold transition-all duration-500 text-gold"
                data-target="15"
                ref={(el) => (countersRef.current[1] = el)}
              >
                0
              </div>
              <p className="text-base sm:text-lg text-white">Countries</p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded text-center">
              <div
                className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold transition-all duration-500 text-gold"
                data-target="120"
                ref={(el) => (countersRef.current[2] = el)}
              >
                0
              </div>
              <p className="text-base sm:text-lg text-white">Team Members</p>
            </div>
            <div className="bg-[#222222] p-6 sm:p-8 rounded text-center">
              <div
                className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold transition-all duration-500 text-gold"
                data-target="98"
                ref={(el) => (countersRef.current[3] = el)}
              >
                0
              </div>
              <p className="text-base sm:text-lg text-white">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#222222]">
        <div className="container px-4 sm:px-6 mx-auto">
          <h2 className="mb-12 sm:mb-14 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Get in Touch</h2>
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
                <div className="flex items-start">
                  <i className="mt-1 mr-3 sm:mr-4 text-xl sm:text-2xl text-gold ri-phone-line"></i>
                  <div>
                    <p className="text-sm sm:text-base text-white">+1 (415) 555-1234</p>
                    <p className="text-sm sm:text-base text-gray-300">Mon-Fri, 9AM-6PM PST</p>
                  </div>
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
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm sm:text-base text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm sm:text-base text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm sm:text-base text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-[#1B1B1B] border border-gray-600 border-opacity-30 rounded p-2 sm:p-3 text-sm sm:text-base text-white focus:border-gold focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gold text-[#1B1B1B] px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-lg hover:bg-gold/90 transition-all w-full sm:w-auto text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserAbout;
