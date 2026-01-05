import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Contact
          </p>
          <p className="py-6 text-gray-300">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/your-form-id" method="POST" className="flex flex-col w-full md:w-1/2 glass-card p-8">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 placeholder-gray-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-4 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 placeholder-gray-500"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-4 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 placeholder-gray-500 resize-none"
            ></textarea>

            <button className="text-white px-6 py-3 my-8 mx-auto flex items-center rounded-lg btn-gradient hover:scale-105 duration-300 w-full justify-center font-bold text-lg">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
