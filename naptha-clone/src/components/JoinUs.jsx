import React from 'react';

const JoinUs = () => {
  return (
    <section className="section bg-gradient-to-br from-primary/10 via-accent/10 to-purple-100/10 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="heading-2 mb-6">
              Ready to Shape the Future of{' '}
              <span className="text-gradient">AI</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Join our growing community of innovators, researchers, and developers who are pushing the boundaries of artificial intelligence.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Join Our Community
              </button>
              <button className="px-6 py-3 text-primary font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More →
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-lg">
              <img
                src="https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/670914712b425f23ce60f1ad_community%20illustration.avif"
                alt="Join Naptha Community"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-primary font-semibold">500+ Active Members</span>
            </div>
            <div className="absolute bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-accent font-semibold">Daily Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50/30 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-50/30 to-transparent rounded-full filter blur-3xl" />
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>
    </section>
  );
};

export default JoinUs;
