import React from 'react';
import { Button } from 'primereact/button';

// Import images from assets
import adaptiveImg from '../assets/adaptive.png';
import ecoImg from '../assets/eco.png';

const VehicleFeatures = () => {
  const features = [
    {
      title: 'Adaptive Cruise Control',
      description: 'Maintain a safe distance from vehicles ahead with our intelligent cruise control system.',
      image: adaptiveImg,
    },
    {
      title: 'Eco-Friendly Engine',
      description: 'Our vehicles come equipped with engines designed to reduce emissions while maximizing fuel efficiency.',
      image: ecoImg,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">Why Choose Motor SuperKings</h2>
        <p className="text-2xl text-gray-700 mb-20 leading-relaxed">
          Discover the innovative features of our vehicles that enhance performance, comfort, and safety.
        </p>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center bg-gray-800 p-10 rounded-2xl shadow-2xl`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h3 className="text-4xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-6">
                  <Button
                    label="Discover More"
                    className="font-bold text-white rounded-md transition duration-300 ease-in-out w-48"
                    style={{
                      backgroundColor: '#FF6F00', 
                      color: '#ffffff', 
                      border: 'none',
                      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
                      padding: '14px 28px', 
                    }}
                    onClick={() => console.log(`Explore ${feature.title}`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFeatures;
