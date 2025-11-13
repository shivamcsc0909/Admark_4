import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    websiteUrl: '',
    websiteName: '',
    email: '',
    phone: ''
  });

  const services = [
    { 
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
      icon: '🎯'
    },
    { 
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage audiences across all social platforms.',
      icon: '📱'
    },
    { 
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns and data-driven strategies.',
      icon: '💰'
    },
    { 
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that convert visitors into customers.',
      icon: '💻'
    },
    { 
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that drives traffic and builds authority.',
      icon: '✍️'
    },
    { 
      title: 'Brand Strategy & Design',
      description: 'Build a memorable brand identity that resonates with your target audience.',
      icon: '🎨'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPopupOpen(false);
      setFormData({
        websiteUrl: '',
        websiteName: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSubmitted(false);
    setFormData({
      websiteUrl: '',
      websiteName: '',
      email: '',
      phone: ''
    });
  };

  // Free Audit Popup Component - Same as Navbar
  const FreeAuditPopup = () => {
    if (!isPopupOpen) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 29, 34, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
          borderRadius: '20px',
          padding: '40px',
          width: '90%',
          maxWidth: '500px',
          border: '2px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Close Button */}
          <button
            onClick={closePopup}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#FFD700',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 215, 0, 0.1)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h2 style={{
                color: '#FFD700',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '28px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 10px rgba(255, 215, 0, 0.3)'
              }}>
                Free Website Audit
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Website URL *
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Website Name *
                  </label>
                  <input
                    type="text"
                    name="websiteName"
                    value={formData.websiteName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                    color: '#1a1d22',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  Submit for Free Audit
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
              }}>
                ✅
              </div>
              <h3 style={{
                color: '#FFD700',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif"
              }}>
                Request Submitted Successfully!
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Your request for free audit report has been successfully submitted and your free audit report will soon be sent to your email inbox. Thank you!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #D4B896 0%, #E6D5B8 50%, #D4B896 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase relative inline-block"
            style={{
              fontFamily: "'Montserrat', 'Anton', 'Bebas Neue', sans-serif",
              letterSpacing: '0.15em',
              fontWeight: '900',
              lineHeight: '1',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #D4B896 25%, #FFD700 50%, #D4B896 75%, #1a1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 4px 8px rgba(212, 184, 150, 0.3))',
            }}
          >
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(212, 184, 150, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(212, 184, 150, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 184, 150, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(212, 184, 150, 0.2)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
              }}
            >
              {/* Animated Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(212, 184, 150, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #D4B896 50%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon with Animation */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{
                    color: '#D4B896',
                    fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                    fontWeight: '800',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-sm md:text-base mb-6 transition-colors duration-300"
                  style={{
                    color: 'rgba(212, 184, 150, 0.75)',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', 'Arial', sans-serif"
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Buttons Container */}
              <div className="relative z-10 flex flex-col gap-3">
                {/* Learn More Button */}
                <a
                  href="/services"
                  className="relative z-10 inline-flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 group/btn py-3 px-4 rounded-lg"
                  style={{
                    color: '#D4B896',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(212, 184, 150, 0.3)',
                    fontFamily: "'Montserrat', sans-serif",
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(212, 184, 150, 0.1)';
                    e.target.style.border = '1px solid rgba(212, 184, 150, 0.6)';
                    e.target.style.boxShadow = '0 0 15px rgba(212, 184, 150, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.border = '1px solid rgba(212, 184, 150, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    Learn More
                  </span>
                  <motion.span 
                    className="text-xl"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </a>

                {/* Buy Now Button - Same as Navbar Free Audit Button */}
                <button
                  onClick={openPopup}
                  className="relative z-10 inline-flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 group/buynow py-3 px-4 rounded-lg"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    color: '#1a1d22',
                    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                    border: '1px solid rgba(255, 215, 0, 0.8)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>🎯</span>
                  Buy Now
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#D4B896] to-transparent w-0 group-hover:w-full transition-all duration-700"
                style={{
                  opacity: 0.6
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Shine Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#get-quote"
            className="relative inline-block px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              color: '#D4B896',
              border: '2px solid #D4B896',
              boxShadow: '0 4px 15px rgba(212, 184, 150, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #D4B896 0%, #FFD700 100%)';
              e.target.style.color = '#1a1a1a';
              e.target.style.boxShadow = '0 8px 30px rgba(212, 184, 150, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
              e.target.style.color = '#D4B896';
              e.target.style.boxShadow = '0 4px 15px rgba(212, 184, 150, 0.3)';
            }}
          >
            <span className="relative z-10">View All Services →</span>
            
            {/* Shine Effect */}
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transform: 'translateX(-100%)',
                animation: 'shine 2s infinite'
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Free Audit Popup - Same as Navbar */}
      <FreeAuditPopup />

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}