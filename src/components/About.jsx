import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-black text-gray-900 dark:text-white py-32 relative overflow-hidden transition-colors duration-300">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8 text-center md:text-left">
          <h2 className="section-title">
            About Me
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 mt-4 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose tracking-wide">
            I am <span className="text-cyan-600 dark:text-cyan-400 font-bold">Rupom Prosad Badhan</span>, a dedicated MERN Stack Developer driven by a relentless curiosity for technology. My coding journey started with the basics of HTML and CSS, but my desire to build dynamic, interactive applications led me to master the MERN stack. I view every project as an opportunity to learn, grow, and refine my craft, treating code quality and scalability as non-negotiables.
            </p>

            <br />

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose tracking-wide">
            What excites me most is the intersection of logic and creativity. I love the process of turning abstract ideas into robust full-stack applications, ensuring that every user interaction is smooth and every database query is optimized. Whether it's crafting a sleek user interface with <span className="text-cyan-600 dark:text-cyan-400">React</span> and <span className="text-cyan-600 dark:text-cyan-400">Tailwind</span> or structuring a complex API with <span className="text-cyan-600 dark:text-cyan-400">Node.js</span> and <span className="text-cyan-600 dark:text-cyan-400">MongoDB</span>, I approach every task with precision and a user-first mindset.
            </p>

            <br />

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose tracking-wide">
            Beyond the screen, I am a firm believer in continuous growth—both professional and personal. I enjoy staying active with sports, exploring creative outlets, and keeping up with the latest tech trends. I bring the same level of discipline and enthusiasm to my hobbies as I do to my development work, always striving to be better than I was yesterday.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
