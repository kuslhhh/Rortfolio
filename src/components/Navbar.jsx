import logo from "../assets/image.png"
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" height={40} width={40}/>    
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/kuslhhh")} className="cursor-pointer"/>
            <FaGithub onClick={() => window.open("https://github.com/kuslhhh")} className="cursor-pointer"/>
            <FaSquareXTwitter onClick={() => window.open("https://twitter.com/")} className="cursor-pointer"/>
            <FaInstagram onClick={() => window.open("https://www.instagram.com/kush_jadhav_/?igshid=YzAwZjE1ZTI0Zg%3D%3D")} className="cursor-pointer"/>
        </div>
    </nav>
  )
}

export default Navbar