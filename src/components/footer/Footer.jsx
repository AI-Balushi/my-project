import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/waheed.baloch.98" target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
              Facebook
            </a>
            <a href="https://linkedin.com/in/abdul-waheed-al-balushi-84486317b" target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
              LinkedIn
            </a>
            <a href="https://wa.me/923222392618" target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Abdul Waheed. All Rights Reserved.</p>
        </div>

        <div className="text-right">
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
