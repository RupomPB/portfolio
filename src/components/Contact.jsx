import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Create form data object for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch("https://getform.io/f/3eodqc8og26", { // REPLACE WITH YOUR GETFORM ID
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Auto-reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

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
         <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px]"
         />
         <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[100px]"
         />
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
            className="flex flex-col gap-8"
          >
            <div className="mb-4">
               <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Talk About Your Project</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
                 I'm currently available for freelance work and open to new opportunities. 
                 Whether you have a question or just want to connect, feel free to reach out!
               </p>
            </div>

            <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                <a 
                    key={item.id} 
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`group glass-card p-6 flex items-center gap-6 cursor-pointer hover:border-cyan-500/30 transition-all duration-300 ${item.border}`}
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
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 group/input">
                    <div className="relative">
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 dark:bg-black/30 text-gray-900 dark:text-white rounded-t-lg outline-none px-3 py-3 border-b-2 border-transparent transition-all duration-300 peer"
                        required
                        />
                         <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 peer-focus:w-full"></div>
                    </div>
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 hover:border-gray-400 dark:hover:border-gray-600"
                    />
                </div>
                
                <div className="flex flex-col gap-2 group/input">
                    <label className="text-gray-500 dark:text-gray-400 text-sm font-bold ml-1 uppercase tracking-wider group-focus-within/input:text-cyan-500 dark:group-focus-within/input:text-cyan-400 transition-colors duration-300">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 hover:border-gray-400 dark:hover:border-gray-600"
                    />
                </div>

                <div className="flex flex-col gap-2 group/input">
                    <label className="text-gray-500 dark:text-gray-400 text-sm font-bold ml-1 uppercase tracking-wider group-focus-within/input:text-cyan-500 dark:group-focus-within/input:text-cyan-400 transition-colors duration-300">Message</label>
                    <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    className="p-4 bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 resize-none hover:border-gray-400 dark:hover:border-gray-600"
                    ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`text-white px-8 py-4 mt-2 rounded-full btn-gradient w-full flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300 group/btn ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                     <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                     </>
                  ) : (
                     <>
                        Send Message
                  <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                     </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-4 p-4 rounded-lg bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-center font-medium"
                  >
                     Thank you! I will get back to you soon.
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-4 p-4 rounded-lg bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-center font-medium"
                  >
                     Something went wrong. Please try again later.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
