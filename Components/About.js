import Image from 'next/image'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'

import img from '../public/dp5.jpg'


export default function About() {
  return (
    <div className=" text-center pb-10 flex flex-col">
      
      <h2 className=" text-4xl mb-3 text-teal-600 font-medium">Kushan Gayantha</h2>
      <h3 className=" text-xl">Full Stack Developer</h3>
      <p className=" m-3 text-gray-500 leading-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempora, optio rerum, cupiditate quasi dolore vitae cum voluptate velit quis eaque veritatis praesentium sapiente totam culpa mollitia natus voluptatem qui?
      </p>
      <div className=" place-self-center mt-3 flex w-fit items-center text-3xl gap-10">
        <a href="https://github.com/Kushan2k">
          <AiFillGithub className='cursor-pointer ' style={{ color: 'black' }} />
        </a>
        <a href="www.linkedin.com/in/kushan-gayantha-b2069b1a8">
          <AiFillLinkedin className='cursor-pointer' style={{ color: '#0e76a8' }} />
        </a>
        <a href="https://twitter.com/itskushang">
          <AiFillTwitterCircle className='cursor-pointer' style={{ color: '#1DA1F2' }} />
        </a>
      </div>
      <div className='items-center mt-10 overflow-hidden w-80 h-80 relative place-self-center rounded-full bg-gradient-to-b from-teal-500'>
        <Image src={img} alt='Me' layout='fill' style={{objectFit:'contain'}}  />
      </div>
      
    </div>
  )
}
