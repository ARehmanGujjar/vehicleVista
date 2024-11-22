import Link from "next/link"
import Image from "next/image"
import Logo from "@/app/public/logoImages/appLogo.png"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Aibot from "./aibot"
const Header = () => {
  return (
    <>

<header className="text-gray-600 z-10 body-font flex rounded-md shadow-md ">
<Sheet>
  <SheetTrigger>
  <div className="ml-2">
          <label
            htmlFor="menu-toggle"
            className=" pointer-cursor flex md:hidden"
          >
            <svg
              className="fill-current  text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              {/* <title>menu</title> */}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
  </SheetTrigger>
  <SheetContent  side={'left'}>
    <SheetHeader>
      <SheetTitle><div className="flex justify-center items-center">

<Image src={Logo} width={70} height={70} alt="logo" />
</div></SheetTitle>
      <SheetDescription >
      <nav>
            <ul className="flex-col items-center justify-between text-2xl text-gray-700 pt-4 md:pt-0">
              <Link href="/" className="md:p-4 py-3 my-2 px-0 block border border-gray-200 rounded-lg">
                Home
              </Link>
              <Link href="/about" className="md:p-4 my-2 py-3 px-0 block  border border-gray-200 rounded-lg">
                About
              </Link>
              
              <Link
                href="/contact"
                className="md:p-4 py-3 px-0 block my-2 md:mb-0 mb-2 border border-gray-200 rounded-lg"
              >
                Contact{" "}
              </Link>
            </ul>
          </nav>
          <Aibot/>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  <div className="container mx-auto flex flex-wrap p-5 justify-between sm:justify-center md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 sm:mb-4 md:mb-0">
    <Image  width={100} height={100} src={Logo} alt="logo" />
      <span className="sm:ml-1 text-xl text-[#071952]">VehicleVista</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto sm:flex flex-wrap items-center hidden  text-base justify-center">
      <Link href={'/'}  className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
<div className="flex justify-center items-center gap-2">

    <Link href={"/auth/login"}><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[#088395] hover:text-white rounded text-base sm:mt-4 md:mt-0">
      Login
    </button></Link>
    <Link href={'/auth/signup'}><button className=" sm:ml-2 text-white hidden sm:inline-flex items-center bg-[#071952] border-0 py-1 px-3 focus:outline-none hover:bg-[#088395] rounded text-base sm:mt-4 md:mt-0">
      Sign Up
    </button></Link>
</div>
  <Aibot/>
  </div>
</header>
    </>
  )
}

export default Header