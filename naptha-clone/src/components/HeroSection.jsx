import React, { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://dl.naptha.ai/hero-still-small.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center text-white">
        <h1 className="max-w-4xl mx-auto heading-1 mb-6">
          AI Platform for Autonomous Agents, AI Applications and AI Research
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          Apply for access to the Naptha Developer Community today!
        </p>

        {/* Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={status === 'loading' || status === 'success'}
              />
              {status === 'error' && (
                <p className="mt-2 text-red-400 text-sm">{errorMessage}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full btn-primary ${
                status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
              } ${
                status === 'success' ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
            >
              {status === 'loading' && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {status === 'loading' ? 'Processing...' : 
               status === 'success' ? 'Thank you! 🎉' : 
               'Join the Waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-400">
              Thank you! Your submission has been received!
            </p>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
