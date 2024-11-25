import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import Footer from "./Footer";

const Contact = () => {
    return (
      <>
      <div className="min-h-screen bg-blue-100">
      <section className="text-center " style={{ backgroundColor: "#b3e0ff" }}>
        <h2 className="text-2xl font-semibold mb-4 p-8">"We’re Always Here to Assist You – Get in Touch with Us Today"</h2>
        <p className="text-gray-600 mr-5 ml-5">If you have any questions, suggestions, or require assistance with our products or services, don't hesitate to get in touch. Our team is ready and eager to provide you with the help and information you need.</p>
      
      </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#b3e0ff" fill-opacity="1" d="M0,32L30,64C60,96,120,160,180,165.3C240,171,300,117,360,106.7C420,96,480,128,540,117.3C600,107,660,53,720,58.7C780,64,840,128,900,133.3C960,139,1020,85,1080,69.3C1140,53,1200,75,1260,85.3C1320,96,1380,96,1410,96L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
</svg>

<section className="text-center">
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-screen-lg mx-auto">
  <div className="p-4 bg-blue-100 rounded-lg">
  <div className="flex items-center m-6">
    <div>
      <h3 className="text-lg font-bold">Basuki's Home</h3>
      <p className="text-gray-600">Jl. Kalibaru Barat VII, Cilincing Jakarta Utara</p>
      <p className="text-gray-600">14110</p>
      <p className="text-gray-600">(+62)895-3362-479-19</p>
    </div>
  </div>
</div>
<div className="p-4 bg-blue-100 grid grid-cols-1 sm:grid-cols-5 gap-4 max-screen-lg mx-auto">
      <div className="flex items-center justify-center ">
      <a
        href="https://www.linkedin.com/in/basuki-sudirman/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin className="text-8xl" color="#0077b5" />LinkedIn
      </a></div>
      <div className="flex items-center justify-center">
      <a
        href="https://github.com/Basukisudirman36"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
      >
        <FaGithub className="text-8xl" />Github
      </a></div>
      <div className="flex items-center justify-center">
      <a
        href="https://instagram.com/Ibn.hasbi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
      >
        <FaInstagram className="text-8xl text-pink-600" />Instagram
      </a></div>
      <div className="flex items-center justify-center">
      <a
        href="https://wa.me/62895336247919"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp Profile"
      >
        <FaWhatsapp className="text-8xl text-green-500" />WhatsApp
      </a></div>
      <div className="flex items-center justify-center">
      <a
        href="https://drive.google.com/file/d/17zR7QH5ydedx3Aop4VsnnsOYjhCgCm1z/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp Profile"
      >
        <IoDocumentOutline className="text-8xl " />CV
      </a></div>
</div>
</div>
</section>
      </div>
      <Footer/>
    </>
    );
  };
  
  export default Contact;
  