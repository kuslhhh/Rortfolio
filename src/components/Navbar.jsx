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
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar