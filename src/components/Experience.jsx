import { Link } from 'react-router-dom';
import blk from "../img/blk.jpeg"
import binar from "../img/binar.png"
import digitalent from "../img/digitalent.png"
import institut from "../img/institut.png"
import Footer from './Footer';

const Experience = () => {

  const education = [
    { foto:binar, name: "Data Analyst", place:"Binar Academy", tahun: "Oktober 2024", tech : "PostgreeSQL, Looker Studio, Google Big Query" },
    { foto:institut, name: "Front End Developer", place:"Institut Kemandirian", tahun: "November 2023", tech:"React JS, My SQL" },
    { foto:digitalent,name: "Junior Website Devoper", place:"Digitalent Kominfo", tahun: "Juni 2023", tech:"HTML, CSS, JSon, PHP" },
    { foto:blk,name: "IT Software Solution For Businness", place:"BLK Bekasi", tahun: "Januari 2021", tech:" C#, SQL Server" },
  ];


  const projects = [
    { name: "Padi Solutions", desc:"PADI is website platform that provides access to knowledge and solutions to support sustainable and impactful business plans that enhance farmers' welfare",
       tech : "React JS, Javascript, Tailwind CSS", link:"https://padisolutions.com/" },
    { name: "HRIS Madani", desc:"A website for the HR division with features to manage payroll, leave, business trips, and other HR-related tasks.",
      tech : "React JS, Javascript, Tailwind CSS", link:"https://staging-hris.my.id/" },
    { name: "GameZone", desc:"An e-commerce website for games that sells a variety of online games, including genres like sports, adventure, and more.",
      tech : "Javascript, HTML, CSS", link:"https://whimsical-strudel-d8f43c.netlify.app/" },
    { name: "Toko Basuki", desc:"The official website of Toko Basuki, which sells food both online and offline.",
      tech : "Bootstrap, HTML, CSS", link:"https://sage-kangaroo-ef23cd.netlify.app/" }
      ];

  
    return (
      <>
      <div className="min-h-screen bg-blue-100 pt-8">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Work Experience</h2>
       
        <div className="p-4 grid bg-white rounded-lg shadow-md max-w-screen-lg mx-auto bg-blue-50 gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Madani Keberlanjutan (Internship)</h3>
              <p className="text-gray-600">Periode Juli 2024 - Desember 2024</p>
              </div>
              <p className="text-gray-600">Front End Developers</p>
              <p className="text-gray-400">Redesigned and rebuilt the padisolutions.com website to improve performance and implemented new features to enhance user experience and functionality.</p>
              <p className="text-gray-500">Technology: Javascript, React JS, Tailwind, REST API</p>
            </div>
      </section>

<section className="mb-10">
<h2 className="text-2xl font-bold mb-4 text-center">Education Experience</h2>
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-screen-lg mx-auto">
  {education.map((education, index) => (
  <div key={index} className="p-4 bg-white rounded-lg shadow-md">
  <div className="flex items-center">
    <img src={education.foto} alt="Foto Project" className="w-16 h-16 object-cover mr-4" />
    <div>
      <h3 className="text-lg font-bold">{education.name}</h3>
      <p className="text-gray-400">{education.tahun}</p>
      <p className="text-gray-600">{education.place}</p>
      <p className="text-gray-600">Tech: {education.tech}</p>
    </div>
  </div>
</div>

  ))}
</div>
</section>
<section className="mb-10">
<h2 className="text-2xl font-bold mb-4 text-center">Project Experience</h2>
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-screen-lg mx-auto">
  {projects.map((project, index) => (
  <div key={index} className="p-4 bg-white rounded-lg shadow-md">
  <Link class="hover:text-blue-400 transition duration-300" to = {project.link}>
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="text-gray-400">{project.desc}</p>
      <p className="text-gray-600">Tech: {project.tech}</p>
    </Link>
  </div>

  ))}
</div>
</section>
<Footer/>
</div>
</>
    );
  };
  
  export default Experience;