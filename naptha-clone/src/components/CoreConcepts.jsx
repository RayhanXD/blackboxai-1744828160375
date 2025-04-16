import React from 'react';

const FeatureCard = ({ title, description, images }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {images && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${title} illustration ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

const CoreConcepts = () => {
  const features = [
    {
      title: "Agent Diversity",
      description: "Agent Diversity continuously upgrades multi-agent systems to new heights of performance, enabling unprecedented capabilities in AI applications.",
      images: [
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/6709116d0f6ec1db05987f40_illustration1.avif",
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/6708ece2f1f0ee956f385841_illustration.avif"
      ]
    },
    {
      title: "Horizontal Scaling",
      description: "Horizontal Scaling enables collaborative AI networks of millions of AI agents working together, creating powerful distributed intelligence systems.",
      images: [
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/6708e7bab7068db795938954_ill-2.webp",
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/67091554caa90ad8a713f6f0_illustration4.avif"
      ]
    },
    {
      title: "Self-Evolved AI Agents",
      description: "Self-Evolved AI agents consistently outperform agents designed and developed by humans, pushing the boundaries of artificial intelligence.",
      images: [
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/6708e7bab7068db795938954_ill-2.webp",
        "https://cdn.prod.website-files.com/66f155c8ffa125a1115616ec/67091554caa90ad8a713f6f0_illustration4.avif"
      ]
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Core <span className="text-gradient">Concepts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access next year's AI capabilities today
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              images={feature.images}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary">
            Learn More About Our Technology
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-50 to-transparent" />
      </div>
    </section>
  );
};

export default CoreConcepts;
