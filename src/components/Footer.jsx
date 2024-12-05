import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      items: ['Features', 'Pricing'],
    },
    {
      title: 'Resources',
      items: ['Blog', 'User guides', 'Webinars'],
    },
    {
      title: 'Company',
      items: ['About us', 'Contact us'],
    },
    {
      title: 'Plans & Pricing',
      items: ['Personal', 'Start up', 'Organization'],
    },
  ];

  return (
    <footer className="bg-black pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2024 AutoTrust Dealership, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
