import Image from "next/image";
import adnan from  "./adnan.jpg"

export default function Home() {
  return (
  <div className="box flex bg-emerald-50 w-full">

    <div className="box1  flex-auto w-64 ml-5 mt-10 text-xl">
      <samp className="text-emerald-700">NAME</samp>
    <h1 className="text-lime-600">Muhammad Adnan Khan</h1>
    <samp className="text-emerald-700">EMAIL</samp>
    <h1 className="text-lime-600">adyyy931@gmail.com</h1> 
    <samp className="text-emerald-700">GIT</samp>
    <h1 className="text-lime-600"><a href="https://github.com/Adnan00Khan">Adnan00Khan</a></h1>
    </div>

    <div className="box2 flex mr-4">
      <Image src={adnan} alt="img" width={250} className="h-64 mt-5"/>
    </div>
    
    </div>
  );
}
