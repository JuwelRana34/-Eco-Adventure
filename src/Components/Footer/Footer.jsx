import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
function Footer() {
  return (
    <footer className="footer bg-gradient-to-b from-cyan-50 to-cyan-100 mt-5 bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <Link to='https://www.facebook.com/juwel34/' target="_blank">
        <FaFacebook className=" hover:scale-125 transition-all text-3xl text-blue-600"/>
      </Link>
      <Link to= "https://www.linkedin.com/in/md-juwel-rana-14b563204/" target="_blank">
      <FaLinkedin className=" hover:scale-125 transition-all text-3xl text-blue-800"/>
      </Link>
      <Link to="https://github.com/JuwelRana34" target="_blank">
        <IoLogoGithub className=" hover:scale-125 transition-all text-3xl text-gray-800 "/>
      </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer