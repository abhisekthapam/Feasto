import React, { useState } from "react";
import HeroSection from "../../../components/common/HeroSection";
import SectionHeader from "../../../components/common/SectionHeader";
import FeatureCard from "../../../components/common/FeatureCard";
import TeamCard from "../../../components/common/TeamCard";
import PricingCard from "../../../components/common/PricingCard";
import TestimonialCard from "../../../components/common/TestimonialCard";
import ContactForm from "../../../components/common/ContactForm";
import CTASection from "../../../components/common/CTASection";

function UserSolution() {
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);

  const coreValues = [
    {
      icon: "ri-customer-service-fill",
      title: "Customer-First Approach",
      description:
        "We prioritize our clients' needs, ensuring our solutions address real challenges faced by restaurants today.",
    },
    {
      icon: "ri-lightbulb-fill",
      title: "Innovation",
      description:
        "We continuously push boundaries to develop cutting-edge technology that keeps our clients ahead of the curve.",
    },
    {
      icon: "ri-shield-check-fill",
      title: "Reliability",
      description:
        "Our systems are built to perform flawlessly even during the busiest service hours, providing peace of mind.",
    },
    {
      icon: "ri-team-fill",
      title: "Partnership",
      description:
        "We view ourselves as partners in our clients' success, offering ongoing support beyond the initial implementation.",
    },
    {
      icon: "ri-lock-fill",
      title: "Security",
      description:
        "We implement rigorous security measures to protect sensitive business and customer data at all times.",
    },
    {
      icon: "ri-recycle-fill",
      title: "Sustainability",
      description:
        "We're committed to developing solutions that help restaurants reduce waste and operate more sustainably.",
    },
  ];

  const teamMembers = [
    {
      name: "Jonathan Mitchell",
      role: "CEO & Founder",
      bio: "With over 20 years in restaurant technology, Jonathan founded Feasto to address the real challenges he witnessed in the industry.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sophia Rodriguez",
      role: "CTO",
      bio: "Sophia leads our technical team, bringing her expertise from Silicon Valley to develop our cutting-edge POS architecture.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Marcus Chen",
      role: "Head of Product",
      bio: "Marcus ensures our products deliver exceptional user experiences while meeting the complex needs of modern restaurants.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Olivia Thompson",
      role: "Customer Success Director",
      bio: "With a background in hospitality management, Olivia leads our team dedicated to ensuring client satisfaction.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Feasto Founded",
      description:
        "Jonathan Mitchell establishes Feasto with a vision to create more intuitive POS systems for restaurants after experiencing frustrations with existing solutions.",
    },
    {
      year: "2018",
      title: "Enterprise Solution",
      description:
        "Launch of Feasto Enterprise, expanding our offerings to meet the needs of multi-location restaurant groups and chains.",
    },
    {
      year: "2021",
      title: "Mobile Ordering Integration",
      description:
        "Introduction of seamless mobile ordering capabilities, helping restaurants adapt to changing consumer preferences.",
    },
    {
      year: "2023",
      title: "AI-Powered Analytics",
      description:
        "Launch of advanced analytics platform with predictive capabilities to help restaurants optimize operations and increase profitability.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description:
        "Feasto now serves over 10,000 restaurants across 25 countries, with regional offices in North America, Europe, and Asia.",
    },
  ];

  const coreFeatures = [
    {
      icon: "ri-computer-fill",
      title: "Point of Sale",
      description:
        "Intuitive interface for quick order processing, customizable menu management, and seamless payment handling.",
      features: [
        "Touch-screen optimization",
        "Multi-payment support",
        "Real-time updates",
      ],
    },
    {
      icon: "ri-store-3-fill",
      title: "Inventory Management",
      description:
        "Track stock levels, manage suppliers, and automate ordering with our advanced inventory system.",
      features: [
        "Automated tracking",
        "Low stock alerts",
        "Supplier management",
      ],
    },
    {
      icon: "ri-restaurant-fill",
      title: "Kitchen Display System",
      description:
        "Streamline kitchen operations with digital ticket management and real-time order tracking.",
      features: [
        "Digital ticket routing",
        "Preparation timers",
        "Order prioritization",
      ],
    },
    {
      icon: "ri-customer-fill",
      title: "Customer Management",
      description:
        "Build lasting relationships with integrated CRM tools, loyalty programs, and customer insights.",
      features: [
        "Loyalty programs",
        "Customer profiles",
        "Feedback management",
      ],
    },
    {
      icon: "ri-pie-chart-fill",
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive reporting and predictive analytics.",
      features: ["Sales analytics", "Performance metrics", "Custom reports"],
    },
    {
      icon: "ri-smartphone-fill",
      title: "Mobile Ordering",
      description:
        "Enable customers to order directly from their phones with our integrated mobile ordering system.",
      features: ["QR code menus", "Mobile payments", "Order tracking"],
    },
  ];

  const successStories = [
    {
      name: "La Maison Elegante",
      owner: "Isabella Laurent, Owner",
      testimonial:
        "Feasto POS has streamlined our operations and improved our service speed by 40%. The analytics tools have been invaluable for menu optimization.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      name: "Urban Brew Coffee",
      owner: "Marcus Chen, Manager",
      testimonial:
        "The mobile ordering feature has revolutionized our business. We've seen a 60% increase in order volume since implementing Feasto.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    },
    {
      name: "Taste of Asia",
      owner: "Sarah Kim, Operations Director",
      testimonial:
        "The kitchen display system has transformed our workflow. Order accuracy is up, and preparation times are down by 25%.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for new restaurants",
      features: [
        "Single POS Terminal",
        "Basic Reporting",
        "24/7 Support",
        "Menu Management",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      description: "For growing restaurants",
      features: [
        "3 POS Terminals",
        "Advanced Analytics",
        "Inventory Management",
        "Customer Loyalty Program",
        "Kitchen Display System",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-location operations",
      features: [
        "Unlimited Terminals",
        "Custom Integration",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Reporting",
      ],
      popular: false,
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will contact you shortly.");
    e.target.reset();
    setIsNewsletterChecked(false);
  };

  const heroButtons = [
    {
      text: "Schedule a Demo",
      className:
        "px-8 py-4 text-lg font-medium transition-all rounded-lg bg-gold text-charcoal hover:bg-gold/90",
      onClick: () => console.log("Schedule Demo"),
    },
    {
      text: "View Pricing",
      className:
        "px-8 py-4 text-lg font-medium text-white transition-all border-2 border-white rounded-lg hover:border-gold hover:text-gold",
      onClick: () => console.log("View Pricing"),
    },
  ];

  const ctaButtons = [
    {
      text: "Schedule a Demo",
      className:
        "px-8 py-4 text-lg font-medium transition-all rounded-lg bg-gold text-charcoal hover:bg-gold/90",
      onClick: () => console.log("Schedule Demo"),
    },
    {
      text: "Contact Sales",
      className:
        "px-8 py-4 text-lg font-medium text-white transition-all border-2 border-white rounded-lg hover:border-gold hover:text-gold",
      onClick: () => console.log("Contact Sales"),
    },
  ];

  return (
    <div className="min-h-screen text-white bg-charcoal">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Solutions That <span className="text-gold">Drive Success</span>
          </>
        }
        subtitle="Transform your restaurant operations with our comprehensive suite of POS solutions designed to streamline workflow, enhance customer experience, and boost your bottom line."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
        buttons={heroButtons}
      />

      {/* Core Values Section */}
      <section className="py-20 bg-[#212121]">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Our Core Values"
            subtitle="These principles guide everything we do at Feasto, from product development to customer service."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-charcoal">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The passionate professionals behind Feasto's innovative POS solutions."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#212121]">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in Feasto's evolution as a leader in restaurant POS solutions."
          />
          <div className="relative max-w-4xl pl-8 mx-auto md:pl-12">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-soft-gray"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-gold rounded-full left-[-8px] top-6"></div>
                  <h3 className="mb-2 text-xl font-semibold text-gold">
                    {item.year}
                  </h3>
                  <h4 className="mb-2 text-lg font-medium">{item.title}</h4>
                  <p className="text-soft-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-charcoal">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Core Features"
            subtitle="Everything you need to run your restaurant efficiently in one integrated platform."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-[#212121]">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Integration Partners"
            subtitle="Seamlessly connect with your favorite tools and services."
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              "ri-paypal-fill",
              "ri-mastercard-fill",
              "ri-visa-fill",
              "ri-google-fill",
              "ri-apple-fill",
              "ri-bank-card-fill",
            ].map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 transition-colors border rounded bg-charcoal border-soft-gray/20 hover:border-gold/50"
              >
                <i className={`${icon} ri-3x text-gold`}></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-charcoal">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Success Stories"
            subtitle="See how restaurants are transforming their operations with Feasto POS."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {successStories.map((story, index) => (
              <TestimonialCard key={index} testimonial={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#212121]">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that best fits your restaurant's needs."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-charcoal">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold">Get in Touch</h2>
              <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gold/10 shrink-0">
                    <i className="ri-map-pin-fill ri-lg text-gold"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Headquarters</h3>
                    <p className="text-soft-gray">
                      1250 Technology Plaza
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gold/10 shrink-0">
                    <i className="ri-customer-service-fill ri-lg text-gold"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Support</h3>
                    <p className="text-soft-gray">
                      support@feasto.com
                      <br />
                      +1 (800) 555-7890
                      <br />
                      24/7 Technical Assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gold/10 shrink-0">
                    <i className="ri-time-fill ri-lg text-gold"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Business Hours</h3>
                    <p className="text-soft-gray">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM PST
                      <br />
                      Closed on major holidays
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gold/10 shrink-0">
                    <i className="ri-building-fill ri-lg text-gold"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Regional Offices</h3>
                    <p className="text-soft-gray">
                      New York • Chicago
                      <br />
                      London • Singapore
                      <br />
                      Sydney • Toronto
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    "ri-linkedin-fill",
                    "ri-twitter-x-fill",
                    "ri-facebook-fill",
                    "ri-instagram-fill",
                    "ri-youtube-fill",
                  ].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-[#212121] rounded-full hover:bg-gold/20 transition-colors"
                    >
                      <i className={`${icon} ri-lg text-gold`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <ContactForm
                onSubmit={handleFormSubmit}
                isNewsletterChecked={isNewsletterChecked}
                setIsNewsletterChecked={setIsNewsletterChecked}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Restaurant?"
        subtitle="Join thousands of restaurants already using Feasto POS to streamline their operations and boost profits."
        buttons={ctaButtons}
      />
    </div>
  );
}

export default UserSolution;
