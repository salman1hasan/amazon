import Image from "next/image"
import logo from "../../images/logo.png"

const Footer = () =>{
  return (
    <div className="w-full h-20 bg-amazon_light tet-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo"/>
      <p>All rights reserverd<a href="https://reactbd.com" target="_blank">
        @reactbd.com
        </a>
        </p>
    </div>
  )
}

export default Footer