import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting scheduled:', formData);
    alert('✅ Meeting request sent! We will confirm via email.');
    setShowSchedulePopup(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  useEffect(() => {
    if (showSchedulePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSchedulePopup]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: '#0A0A0A',
        paddingTop: '80px', // Reduced top padding
        paddingBottom: '40px'
      }}
    >
      {/* Bottom Corner Buttons - Updated Structure */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        {/* Website Cost Calculator Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
          style={{
            background: 'rgba(63, 252, 16, 0.96)',
            border: '2px solid rgba(147, 51, 234, 0.4)',
            color: '#9333ea',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(147, 51, 234, 0.2)';
            e.target.style.borderColor = '#9333ea';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(147, 51, 234, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(147, 51, 234, 0.1)';
            e.target.style.borderColor = 'rgba(147, 51, 234, 0.4)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          💰 Website Cost Calculator
        </motion.button>

        {/* Make Your Custom Plan Button - Moved above calculator with dark background */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
          style={{
            background: 'rgba(247, 9, 9, 0.95)', // Dark background
            border: '2px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF', // Super light text
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 30, 30, 0.95)';
            e.target.style.borderColor = 'rgba(255, 193, 7, 0.6)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(255, 193, 7, 0.2)';
            e.target.style.color = '#FFC107'; // Gold text on hover for better visibility
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(15, 15, 15, 0.95)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
            e.target.style.color = '#FFFFFF'; // Back to white
          }}
        >
          🛠️ Make Your Custom Plan
        </motion.button>
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
            top: '15%',
            right: '10%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '15%',
            left: '10%',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '5s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"> {/* Added margin top */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(255, 193, 7, 0.1)',
                border: '1px solid rgba(255, 193, 7, 0.3)',
              }}
            >
              <span className="text-xl">💡</span>
              <span style={{ color: '#FFC107' }} className="text-sm font-semibold">
                Digital Marketing Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 50%, #FF9800 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 5s ease infinite',
              }}
            >
              Transform Your Business With Data-Driven Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              We don't just create campaigns — we engineer growth systems that magnetize customers and multiply revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { value: '500+', label: 'Clients', icon: '👥' },
                { value: '300%', label: 'Avg ROI', icon: '📈' },
                { value: '15+', label: 'Countries', icon: '🌍' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-black mb-1" style={{ color: '#FFC107' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setShowSchedulePopup(true)}
                className="px-7 py-3.5 rounded-full font-bold text-base transition-all duration-300 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  color: '#000'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 193, 7, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                }}
              >
                📅 Schedule Meeting
              </button>

              <a
                href="#case-studies"
                className="px-7 py-3.5 rounded-full font-bold text-base transition-all duration-300"
                style={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  border: '2px solid rgba(255, 193, 7, 0.4)',
                  color: '#FFC107'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 193, 7, 0.2)';
                  e.target.style.borderColor = '#FFC107';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 193, 7, 0.4)';
                }}
              >
                View Success Stories →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[450px] h-[450px]" style={{ perspective: '1400px' }}>
              {/* Glow Background */}
              <div 
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, #FFC107 0%, #FF9800 50%, transparent 70%)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              
              {/* 3D Cube Container */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="relative"
                  style={{
                    width: '240px',
                    height: '240px',
                    transformStyle: 'preserve-3d',
                    animation: 'spinCube 12s linear infinite',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animationPlayState = 'running';
                  }}
                >
                  {/* Front Face - SEO */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{
                      transform: 'rotateY(0deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.04) 100%)',
                      border: '2px solid rgba(255,193,7,0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(255,193,7,0.2), 0 0 80px rgba(255,193,7,0.1) inset',
                      backdropFilter: 'blur(10px)',
                      backfaceVisibility: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div className="text-5xl">🎯</div>
                    <span className="text-2xl font-black" style={{ 
                      background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 6px 18px rgba(255,193,7,0.3)' 
                    }}>
                      SEO
                    </span>
                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #FFC107, #FF9800)' }} />
                  </div>

                  {/* Right Face - SMO */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{
                      transform: 'rotateY(90deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(161,255,222,0.08) 0%, rgba(155,225,255,0.04) 100%)',
                      border: '2px solid rgba(161,255,222,0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(161,255,222,0.2), 0 0 80px rgba(161,255,222,0.1) inset',
                      backdropFilter: 'blur(10px)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-5xl">📱</div>
                    <span className="text-2xl font-black" style={{ 
                      background: 'linear-gradient(135deg, #a1ffde, #9be1ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      SMO
                    </span>
                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #a1ffde, #9be1ff)' }} />
                  </div>

                  {/* Back Face - PPC */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{
                      transform: 'rotateY(180deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(255,107,107,0.08) 0%, rgba(255,77,77,0.04) 100%)',
                      border: '2px solid rgba(255,107,107,0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(255,107,107,0.2), 0 0 80px rgba(255,107,107,0.1) inset',
                      backdropFilter: 'blur(10px)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-5xl">💰</div>
                    <span className="text-2xl font-black" style={{ 
                      background: 'linear-gradient(135deg, #ff6b6b, #ff4d4d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      PPC
                    </span>
                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #ff6b6b, #ff4d4d)' }} />
                  </div>

                  {/* Left Face - Web Dev */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4"
                    style={{
                      transform: 'rotateY(-90deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(147,51,234,0.08) 0%, rgba(168,85,247,0.04) 100%)',
                      border: '2px solid rgba(147,51,234,0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(147,51,234,0.2), 0 0 80px rgba(147,51,234,0.1) inset',
                      backdropFilter: 'blur(10px)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-4xl">💻</div>
                    <span className="text-lg font-black text-center" style={{ 
                      background: 'linear-gradient(135deg, #9333ea, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: '1.2'
                    }}>
                      Web Development
                    </span>
                    <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #9333ea, #a855f7)' }} />
                  </div>

                  {/* Top Face - Brand */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      transform: 'rotateX(90deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(255,215,0,0.12) 0%, rgba(255,193,7,0.06) 100%)',
                      border: '3px solid rgba(255,193,7,0.4)',
                      borderRadius: '16px',
                      boxShadow: '0 12px 40px rgba(255,193,7,0.3), 0 0 100px rgba(255,193,7,0.15) inset',
                      backdropFilter: 'blur(12px)',
                      backfaceVisibility: 'hidden',
                      padding: '16px',
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <div 
                        className="font-black mb-2 text-lg"
                        style={{
                          background: 'linear-gradient(90deg, #ffd77a, #ffbd59, #ffd77a)',
                          backgroundSize: '200%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'glide 3s linear infinite',
                          textShadow: '0 0 30px rgba(255,193,7,0.5)',
                        }}
                      >
                        ADMARK
                      </div>
                      <div className="h-0.5 w-20 mx-auto mb-2 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #FFC107, transparent)' }} />
                      <small className="text-xs font-bold tracking-wider" style={{ color: '#FFC107' }}>
                        DIGITAL MEDIA
                      </small>
                    </div>
                  </div>

                  {/* Bottom Face */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: 'rotateX(-90deg) translateZ(120px)',
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
                      border: '2px solid rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      opacity: 0.4,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-6xl opacity-30">📊</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Particles */}
              {[
                // { emoji: '✨', angle: 0, delay: 0, size: 'text-2xl' },
                // { emoji: '🚀', angle: 60, delay: 0.5, size: 'text-3xl' },
                // { emoji: '💎', angle: 120, delay: 1, size: 'text-2xl' },
                // { emoji: '⚡', angle: 180, delay: 1.5, size: 'text-3xl' },
                // { emoji: '🎯', angle: 240, delay: 2, size: 'text-2xl' },
                // { emoji: '🌟', angle: 300, delay: 2.5, size: 'text-3xl' }
              ].map((item, index) => {
                const radius = 190;
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${item.size}`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      filter: 'drop-shadow(0 0 8px rgba(255,193,7,0.6))',
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                );
              })}

              {/* Orbiting Rings */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid rgba(255,193,7,0.1)',
                  animation: 'rotate 20s linear infinite',
                }}
              />
              <div 
                className="absolute inset-8 rounded-full"
                style={{
                  border: '1px solid rgba(255,193,7,0.08)',
                  animation: 'rotate 15s linear infinite reverse',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showSchedulePopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-85 z-[1000] flex items-center justify-center p-4"
              onClick={() => setShowSchedulePopup(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative"
                style={{
                  background: 'rgba(15, 15, 15, 0.98)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 193, 7, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(255, 193, 7, 0.4)',
                }}
              >
                <button
                  onClick={() => setShowSchedulePopup(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                  style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    color: '#FFC107',
                    border: '1px solid rgba(255, 193, 7, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.2)';
                    e.target.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                    e.target.style.transform = 'rotate(0deg)';
                  }}
                >
                  ✕
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-4xl font-black mb-3" style={{ color: '#FFC107' }}>
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Let's discuss how we can grow your business together
                  </p>
                </div>

                <div className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: 'rgba(255, 193, 7, 0.05)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        color: 'white'
                      }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white',
                          colorScheme: 'dark'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                      >
                        <option value="" style={{ background: '#1a1a1a' }}>Select time</option>
                        <option value="9:00 AM" style={{ background: '#1a1a1a' }}>9:00 AM</option>
                        <option value="10:00 AM" style={{ background: '#1a1a1a' }}>10:00 AM</option>
                        <option value="11:00 AM" style={{ background: '#1a1a1a' }}>11:00 AM</option>
                        <option value="12:00 PM" style={{ background: '#1a1a1a' }}>12:00 PM</option>
                        <option value="1:00 PM" style={{ background: '#1a1a1a' }}>1:00 PM</option>
                        <option value="2:00 PM" style={{ background: '#1a1a1a' }}>2:00 PM</option>
                        <option value="3:00 PM" style={{ background: '#1a1a1a' }}>3:00 PM</option>
                        <option value="4:00 PM" style={{ background: '#1a1a1a' }}>4:00 PM</option>
                        <option value="5:00 PM" style={{ background: '#1a1a1a' }}>5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg resize-none transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: 'rgba(255, 193, 7, 0.05)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        color: 'white'
                      }}
                      placeholder="Tell us about your business goals..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full font-bold text-xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                      boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                      color: '#000'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.boxShadow = '0 12px 35px rgba(255, 193, 7, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                    }}
                  >
                    Confirm Meeting 🚀
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spinCube {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to { transform: rotateX(-20deg) rotateY(360deg); }
        }
        @keyframes glide {
          0% { background-position: 0%; }
          50% { background-position: 100%; }
          100% { background-position: 0%; }
        }
        @keyframes float {
          0%, 100% { transform: translate(var(--tx), var(--ty)) translateY(0px); }
          50% { transform: translate(var(--tx), var(--ty)) translateY(-20px); }
        }
      `}</style>
    </section>
  );
}