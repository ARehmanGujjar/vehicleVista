import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
const Aibot = () => {
  return (
    <>
    <Sheet>
  <SheetTrigger className="hidden sm:flex">
  <div
    className="relative ml-2 inline-flex items-center justify-center p-2 px-2 py-2 overflow-hidden font-medium text-indigo-600 rounded-full shadow-2xl group">
    <span
      className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-600 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-pink-600 rounded-full blur-md"></span>
      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-purple-700 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white text-base font-semibold">AI Chat</span>
  </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>VehicleVista presents AI Chatbot</SheetTitle>
      <SheetDescription>
        <div className="absolute bottom-2 flex">

        <input type="text" name="propmpt" id="prompt" className="border border-gray-600 rounded-lg p-2 m-1 w-72" placeholder="Ask anything about vehicleVista" />
        <Image src={"https://www.svgrepo.com/show/311169/send.svg"} alt="send button" width={40} height={40}/>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    
    </>
  )
}

export default Aibot