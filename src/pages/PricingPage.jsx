import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('seo');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  // Scroll pe buttons show/hide karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Service Categories with proper icons
  const categories = [
    { id: 'seo', name: 'SEO', icon: 'fas fa-search' },
    { id: 'smo', name: 'SMO', icon: 'fas fa-share-alt' },
    { id: 'ppc', name: 'PPC', icon: 'fas fa-ad' },
    { id: 'web-dev', name: 'Web Dev', icon: 'fas fa-code' },
    { id: 'content', name: 'Content', icon: 'fas fa-pen-nib' },
    { id: 'branding', name: 'Branding', icon: 'fas fa-palette' }
  ];

  // Complete Pricing Plans Data - All Services
  const pricingPlans = {
    'seo': [
      {
        name: 'Starter SEO',
        icon: 'fas fa-rocket',
        monthlyPrice: 200,
        yearlyPrice: 2040,
        features: [
          '5 Keywords Tracking',
          'Basic On-Page SEO',
          'Monthly Reports',
          'Email Support'
        ],
        popular: false,
        services: getSEOServices('starter')
      },
      {
        name: 'Basic SEO',
        icon: 'fas fa-chart-line',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        features: [
          '10 Keywords Tracking',
          'On-Page SEO',
          'Technical Audit',
          'Bi-weekly Reports',
          'Priority Support'
        ],
        popular: false,
        services: getSEOServices('basic')
      },
      {
        name: 'Standard SEO',
        icon: 'fas fa-star',
        monthlyPrice: 450,
        yearlyPrice: 4590,
        features: [
          '25 Keywords Tracking',
          'Link Building',
          'Content Optimization',
          'Competitor Analysis',
          'Weekly Reports',
          'Dedicated Manager'
        ],
        popular: true,
        services: getSEOServices('standard')
      },
      {
        name: 'Premium SEO',
        icon: 'fas fa-crown',
        monthlyPrice: 700,
        yearlyPrice: 7140,
        features: [
          '50 Keywords Tracking',
          'Advanced Technical SEO',
          'Local SEO',
          'Content Creation',
          'Daily Monitoring',
          'Priority Support'
        ],
        popular: false,
        services: getSEOServices('premium')
      },
      {
        name: 'Enterprise SEO',
        icon: 'fas fa-building',
        monthlyPrice: 1200,
        yearlyPrice: 12240,
        features: [
          'Unlimited Keywords',
          'Full SEO Suite',
          'Custom Strategy',
          'White-label Reports',
          'API Access',
          '24/7 Support'
        ],
        popular: false,
        services: getSEOServices('enterprise')
      }
    ],
    'smo': [
      {
        name: 'Starter SMO',
        icon: 'fas fa-rocket',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        features: [
          '2 Social Platforms',
          '10 Posts per Month',
          'Basic Analytics',
          'Monthly Reports'
        ],
        popular: false,
        services: getSMOServices('starter')
      },
      {
        name: 'Professional SMO',
        icon: 'fas fa-chart-line',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          '4 Social Platforms',
          '20 Posts per Month',
          'Advanced Analytics',
          'Weekly Reports',
          'Content Strategy'
        ],
        popular: true,
        services: getSMOServices('professional')
      },
      {
        name: 'Enterprise SMO',
        icon: 'fas fa-crown',
        monthlyPrice: 900,
        yearlyPrice: 9180,
        features: [
          'All Social Platforms',
          '30+ Posts per Month',
          'Influencer Outreach',
          'Daily Monitoring',
          'Dedicated Manager'
        ],
        popular: false,
        services: getSMOServices('enterprise')
      }
    ],
    'ppc': [
      {
        name: 'Starter PPC',
        icon: 'fas fa-rocket',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        features: [
          '1 Campaign Setup',
          'Basic Keyword Research',
          'Monthly Optimization',
          'Performance Reports'
        ],
        popular: false,
        services: getPPCServices('starter')
      },
      {
        name: 'Professional PPC',
        icon: 'fas fa-chart-line',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          '3 Campaigns Setup',
          'Advanced Keyword Research',
          'Weekly Optimization',
          'A/B Testing',
          'Conversion Tracking'
        ],
        popular: true,
        services: getPPCServices('professional')
      },
      {
        name: 'Enterprise PPC',
        icon: 'fas fa-crown',
        monthlyPrice: 900,
        yearlyPrice: 9180,
        features: [
          'Unlimited Campaigns',
          'Full PPC Management',
          'Daily Optimization',
          'Multi-channel Strategy',
          'Dedicated Expert'
        ],
        popular: false,
        services: getPPCServices('enterprise')
      }
    ],
    'web-dev': [
      {
        name: 'Informative website or Portfolio',
        icon: 'fas fa-shopping-cart',
        monthlyPrice: 800,
        yearlyPrice: 7800,
        features: [
          '10-15 Pages Website',
          'Custom Design',
          'CMS Integration',
          'SEO Optimized',
          '3 Months Support'
        ],
        popular: false,
        services: getWebDevServices('business')
      },
      {
        name: 'E-commerce Store',
        icon: 'fas fa-briefcase',
        monthlyPrice: 1500,
        yearlyPrice: 15300,
        features: [
          'Full E-commerce Setup',
          'Payment Gateway',
          'Inventory Management',
          'Admin Panel',
          '6 Months Support'
        ],
        popular: true,
        services: getWebDevServices('ecommerce')
      },
      {
        name: 'Business Website',
        icon: 'fas fa-cogs',
        monthlyPrice: 2500,
        yearlyPrice: 25500,
        features: [
          'Custom Development',
          'Database Design',
          'User Authentication',
          'API Integration',
          '1 Year Support'
        ],
        popular: false,
        services: getWebDevServices('custom')
      }
    ],
    'content': [
      {
        name: 'Starter Content',
        icon: 'fas fa-pen',
        monthlyPrice: 250,
        yearlyPrice: 2550,
        features: [
          '4 Blog Posts/Month',
          'Basic SEO Optimization',
          'Topic Research',
          'Monthly Reports'
        ],
        popular: false,
        services: getContentServices('starter')
      },
      {
        name: 'Professional Content',
        icon: 'fas fa-edit',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          '8 Blog Posts/Month',
          'Advanced SEO',
          'Content Strategy',
          'Graphics Included',
          'Weekly Reports'
        ],
        popular: true,
        services: getContentServices('professional')
      },
      {
        name: 'Enterprise Content',
        icon: 'fas fa-newspaper',
        monthlyPrice: 1000,
        yearlyPrice: 10200,
        features: [
          '16 Blog Posts/Month',
          'Content Calendar',
          'Social Media Copies',
          'Video Scripts',
          'Dedicated Writer'
        ],
        popular: false,
        services: getContentServices('enterprise')
      }
    ],
    'branding': [
      {
        name: 'Basic Branding',
        icon: 'fas fa-paint-brush',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          'Logo Design',
          'Color Palette',
          'Typography Guide',
          'Basic Brand Guidelines'
        ],
        popular: false,
        services: getBrandingServices('basic')
      },
      {
        name: 'Professional Branding',
        icon: 'fas fa-palette',
        monthlyPrice: 1000,
        yearlyPrice: 10200,
        features: [
          'Complete Logo Suite',
          'Brand Style Guide',
          'Social Media Kit',
          'Business Card Design',
          'Stationery Design'
        ],
        popular: true,
        services: getBrandingServices('professional')
      },
      {
        name: 'Enterprise Branding',
        icon: 'fas fa-crown',
        monthlyPrice: 2000,
        yearlyPrice: 20400,
        features: [
          'Complete Brand System',
          'Brand Voice & Tone',
          'Marketing Materials',
          'Packaging Design',
          'Brand Strategy Session'
        ],
        popular: false,
        services: getBrandingServices('enterprise')
      }
    ]
  };

  // Get Current Plans
  const currentPlans = pricingPlans[selectedCategory] || pricingPlans['seo'];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Navbar />
      
      {/* Custom Plan Button - Top Left */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="./customplan"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              style={{
                position: 'fixed',
                top: '120px',
                left: '20px',
                zIndex: 1000,
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                color: '#0A0A0A',
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(255, 193, 7, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-cogs"></i>
              Make Your Own Custom Plan
            </motion.button>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Website cost calculator Button - Top Right */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="./webcalc"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              style={{
                position: 'fixed',
                top: '120px',
                right: '20px',
                zIndex: 1000,
                background: 'linear-gradient(135deg, #2196F3, #21CBF3)',
                color: '#0A0A0A',
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(33, 150, 243, 0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(33, 150, 243, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-calculator"></i>
              Website cost calculator
            </motion.button>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ padding: '80px 30px 30px', overflowY: 'auto' }}>
        {/* Pricing Section Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <div style={{
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#FFC107',
            marginBottom: '10px'
          }}>
            Transparent Pricing
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 25%, #FFD700 50%, #FFC107 75%, #FFFFFF 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-flow 5s ease infinite'
          }}>
            CHOOSE YOUR PLAN
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            marginTop: '15px'
          }}>
            <div style={{ width: '20px', height: '2px', borderRadius: '1px', background: 'linear-gradient(90deg, transparent, #FFC107)' }}></div>
            <div style={{ width: '40px', height: '2px', borderRadius: '1px', background: '#FFC107' }}></div>
            <div style={{ width: '20px', height: '2px', borderRadius: '1px', background: 'linear-gradient(90deg, #FFC107, transparent)' }}></div>
          </div>
        </motion.section>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '15px'
          }}
        >
          <span style={{
            fontWeight: '500',
            color: billingCycle === 'monthly' ? '#FFC107' : '#9E9E9E'
          }}>
            Monthly
          </span>
          
          <div 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            style={{
              position: 'relative',
              width: '60px',
              height: '30px',
              backgroundColor: billingCycle === 'yearly' ? 'rgba(255, 193, 7, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: billingCycle === 'yearly' ? '33px' : '3px',
              width: '24px',
              height: '24px',
              backgroundColor: '#FFC107',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}></div>
          </div>
          
          <span style={{
            fontWeight: '500',
            color: billingCycle === 'yearly' ? '#FFC107' : '#9E9E9E',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            Yearly 
            <span style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              fontSize: '12px',
              padding: '2px 8px',
              borderRadius: '10px',
              marginLeft: '10px'
            }}>
              15% OFF
            </span>
          </span>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '40px'
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '15px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedCategory === category.id 
                  ? 'rgba(255, 193, 7, 0.15)' 
                  : 'rgba(255, 255, 255, 0.03)',
                border: selectedCategory === category.id 
                  ? '2px solid rgba(255, 193, 7, 0.5)' 
                  : '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: selectedCategory === category.id 
                  ? '0 4px 20px rgba(255, 193, 7, 0.3)' 
                  : 'none',
                minWidth: '100px'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                backgroundColor: selectedCategory === category.id 
                  ? 'rgba(255, 193, 7, 0.1)' 
                  : 'rgba(255, 193, 7, 0.1)',
                background: selectedCategory === category.id 
                  ? 'linear-gradient(135deg, #FFC107, #FF9800)' 
                  : 'rgba(255, 193, 7, 0.1)',
                boxShadow: selectedCategory === category.id 
                  ? '0 4px 15px rgba(255, 193, 7, 0.4)' 
                  : 'none'
              }}>
                <i className={category.icon}></i>
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {category.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top Row - First 3 Cards */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              marginBottom: '25px',
              justifyContent: 'center'
            }}>
              {currentPlans.slice(0, 3).map((plan, index) => (
                <PricingCard 
                  key={plan.name}
                  plan={plan}
                  index={index}
                  billingCycle={billingCycle}
                  onGetStarted={() => handleGetStarted(plan)}
                />
              ))}
            </div>

            {/* Bottom Row - Remaining Cards */}
            {currentPlans.length > 3 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '25px',
                justifyContent: 'center'
              }}>
                {currentPlans.slice(3).map((plan, index) => (
                  <PricingCard 
                    key={plan.name}
                    plan={plan}
                    index={index + 3}
                    billingCycle={billingCycle}
                    onGetStarted={() => handleGetStarted(plan)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
            borderRadius: '16px',
            padding: '40px',
            margin: '60px 0',
            border: '2px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #FFC107, #FF9800, #FFC107)',
            backgroundSize: '200% 100%',
            animation: 'gradient-flow 5s ease infinite'
          }}></div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #FFC107, #FF9800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Have Questions? We're Here to Help!
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#9E9E9E',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Have any doubt about our services, pricing models, or costs? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />
        </motion.section>
      </div>

      {/* Services Popup Modal */}
      <AnimatePresence>
        {showPopup && selectedPlan && (
          <ServicesPopup 
            plan={selectedPlan} 
            billingCycle={billingCycle}
            onClose={() => setShowPopup(false)} 
          />
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @media (max-width: 768px) {
          .section-header {
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ plan, index, billingCycle, onGetStarted }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: plan.popular ? 1.05 : 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        flex: 1,
        minWidth: '280px',
        maxWidth: '350px',
        background: plan.popular 
          ? 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.08) 100%)' 
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        borderRadius: '16px',
        padding: '25px',
        border: plan.popular 
          ? '2px solid rgba(255, 193, 7, 0.5)' 
          : '2px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        transition: 'all 0.4s ease',
        boxShadow: plan.popular 
          ? '0 8px 32px rgba(255, 193, 7, 0.25)' 
          : '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
      whileHover={{ 
        y: -8,
        borderColor: 'rgba(255, 193, 7, 0.4)',
        boxShadow: '0 12px 40px rgba(255, 193, 7, 0.25)',
        background: plan.popular 
          ? 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)'
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFC107, #FF9800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: '700',
          color: '#0A0A0A',
          transform: 'rotate(15deg)'
        }}>
          TOP
        </div>
      )}

      {/* Card Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: plan.popular ? '#FFC107' : 'white'
        }}>
          {plan.name}
        </h3>
        <div style={{ fontSize: '24px', color: '#FFC107' }}>
          <i className={plan.icon}></i>
        </div>
      </div>

      {/* Price */}
      <div style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #FFC107, #FF9800)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
      </div>

      {/* Features */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginBottom: '25px'
      }}>
        {plan.features.map((feature, i) => (
          <li key={i} style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <i className="fas fa-check" style={{
              color: '#4CAF50',
              marginRight: '10px',
              marginTop: '3px',
              flexShrink: 0
            }}></i>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button - Rectangular Shape */}
      <motion.button
        onClick={onGetStarted}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px', // Rectangular shape
          border: 'none',
          background: plan.popular 
            ? 'linear-gradient(135deg, #FFC107, #FF9800)' 
            : 'rgba(255, 193, 7, 0.1)',
          color: plan.popular ? '#0A0A0A' : '#FFC107',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          border: plan.popular ? 'none' : '2px solid rgba(255, 193, 7, 0.3)',
          fontSize: '1rem'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

// Services Popup Modal Component
function ServicesPopup({ plan, billingCycle, onClose }) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(10, 10, 10, 0.98))',
          borderRadius: '16px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          border: '2px solid rgba(255, 193, 7, 0.3)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '25px 30px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 193, 7, 0.05)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '15px'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                margin: '0 0 5px 0',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {plan.name}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0,
                fontSize: '1rem'
              }}>
                All Services Included
              </p>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '5px'
              }}>
                ${price}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {billingCycle === 'monthly' ? 'per month' : 'per year'}
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: '2px solid rgba(255, 193, 7, 0.3)',
            background: 'rgba(255, 193, 7, 0.1)',
            color: '#FFC107',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          whileHover={{ 
            background: 'rgba(255, 193, 7, 0.2)',
            transform: 'rotate(90deg)'
          }}
        >
          ×
        </motion.button>

        {/* Services Content - Scrollable */}
        <div style={{
          padding: '25px 30px',
          overflowY: 'auto',
          flex: 1,
          maxHeight: 'calc(90vh - 140px)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '25px'
          }}>
            {plan.services && plan.services.map((category, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  margin: '0 0 15px 0',
                  color: '#FFC107',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className={category.icon}></i>
                  {category.title}
                </h4>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.items.map((service, serviceIndex) => (
                    <li key={serviceIndex} style={{
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fas fa-check" style={{
                        color: '#4CAF50',
                        marginRight: '10px',
                        marginTop: '4px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}></i>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Pay Button */}
        <div style={{
          padding: '20px 30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 193, 7, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            <i className="fas fa-shield-alt" style={{ marginRight: '8px', color: '#4CAF50' }}></i>
            Have any query ? Ask here
          </div>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <motion.button
              onClick={onClose}
              style={{
                padding: '12px 25px',
                borderRadius: '8px',
                border: '2px solid rgba(255, 193, 7, 0.3)',
                background: 'transparent',
                color: '#FFC107',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                background: 'rgba(255, 193, 7, 0.1)'
              }}
            >
              Cancel
            </motion.button>
            
            <motion.button
              onClick={() => {
                // Add payment integration here
                alert(`Proceeding to payment for ${plan.name} - $${price}`);
                onClose();
              }}
              style={{
                padding: '12px 30px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                color: '#0A0A0A',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i>
              Pay Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Contact Form Component (unchanged)
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you within 24 hours.`);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Contact Form JSX remains the same as your original code */}
      {/* ... existing contact form code ... */}
    </form>
  );
}

// Service Data Functions
function getSEOServices(planType) {
  const baseServices = [
    {
      title: 'SEO ANALYSIS',
      icon: 'fas fa-chart-bar',
      items: [
        'Keyword Research & Analysis',
        'Baseline Ranking Check',
        'Duplicate Content Check',
        'Google Penalty Check'
      ]
    },
    {
      title: 'ON-PAGE OPTIMIZATION',
      icon: 'fas fa-cogs',
      items: [
        'Website Canonical Check',
        'Title Tag Optimization',
        'META Tags Optimization',
        'Heading Tags Optimization',
        'Image Alt Tags Optimization',
        'Content Optimization',
        'SEO Friendly URL Setup',
        'Site Navigation Analysis',
        '404 Page Implementation',
        'Broken Links Check',
        'Website Speed Check',
        'Google Indexed Pages Check',
        'Robots.txt Creation',
        'Google XML Sitemap',
        'HTML Sitemap (If Available)',
        'Website Responsive Check',
        'Google Webmaster Tools Setup',
        'Google Analytics Setup',
        'On Site Blog Section Creation',
        'On Site Blog Posting – 1'
      ]
    }
  ];

  const offPageServices = {
    title: 'OFF-PAGE OPTIMIZATION',
    icon: 'fas fa-external-link-alt',
    items: [
      'Search Engine Submission',
      'Blog Writing - 2',
      'Blog Links - 2',
      'Blog Social Bookmarking - 6',
      'Article Writing - 1',
      'Article Submissions - 1',
      'Article Marketing - 5',
      'Image sharing - 2',
      'Contextual Links',
      'Google Indexed Pages Check',
      'Keyword used in anchor text',
      'Social Blog Sharing',
      'Social Bookmarking - 15',
      'Micro Blogging - 4',
      'Classified Submissions - 5',
      'Bing Local Listing',
      'Video Marketing (if client provides) - 1',
      'Location optimization',
      'Local Business Listings',
      'NAP Syndication'
    ]
  };

  const supportServices = {
    title: 'CUSTOMER SUPPORT',
    icon: 'fas fa-headset',
    items: ['Email', 'Phone', 'Chat']
  };

  // Add services based on plan type
  if (planType === 'starter') {
    return [...baseServices.slice(0, 1), supportServices];
  } else if (planType === 'basic') {
    return [...baseServices, supportServices];
  } else {
    return [...baseServices, offPageServices, supportServices];
  }
}

function getSMOServices(planType) {
  // Similar structure for SMO services
  return [
    {
      title: 'SOCIAL MEDIA MANAGEMENT',
      icon: 'fas fa-share-alt',
      items: planType === 'starter' ? [
        '2 Social Platforms Setup',
        '10 Posts per Month',
        'Basic Content Creation',
        'Monthly Performance Report'
      ] : planType === 'professional' ? [
        '4 Social Platforms Setup',
        '20 Posts per Month',
        'Advanced Content Strategy',
        'Weekly Performance Reports',
        'Audience Engagement'
      ] : [
        'All Social Platforms',
        '30+ Posts per Month',
        'Complete Content Strategy',
        'Daily Monitoring',
        'Influencer Outreach',
        'Paid Social Advertising'
      ]
    }
  ];
}

function getPPCServices(planType) {
  // Similar structure for PPC services
  return [
    {
      title: 'PAY-PER-CLICK MANAGEMENT',
      icon: 'fas fa-ad',
      items: planType === 'starter' ? [
        '1 Campaign Setup',
        'Basic Keyword Research',
        'Monthly Optimization',
        'Performance Reports'
      ] : planType === 'professional' ? [
        '3 Campaigns Setup',
        'Advanced Keyword Research',
        'Weekly Optimization',
        'A/B Testing',
        'Conversion Tracking'
      ] : [
        'Unlimited Campaigns',
        'Comprehensive Strategy',
        'Daily Optimization',
        'Multi-channel Management',
        'Advanced Analytics',
        'Dedicated Expert'
      ]
    }
  ];
}

// Similar functions for other service types (web-dev, content, branding)
function getWebDevServices(planType) {
  return [/* ... */];
}

function getContentServices(planType) {
  return [/* ... */];
}

function getBrandingServices(planType) {
  return [/* ... */];
}