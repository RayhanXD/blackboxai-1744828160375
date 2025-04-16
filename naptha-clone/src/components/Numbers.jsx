import React from 'react';

const StatCard = ({ number, label, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      {label}
    </h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const Numbers = () => {
  const stats = [
    {
      number: "18x",
      label: "Performance Increase",
      description: "Increase on SWE-Bench Lite from agent diversity implementation"
    },
    {
      number: "26x",
      label: "Efficiency Boost",
      description: "Performance increase for evolved agents compared to traditional approaches"
    },
    {
      number: "6,500x",
      label: "Scaling Factor",
      description: "More agents per-node using actor-based distributed parallel execution"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Naptha Concepts in <span className="text-gradient">numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quantifiable results that demonstrate our platform's capabilities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            These metrics represent real-world performance improvements achieved by our users.
            Results may vary based on specific use cases and implementations.
          </p>
          <button className="btn-primary">
            View Detailed Metrics
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary/10 rounded-full"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Numbers;
