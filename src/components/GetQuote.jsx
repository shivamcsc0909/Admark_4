import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GetQuote() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { 
      id: 'seo', 
      name: 'SEO Services', 
      icon: '🔍',
      price: 'Starting from $999/mo',
      color: '#00F0FF'
    },
    { 
      id: 'smo', 
      name: 'Social Media Marketing', 
      icon: '📱',
      price: 'Starting from $799/mo',
      color: '#7B2CBF'
    },
    { 
      id: 'ppc', 
      name: 'PPC Advertising', 
      icon: '💰',
      price: 'Starting from $1,299/mo',
      color: '#FF006E'
    },
    { 
      id: 'web', 
      name: 'Web Development', 
      icon: '💻',
      price: 'Starting from $2,999',
      color: '#00F0FF'
    },
    { 
      id: 'app', 
      name: 'App Development', 
      icon: '📱',
      price: 'Starting from $4,999',
      color: '#7B2CBF'
    },
    { 
      id: 'content', 
      name: 'Content Marketing', 
      icon: '✍️',
      price: 'Starting from $699/mo',
      color: '#FF006E'
    }
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          message: ''
        });
        setSelectedServices([]);
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      id="get-quote" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #c71919ff 0%, #141414 50%, #e9d7d7ff 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-admark-cyan rounded-full opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-admark-pink rounded-full opacity-5 blur-3xl" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-admark neon-glow-cyan">
            Get Your Custom Quote
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Select services, share your requirements, and let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text-cyan-pink">
              Choose Your Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 glassmorphism-strong card-hover-effect ${
                    selectedServices.includes(service.id) ? 'ring-2' : ''
                  }`}
                  style={{
                    borderColor: selectedServices.includes(service.id) ? service.color : 'transparent',
                    boxShadow: selectedServices.includes(service.id) 
                      ? `0 0 30px ${service.color}50` 
                      : 'none'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{service.icon}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedServices.includes(service.id) ? 'scale-110' : ''
                    }`}
                    style={{
                      borderColor: service.color,
                      background: selectedServices.includes(service.id) ? service.color : 'transparent'
                    }}>
                      {selectedServices.includes(service.id) && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: service.color }}>
                    {service.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {service.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Selected Services Summary */}
            {selectedServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 glassmorphism-strong rounded-2xl"
                style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-admark-cyan">
                  Selected Services ({selectedServices.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((id) => {
                    const service = services.find(s => s.id === id);
                    return (
                      <span
                        key={id}
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          background: `${service.color}20`,
                          color: service.color,
                          border: `1px solid ${service.color}50`
                        }}
                      >
                        {service.icon} {service.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text-purple-cyan">
              Your Requirements
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
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
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="john@company.com"
                />
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
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                >
                  <option value="">Select your budget</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2 resize-none"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || selectedServices.length === 0}
                className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isSubmitting 
                    ? 'rgba(100, 100, 100, 0.5)' 
                    : 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting && selectedServices.length > 0) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.4)';
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    ✓ Submitted Successfully!
                  </span>
                ) : (
                  'Submit Your Requirements 🚀'
                )}
              </button>

              {selectedServices.length === 0 && (
                <p className="text-center text-sm" style={{ color: 'rgba(255, 0, 110, 0.8)' }}>
                  Please select at least one service to continue
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}