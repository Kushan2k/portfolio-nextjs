import Image from 'next/image'

import p1 from '../public/p1.jpg'
import p2 from '../public/p2.jpg'
import p3 from '../public/p3.jpg'
import p4 from '../public/p4.jpg'
import p5 from '../public/p5.jpg'
import p6 from '../public/p6.jpg'
import p7 from '../public/p7.jpg'

export default function Projects() {

  const images = [
    p1,p2,p3,p4,p5,p6,p7

    
  ]

  return (
    <div className="flex flex-wrap justify-around">

      
      {
        images.map((img, id) => {
          
          return (
            <div key={id} className='m-3 border-4 w-screen shadow-md p-5 hover:cursor-pointer  md:w-2/6'  >
              <Image  src={img} layout='responsive' alt={id} className=' hover:scale-125' />
            </div>
          )
        })
      }

    </div>
  )
}
