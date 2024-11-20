import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer mt-5 bg-base-300 text-base-content p-10">
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
      <Link to='https://www.facebook.com/juwel34/'>
        <FaFacebook className="text-3xl text-blue-600"/>
      </Link>
      <Link to= "https://www.linkedin.com/in/md-juwel-rana-14b563204/">
      <FaLinkedin className="text-3xl text-blue-800"/>
      </Link>
      <Link to="https://instagram.com/juwelrana906?igshid=OGQ5ZDc2ODk2ZA==">
        <FaInstagramSquare className="text-3xl text-rose-600 "/>
      </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer