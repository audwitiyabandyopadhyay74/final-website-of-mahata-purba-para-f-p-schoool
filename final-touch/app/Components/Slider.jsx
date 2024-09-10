import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../Assets/Image/img1.png.jpg'
import img2 from '../Assets/Image/img2.png.jpg'
import img3 from '../Assets/Image/img3.png.jpg'
import img4 from '../Assets/Image/img5.png.jpg'
import Image from 'next/image';

const fadeImages = [
  {
    url: img1,
    caption: 'First Slide'
  },
  {
    url: img2,
    caption: 'Second Slide'
  },
  {
    url: img3,
    // caption: 'Third Slide'
  },{
    url: img4,
    caption: 'Fourth Slide'
  }
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='flex flex-col justify-center items-center h-[716px]'>            
          <h2 className='text-3xl ml-[50%] mt-[-10%] z-1000' style={{display:"none"}}>{fadeImage.caption}</h2>
            <Image style={{ width: '100%',zIndex: '0'}} src={fadeImage.url} />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slider;