import React, { useEffect } from "react";
import "../TextSphere/TextSpheremobile.css";
import TagCloud from "TagCloud";
import { Heading, LeText } from "../../styles/GlobalStyled";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



const TextSphereMobile = () => {

  // this gonna be pie chart 

  const data = [
    {
      name: '18-24',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: '25-29',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      uv: 15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      uv: 8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: 2.63,
      pv: 4800,
      fill: '#d0ed57',
    },
    {
      name: 'unknow',
      uv: 6.67,
      pv: 4800,
      fill: '#ffc658',
    },
  ];
  
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
        radius: 190,
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