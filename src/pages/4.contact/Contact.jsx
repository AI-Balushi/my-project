import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </header>

      <section className="max-w-2xl mx-auto py-10">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <p className="mt-2 text-gray-600">Email: <a href="mailto:waheedjdk@hotmail.com" className="text-indigo-600 hover:underline">waheedjdk@hotmail.com </a></p>
          <p className="mt-2 text-gray-600">Phone: <span className="text-indigo-600">+92-3222392618</span></p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
