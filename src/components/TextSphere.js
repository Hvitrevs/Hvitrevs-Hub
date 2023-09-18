import React, { useEffect } from "react";
import "../styles/TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";
import { Heading, LeText } from "../styles/GlobalStyled";

const TextSphere = () => {
  
  
  useEffect(() => {
    return () => {
      
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "Windows OS",
        "MongoDB",
        "JavaScript",
        "React",
        "Vue",
        "Tailwind",
        "NodeJS",
        "MySQL",
        "Jquery",
        "Vite",
        "NodeJs",
        "WordPress",
        "GIT",
        "GITHUB",
        "Photoshop",
        "Adobe XD",
        "Figma",
        "Typescript",
        "Adobe I",
        "Blender",
        "Python",
        "Express",
        "Linux",
        "🦊",
        
      ];

      const options = {
        radius: 420,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    
    <>
      <Heading align='center' as='h4' size='h3' top='7rem'> SKILL<LeText> CLOUD</LeText></Heading>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;