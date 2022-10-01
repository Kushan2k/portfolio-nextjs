import {BsFillMoonStarsFill} from 'react-icons/bs'


export default function Navbar({setcolor}) {
  return (
    <nav className='p-1.5 mx-10 items-center flex h-20  justify-between mb-10'>
      <h1 className='invisible sm:visible text-xl text-center w-2/4'>Welcome</h1>
      <ul className=' flex flex-row justify-evenly h-full items-center gap-10'>
        <li className=' mx-3'>
          
          <BsFillMoonStarsFill onProgress={()=>{setcolor()}} className='cursor-pointer text-xl'/>
        </li>
        <li className=' hover:border-b-4 border-teal-500 ' ><a href="#projects"> Projects</a></li>
        <li className=' hover:border-b-4 border-teal-500'><a href="">Resume</a></li>
        <li className=' hover:border-b-4 border-teal-500' ><a href=""> Contacts </a></li>
      </ul>
    </nav>
  )
}
