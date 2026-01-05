import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>

        <div className="glass-card p-8 mt-8">
            <p className="text-xl mt-5 text-gray-300 leading-relaxed">
            I am <span className="text-cyan-400 font-bold">Rupom Prosad Badhan</span>, a dedicated MERN Stack Developer driven by a relentless curiosity for technology. My coding journey started with the basics of HTML and CSS, but my desire to build dynamic, interactive applications led me to master the MERN stack. I view every project as an opportunity to learn, grow, and refine my craft, treating code quality and scalability as non-negotiables.
            </p>

            <br />

            <p className="text-xl text-gray-300 leading-relaxed">
            What excites me most is the intersection of logic and creativity. I love the process of turning abstract ideas into robust full-stack applications, ensuring that every user interaction is smooth and every database query is optimized. Whether it's crafting a sleek user interface with <span className="text-cyan-400">React</span> and <span className="text-cyan-400">Tailwind</span> or structuring a complex API with <span className="text-cyan-400">Node.js</span> and <span className="text-cyan-400">MongoDB</span>, I approach every task with precision and a user-first mindset.
            </p>

            <br />

            <p className="text-xl text-gray-300 leading-relaxed">
            Beyond the screen, I am a firm believer in continuous growth—both professional and personal. I enjoy staying active with sports, exploring creative outlets, and keeping up with the latest tech trends. I bring the same level of discipline and enthusiasm to my hobbies as I do to my development work, always striving to be better than I was yesterday.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
