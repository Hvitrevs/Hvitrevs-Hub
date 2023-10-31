import React, { useEffect } from "react";
import "../TextSphere/TextSpheremobile.css";
import TagCloud from "TagCloud";
import { Heading, LeText } from "../../styles/GlobalStyled";


const TextSphereMobile = () => {

  
  // this gonna be cloud with texts 
  useEffect(() => {
    return () => {
      
      const container2 = ".tagcloud2";
      const texts2 = [
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

      const options2 = {
        radius: 900,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,

        
      };  
    const container1 = ".tagcloud1";
      const texts1 = [
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

      const options1 = {
        radius: 780,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,

        
      };


      const container0 = ".tagcloud";
      const texts0 = [
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

      const options0 = {
        radius: 253,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: false,

        
      };


      TagCloud(container0, texts0, options0, container1, options1, texts1,container2, texts2, options2 );

    };
  }, []);

  return (
    
    <>
      <Heading className="title1" align='center' as='h1' size='h3' top='1rem' bottom='0.3rem'>I use <LeText> and familiar with </LeText> </Heading>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphereMobile;