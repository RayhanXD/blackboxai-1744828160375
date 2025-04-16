import React from 'react';

const Step = ({ number, title, description, image }) => (
  <div className="relative">
    {/* Step Number Badge */}
    <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">
      {number}
    </div>

    {/* Content */}
    <div className="pl-8 pb-12 relative">
      {/* Vertical Line */}
      {number < 5 && (
        <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-200"></div>
      )}

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={`Step ${number}: ${title}`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Get the Naptha SDK",
      description: "Start by installing our powerful SDK that provides all the tools you need for AI agent development.",
      image: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/67288c0d36b6f728c12ecea4_get-naptha-sdk-transcode.jpg"
    },
    {
      title: "Access the Naptha Hub",
      description: "Connect to our hub to access pre-built modules, share your work, and collaborate with the community.",
      image: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/67288c06adfd034af5201e1b_access-naptha-hub-transcode.jpg"
    },
    {
      title: "Agents Run on Naptha Nodes",
      description: "Deploy your agents to our distributed network of high-performance compute nodes.",
      image: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/67288bfbc485279b7287c170_agents-run-on-naptha-nodes-transcode.jpg"
    },
    {
      title: "Share your Modules",
      description: "Contribute to the ecosystem by sharing your modules and helping others build better AI applications.",
      image: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/67288bf043ac167d70a80a5e_share-your-modules-transcode.jpg"
    },
    {
      title: "Collaborate with the community",
      description: "Join forces with other developers to create groundbreaking AI solutions and push the boundaries of what's possible.",
      image: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/67288be86389619d2036a5ac_collaborate-with-the-community-transcode.jpg"
    }
  ];

  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to get started with Naptha
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Start Building Today
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-50/50 to-blue-50/50 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default HowItWorks;
