import Link from "next/link"
export default function Header(){
 return(
    <div className="bg-emerald-700">
        
        <ul className="flex place-content-center ">
            <li className="m-5 text-emerald-50 text-lg"><Link href="/">Home</Link></li>
            <li className="m-5 text-emerald-50 text-lg"><Link href="../portfolio">Portfolio</Link></li>
            <li className="m-5 text-emerald-50 text-lg"><Link href="../about">About</Link></li>
            <li className="m-5 text-emerald-50 text-lg"><Link href="../contect-us">Contact Us</Link></li>
        </ul>
    </div>
 )
}


