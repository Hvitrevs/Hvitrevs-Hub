import { FaReact, FaNode, FaDiscord,} from 'react-icons/fa';
import { SiExpress, SiMongodb, } from 'react-icons/si';
import Desktop2 from '../assets/desktop2.png';
import Desktop from '../assets/desktop.png';
import { GiSmartphone } from 'react-icons/gi';
import { TbTools } from 'react-icons/tb';
import {  PiArrowFatUpThin, PiFlyingSaucer } from 'react-icons/pi';
import {  SiMinutemailer } from 'react-icons/si';


// import { GiVikingChurch } from 'react-icons/gi';

export const Skills = [
  {
    id: 0,
    tech: 'React JS',
    icon: <FaReact />

  },
  {
    id: 1,
    tech: 'Node JS',
    icon: <FaNode />

  },
  {
    id: 2,
    tech: 'Express',
    icon: <SiExpress />

  },
  {
    id: 3,
    tech: 'MongoDB',
    icon: <SiMongodb />

  },

];

export const projectDetails = [
  {
    id: 0,
    project_name: 'Weather Desktop Application',
    project_desc: 'This is a weather API utilizer that transforms API data from open-metio.com into readable responsive webpage.',
    tech_stack: ['Vite', 'JavaScript', 'Tailwind' ],
    project_img: Desktop2,
    project_url: 'https://magical-concha-6ccb16.netlify.app',
    project_page:'https://github.com/Hvitrevs/Weather-app-',
    reverse: false,
  },
  {
    id: 1,
    project_name: 'Admin Dashboard Application',
    project_desc: 'Front-End sales dashboart utilizing recharts into responsive webpage. No server side, demo version only.',
    tech_stack: ['Vite', 'TypeScript', 'SASS', 'React' ],
    project_img: Desktop,
    project_url: 'https://incandescent-vacherin-43b64e.netlify.app',
    project_page:'https://github.com/Hvitrevs/Sales-dashboard',
    reverse: false,
  },

]

export const navLinks = [
  {
    id: 0,
    name: 'Home',
    href: 'Home'
  },
  {
    id: 1,
    name: 'Skills',
    href: 'Skills'
  },
  {
    id: 2,
    name: 'Apps',
    href: 'Projects'
  },
  {
    id: 3,
    name: 'Contact',
    href: 'Contact'
  },

]

export const navIcons = [
  {
    id: 0,
    name: <PiArrowFatUpThin />,
    href: 'Home'
  },
  {
    id: 1,
    name: <TbTools />,
    href: 'Skills'
  },
  {
    id: 2,
    name: <PiFlyingSaucer />,
    href: 'Projects'
  },
  {
    id: 3,
    name: <SiMinutemailer />,
    href: 'Contact'
  },

]

export const Contacts = [
  {
    id: 0,
    tech: 'venusof12pm#1502',
    icon: <FaDiscord/>,
  },
  {
    id: 1,
    tech: '+1 720 000 00 00',
    icon: <GiSmartphone />,

  },

];

export const appsDetails = [
  {
    id: 0,
    app_name: 'Weather Desktop Application',
    app_desc: 'This is a weather API utilizer that transforms API data from open-metio.com into readable responsive webpage.',
    tech_stack: ['Vite', 'JavaScript', 'Tailwind' ],
    app_img: Desktop2,
    app_url: 'https://magical-concha-6ccb16.netlify.app',
    app_page:'https://github.com/Hvitrevs/Weather-app-',
    reverse: false,
  },
  {
    id: 1,
    app_name: 'Admin Dashboard Application',
    app_desc: 'Front-End sales dashboart utilizing recharts into responsive webpage. No server side, demo version only.',
    tech_stack: ['Vite', 'TypeScript', 'SASS', 'React' ],
    app_img: Desktop,
    app_url: 'https://incandescent-vacherin-43b64e.netlify.app',
    app_page:'https://github.com/Hvitrevs/Sales-dashboard',
    reverse: false,
  },

]