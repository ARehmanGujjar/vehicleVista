import Link from "next/link"
import Image from "next/image"
import Logo from "@/app/public/logoImages/appLogo.png"
const Header = () => {
  return (
    <>

<header className="text-gray-600 z-10 body-font  rounded-md shadow-md ">
  <div className="container mx-auto flex flex-wrap p-5 justify-between sm:justify-center md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 sm:mb-4 md:mb-0">
    <Image  width={100} height={100} src={Logo} alt="logo" />
      <span className="sm:ml-1 text-xl text-[#071952]">VehicleVista</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto sm:flex flex-wrap items-center hidden  text-base justify-center">
      <Link href={'/'}  className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
      <a className="mr-5 hover:text-gray-900">Contact Us</a>
      <a className="mr-5 hover:text-gray-900">Services</a>
    </nav>
<div className="flex justify-center items-center gap-2">

    <Link href={"/auth/login"}><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[#088395] hover:text-white rounded text-base sm:mt-4 md:mt-0">
      Login
    </button></Link>
    <Link href={'/auth/signup'}><button className=" sm:ml-2 text-white hidden sm:inline-flex items-center bg-[#071952] border-0 py-1 px-3 focus:outline-none hover:bg-[#088395] rounded text-base sm:mt-4 md:mt-0">
      Sign Up
    </button></Link>
</div>
  </div>
</header>
    </>
  )
}

export default Header