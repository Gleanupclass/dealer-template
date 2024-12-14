import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCar, FaTachometerAlt, FaGasPump, FaCog, FaPalette, FaCarSide } from 'react-icons/fa';
import vehicleData from '../data/vehicleData.json';
import { resolveImagePath } from '../utils/utils';

const VehicleListing = () => {
  const [vehicles, setVehicles] = useState([]);
  const { vehicleType } = useParams();

  useEffect(() => {
    // Scroll to the top of the page when vehicleType changes
    window.scrollTo(0, 0);

    // Filter vehicles based on vehicleType
    const filteredVehicles = vehicleData.vehicles.filter(
      (vehicle) => vehicle.specs.bodyStyle.toLowerCase() === vehicleType.toLowerCase()
    );
    setVehicles(filteredVehicles);
  }, [vehicleType]);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">
          {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)} Vehicles
        </h1>

        <div className="space-y-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-black rounded-lg overflow-hidden border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Image Section */}
                <div className="md:col-span-4 h-[300px]">
                  <img
                    src={resolveImagePath(vehicle.image)}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details Section */}
                <div className="md:col-span-6 p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-gray-400">
                      <span className="font-semibold">Mileage:</span> {vehicle.mileage.toLocaleString()} KM
                    </div>
                    <div className="text-gray-400">
                      <span className="font-semibold">Stock #:</span> {vehicle.stockNumber || 'N/A'}
                    </div>
                    <div className="text-gray-400">
                      <span className="font-semibold">Transmission:</span> {vehicle.specs.transmission}
                    </div>
                    <div className="text-gray-400">
                      <span className="font-semibold">Drivetrain:</span> {vehicle.specs.drivetrain}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="flex flex-col items-center text-gray-400 text-sm">
                      <FaPalette className="h-6 w-6 mb-2" />
                      {vehicle.color || 'N/A'}
                    </div>
                    <div className="flex flex-col items-center text-gray-400 text-sm">
                      <FaGasPump className="h-6 w-6 mb-2" />
                      {vehicle.specs.fuelType}
                    </div>
                    <div className="flex flex-col items-center text-gray-400 text-sm">
                      <FaCog className="h-6 w-6 mb-2" />
                      {vehicle.specs.engine || 'N/A'}
                    </div>
                    <div className="flex flex-col items-center text-gray-400 text-sm">
                      <FaCarSide className="h-6 w-6 mb-2" />
                      {vehicle.specs.bodyStyle}
                    </div>
                  </div>

                  <div className="mt-4 text-blue-500 cursor-pointer">
                    View All &gt;
                  </div>
                </div>

                {/* Price & Actions Section */}
                <div className="md:col-span-2 bg-black p-6 flex flex-col justify-between border-l border-gray-800">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    ${vehicle.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 mb-6">+ Taxes & licensing</div>

                  <div className="space-y-2">
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                      Compare
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                      Financing
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded">&lt;&lt;</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded">1</button>
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded">2</button>
          <button className="px-4 py-2 bg-black text-white border border-gray-800 rounded">&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleListing;
