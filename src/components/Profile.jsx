import poto_profil from "./../img/poto_profil.jpeg"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Footer from "./Footer";
const Profile = () => {

  
    return (
        <>
        <div className="min-h-screen bg-blue-100 pt-8">
      <section className="text-center">
<img src={poto_profil} alt="Profile" className="w-60 h-60 mx-auto rounded-full object-cover  mb-4 filter animate-floating" />

        <h1 className="text-4xl font-bold text-blue-600">Basuki Sudirman</h1>
        <p className="text-lg text-gray-600 ">Software Engineer</p>
        <p className="mt-4 text-gray-500 ml-8 mr-8 pb-3">
          Passionate developer with expertise in building scalable web applications and
          dynamic user interfaces. I am an innovative and detail-oriented web developer based on customer specifications recommending application changes to make more efficient programs
          starting as a front end developer and later expanding to back end developer.
           I’m love bringing ideas to life on the web, focusing on building user-friendly applications and reliable backend systems to create meaningful digital experiences.
        </p>
      </section>
      </div>

      <section className="">
        <h2 className="text-2xl font-bold pb-2 pt-2 text-center text-white bg-blue-400">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-blue-200 pt-4 pb-4">
  <div className="flex items-center justify-center">
    <FaReact className="text-9xl" color="#61dafb" />
  </div>
  <div className="flex items-center justify-center">
    <FaNodeJs className="text-9xl" color="#68A063" />
  </div>
  <div className="flex items-center justify-center">
    <RiTailwindCssFill className="text-9xl" color="#38BDF8" />
  </div>
  <div className="flex items-center justify-center">
    <RiJavascriptFill className="text-9xl" color="#F7DF1E" />
  </div>
  <div className="flex items-center justify-center">
    <SiMysql className="text-9xl" color="#00758F" />
  </div>
  <div className="flex items-center justify-center">
    <SiPostgresql className="text-9xl" color="#336791" />
  </div>
  <div className="flex items-center justify-center">
  <FaHtml5 className="text-9xl" color="#E34F26" />
  </div>
  <div className="flex items-center justify-center">
  <FaCss3Alt className="text-9xl" color="#1572B6" />
  </div>
</div>
      </section>
      <Footer/>
      </>
    );
  };
  
  export default Profile;
  