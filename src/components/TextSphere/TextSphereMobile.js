import React, { useEffect } from "react";
import "../TextSphere/TextSpheremobile.css";
import TagCloud from "TagCloud";
import { Heading, LeText } from "../../styles/GlobalStyled";



const TextSphereMobile = () => {
  
  // this gonna be cloud with texts 
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
        radius: 240,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,

        
      };


      TagCloud(container, texts, options);

    };
  }, []);

  return (
    
    <>
      <Heading align='center' as='h1' size='h3' top='1rem' bottom='0.3rem'>I use <LeText> and familiar with </LeText> </Heading>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphereMobile;