import React from 'react';

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 min-h-screen text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Explore a range of services designed to meet your business needs, from full-stack development to consulting. Let’s turn your ideas into reality!
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-10 max-w-6xl mx-auto">
        {/* Full-Stack Development */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">Full-Stack Development</h2>
          <p className="mt-4 text-center">
            From front-end interfaces to back-end APIs, I deliver scalable, responsive applications tailored to your specifications.
          </p>
        </div>

        {/* eCommerce Solutions */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">eCommerce Solutions</h2>
          <p className="mt-4 text-center">
            Build and grow your online store with seamless eCommerce solutions, customized for high performance and easy management.
          </p>
        </div>

        {/* Cloud Integration */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">Cloud Integration</h2>
          <p className="mt-4 text-center">
            Harness the power of cloud technologies for efficient and secure business operations, enabling flexible access and scalability.
          </p>
        </div>

        {/* Consulting Services */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">Consulting Services</h2>
          <p className="mt-4 text-center">
            Get expert guidance on digital transformation, business process automation, and best practices in tech and development.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">UI/UX Design</h2>
          <p className="mt-4 text-center">
            Create visually compelling, user-friendly interfaces to improve engagement and ensure a smooth user experience.
          </p>
        </div>

        {/* Technical Support */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">Technical Support</h2>
          <p className="mt-4 text-center">
            Reliable and timely support to keep your systems up and running, ensuring seamless operations and minimal downtime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
