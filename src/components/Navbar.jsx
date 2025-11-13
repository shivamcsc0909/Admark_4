import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    websiteUrl: '',
    websiteName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Portfolio', href: '/portfolio', icon: '💼' },
    { name: 'About', href: '/about', icon: '👥' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'FAQ', href: '/faq', icon: '❓' },
    { name: 'Testimonial', href: '/testimonial', icon: '⭐' }
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      // Implement search functionality here
      setIsSearchOpen(false);
      setSearchQuery('');
    }
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

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Free Audit Popup Component
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

  // Search Popup Component
  const SearchPopup = () => {
    if (!isSearchOpen) return null;

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
            onClick={closeSearch}
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

          <h2 style={{
            color: '#FFD700',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '700',
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 10px rgba(255, 215, 0, 0.3)'
          }}>
            Search
          </h2>
          
          <form onSubmit={handleSearchSubmit}>
            <div style={{ marginBottom: '30px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What you're looking for..."
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '18px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  fontFamily: "'Inter', sans-serif"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#FFD700';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
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
              Search
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Layout - Full Width with Neon Glow */}
      <div className="hidden lg:block">
        <nav 
          className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
          style={{
            width: '100%',
            padding: '12px 0',
            background: 'transparent',
            border: 'none'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              background: 'transparent',
              backdropFilter: 'blur(20px)',
              borderRadius: '25px',
              width: '98%',
              margin: '0 auto',
              gap: '20px',
              border: 'none',
              boxShadow: 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Neon Border Effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '25px',
              border: '2px solid transparent',
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF8C00, #FFD700)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 3s ease infinite',
              zIndex: -1,
              opacity: 0.8,
              filter: 'blur(1px)'
            }}></div>

            {/* Background Blur */}
            <div style={{
              position: 'absolute',
              top: '2px',
              left: '2px',
              right: '2px',
              bottom: '2px',
              background: 'rgba(10, 10, 10, 0.85)',
              backdropFilter: 'blur(20px)',
              borderRadius: '23px',
              zIndex: -1,
            }}></div>

            {/* Mega Logo - Left Side */}
            <div style={{ 
              flexShrink: 0, 
              background: 'transparent',
              position: 'relative',
              zIndex: 1,
            }}>
              <a href="#home">
                <img 
                  src="/src/assets/comp-logo.png"
                  alt="AdMark Digital Media"
                  className="h-16 w-auto"
                  style={{
                    filter: `
                      brightness(1.3) 
                      contrast(1.4) 
                      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))
                      drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))
                    `,
                  }}
                />
              </a>
            </div>

            {/* Navigation Links - Center with Icons */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flex: 1,
              gap: '8px',
              position: 'relative',
              zIndex: 1,
            }}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: '500',
                    padding: '10px 16px',
                    textAlign: 'center',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FFD700';
                    e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1em' }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons - Right Side */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}>
              {/* Search Button */}
              <button
                onClick={openSearch}
                style={{
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  color: '#FFD700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.2em' }}>🔍</span>
              </button>

              {/* Pricing Plan Button */}
              <a
                href="/pricing"
                onClick={(e) => handleSmoothScroll(e, "/pricing")}
                style={{
                  padding: '12px 24px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  color: '#FFD700',
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.2em' }}>💎</span>
                Pricing Plan
              </a>

              {/* Free Audit Button */}
              <button
                onClick={openPopup}
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
                Free Audit
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Header - Enhanced Design */}
      <nav 
        className="lg:hidden fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
        style={{
          background: 'transparent',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
          width: '100%',
          border: 'none'
        }}
      >
        <div className="px-4 sm:px-6" style={{ width: '100%' }}>
          <div className="flex items-center justify-between py-3" style={{ width: '100%' }}>
            {/* Mobile Logo */}
            <a href="#home" className="block">
              <div style={{
                background: 'transparent',
                borderRadius: '10px',
                padding: '4px',
              }}>
                <img 
                  src="/src/assets/comp-logo.png"
                  alt="AdMark Digital Media"
                  className="h-12 w-auto"
                  style={{
                    filter: `
                      brightness(1.3) 
                      contrast(1.4) 
                      drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7))
                      drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))
                    `,
                  }}
                />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
              style={{
                color: '#FFD700',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="shadow-2xl"
            style={{
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 215, 0, 0.2)',
              borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
              width: '100%'
            }}
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-4 rounded-xl font-semibold transition-all duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: "'Inter', sans-serif",
                    background: 'rgba(255, 255, 255, 0.05)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    textAlign: 'left',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FFD700';
                    e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.2)';
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Search Button */}
              <button
                onClick={() => {
                  openSearch();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#FFD700',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.3)';
                }}
              >
                <span style={{ fontSize: '1.2em' }}>🔍</span>
                Search
              </button>

              {/* Mobile Free Audit Button */}
              <button
                onClick={() => {
                  openPopup();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-4 rounded-xl font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#1a1d22',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 215, 0, 0.8)',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '1.2em' }}>🎯</span>
                Free Audit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Free Audit Popup */}
      <FreeAuditPopup />

      {/* Search Popup */}
      <SearchPopup />

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Spacing for fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
}