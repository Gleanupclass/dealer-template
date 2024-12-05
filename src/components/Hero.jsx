import React from "react";
import { Button } from "primereact/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src="https://image123.azureedge.net/mvpmotorvalleypark/9389007222361598-508822218897848-range_rover_sport_phev_first_edition_2022_4k-2560x1440.jpg"
          alt="Highway aerial view"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-lg">
          <h1 className="text-5xl font-bold text-white mb-4">
            Pride in Every Deal
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Building Trust, One Car at a Time
          </p>
          <Button
            label="Discover More"
            className="p-button-raised w-fit px-6 py-2 text-black bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
