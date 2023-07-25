import Image from "next/image"
import logo from "../../images/logo.png"

const Header =() =>{
  return (
  <div className="w-full h-20 bg">
    <div>
      <Image className="" src={logo} alt="logoImg"/>
       </div>
    </div>
    )
}

export default Header;