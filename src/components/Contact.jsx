import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      value: 'rupombadhan111@gmail.com', // Placeholder, user can update
      link: 'mailto:rupombadhan111@gmail.com',
      color: 'text-cyan-500 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-500/10',
      border: 'border-cyan-200 dark:border-cyan-500/20',
      hover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-300'
    },
    {
      id: 2,
      icon: <FaPhone size={24} />,
      title: 'Phone',
      value: '+880 1568 115 886', // Placeholder
      link: 'tel:+8801568115886',
      color: 'text-blue-500 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-500/10',
      border: 'border-blue-200 dark:border-blue-500/20',
      hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-300'
    },
    {
      id: 3,
      icon: <FaWhatsapp size={24} />,
      title: 'WhatsApp',
      value: '+880 1568 115 886', // Placeholder
      link: 'https://wa.me/8801568115886',
      color: 'text-green-500 dark:text-green-400',
      bg: 'bg-green-100 dark:bg-green-500/10',
      border: 'border-green-200 dark:border-green-500/20',
      hover: 'group-hover:text-green-600 dark:group-hover:text-green-300'
    }
  ];

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-black p-4 text-gray-900 dark:text-white py-32 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-12 text-center"
        >
          <h2 className="section-title border-b-0 inline-block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:-translate-x-1/2 after:rounded-full">
            Get In Touch
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="mb-4">
               <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Talk About Your Project</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                 I'm currently available for freelance work and open to new opportunities. 
                 Whether you have a question or just want to connect, feel free to reach out!
               </p>
            </div>

            {contactInfo.map((item) => (
              <a 
                key={item.id} 
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`group glass-card p-6 flex items-center gap-6 cursor-pointer hover:border-opacity-50 transition-all duration-300 ${item.border}`}
              >
                <div className={`p-4 rounded-full ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className={`text-xl font-bold text-gray-900 dark:text-white ${item.hover} transition-colors duration-300`}>{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <form action="https://getform.io/f/your-form-id" method="POST" className="glass-card p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 group/input">
                    <label className="text-gray-500 dark:text-gray-400 text-sm font-bold ml-1 uppercase tracking-wider group-focus-within/input:text-cyan-500 dark:group-focus-within/input:text-cyan-400 transition-colors duration-300">Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 hover:border-gray-400 dark:hover:border-gray-600"
                    />
                </div>
                
                <div className="flex flex-col gap-2 group/input">
                    <label className="text-gray-500 dark:text-gray-400 text-sm font-bold ml-1 uppercase tracking-wider group-focus-within/input:text-cyan-500 dark:group-focus-within/input:text-cyan-400 transition-colors duration-300">Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 hover:border-gray-400 dark:hover:border-gray-600"
                    />
                </div>

                <div className="flex flex-col gap-2 group/input">
                    <label className="text-gray-500 dark:text-gray-400 text-sm font-bold ml-1 uppercase tracking-wider group-focus-within/input:text-cyan-500 dark:group-focus-within/input:text-cyan-400 transition-colors duration-300">Message</label>
                    <textarea
                    name="message"
                    rows="6"
                    placeholder="Enter your message"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 resize-none hover:border-gray-400 dark:hover:border-gray-600"
                    ></textarea>
                </div>

                <button className="text-white px-8 py-4 mt-2 rounded-full btn-gradient w-full flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300 group/btn">
                  Send Message
                  <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
