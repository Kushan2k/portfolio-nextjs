import Link from 'next/link'
import {BsFillMoonStarsFill} from 'react-icons/bs'


export default function Navbar({setcolor}) {
  return (
    <nav className='p-1.5 bg-gray-100 items-center flex h-16 px-4 justify-between '>
      <h1 className='invisible sm:visible text-xl text-center w-2/4'>
        <Link href={'/'}>
          <a>Welcome</a>
        </Link>
      </h1>
      <ul className=' flex flex-row justify-evenly gap-4 h-full items-center md:gap-10'>
        <li className=' mx-3'>
          
          <BsFillMoonStarsFill onProgress={()=>{setcolor()}} className='cursor-pointer text-xl'/>
        </li>
        <li className=' hover:border-b-4 border-teal-500 ' >
          <Link href={'/projects'}>
            <a> Projects</a>
          </Link>
        </li>
        <li className=''>
          <a href="" className=' bg-teal-500 p-2 rounded-md text-white'>
            Resume
          </a>
        </li>
        <li className=' hover:border-b-4 border-teal-500' ><a href=""> Contacts </a></li>
      </ul>
    </nav>
  )
}
