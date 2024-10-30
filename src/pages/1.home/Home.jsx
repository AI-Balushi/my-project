import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Abdul Waheed's Professional Portfolio</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I'm Abdul Waheed, a passionate web developer, tech enthusiast, and dedicated problem-solver specializing in TypeScript, Node.js, and modern front-end frameworks. Join me on a journey to discover technology solutions that make a difference.
        </p>
      </header>

      {/* Slide Section */}
      <section className="flex flex-col items-center py-16 space-y-10">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-10 text-gray-800">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">About Me</h2>
            <p className="mt-4 text-center">
              With years of experience in web development, I have honed my skills in TypeScript, React, Node.js, and cloud-based solutions. I'm committed to delivering robust, scalable, and innovative web solutions for a seamless user experience.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-10 text-gray-800">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">Services Offered</h2>
            <p className="mt-4 text-center">
              Explore my range of services from full-stack development, custom web applications, eCommerce solutions, to consulting services for digital transformation and business automation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-10 bg-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800">Let’s Build Something Great Together</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Ready to take your business to the next level? Contact me to discuss your project needs and discover how I can help bring your vision to life.
        </p>
        <Link to="/contact">
          <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md">
            Get In Touch
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
