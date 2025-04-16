import React from 'react';

const Ecosystem = () => {
  const partners = [
    {
      name: "Nous",
      logo: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/66fea06d331623eab28ff426_nous.png"
    },
    {
      name: "Lama",
      logo: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/66fea07cfb27fccee66587ea_lama.png"
    },
    {
      name: "Llama",
      logo: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/66fea08bee562c98b78934da_Llama.png"
    },
    {
      name: "Nvidia",
      logo: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/66fea09aea6b5e5ac612006f_nvidia.png"
    },
    {
      name: "LLM",
      logo: "https://cdn.prod.website-files.com/66f2be004a4cd3bc185922bc/66fea0a96e144135e31bd3c8_llm.png"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Works with the tools you <span className="text-gradient">love</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with your favorite AI technologies and frameworks
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full max-w-[200px] p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative aspect-[3/2] flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            More integrations are being added regularly. Stay tuned for updates!
          </p>
          <button className="btn-primary">
            Explore Integrations
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
};

export default Ecosystem;
