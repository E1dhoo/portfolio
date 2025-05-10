import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/shin.jpg";
import logoImage1 from "../../assets/logoimg.png";

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "FrontEnd Developer",
    "VR Developer",
    "Programmer",
    "Jr. FullStack Developer",
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayAfterTyping = 2000;
    const delayAfterDeleting = 500;

    const currentText = texts[textIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setTimeout(typeEffect, delayAfterDeleting);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText === currentText) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, textIndex, texts]);

  const typeEffect = () => {
    const currentText = texts[textIndex];
    if (!isDeleting && displayText !== currentText) {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    }
  };

  return (
    <section
      id="about"
      className="py-4 px-6 md:px-16 lg:px-32 font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Eldho T Babu
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-purple-500">{displayText}</span>
            <span className="text-purple-500 animate-pulse">|</span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a Computer Science and Design student specializing in software
            development, web development, and game design. I focus on the MERN
            stack for full-stack development and Unreal Engine for immersive
            game and VR experiences, bringing creative ideas to life through
            innovative technology.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ZRKLK53-H68y5Xlo0ZLyeH7_uLcgeLC1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-90 h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 border-4 border-purple-700 rounded-lg"
          >
            <img
              src={profileImage}
              alt="Eldho T Babu"
              className="w-full h-full rounded-lg object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
