import '../App.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface BackgroundaltProps {
    leftImageURL: string;
    rightImageURL:string;
}

const Background = ({ leftImageURL , rightImageURL}: BackgroundaltProps) => {
    useGSAP(() => {
     gsap.from('.left-bg',{
        x:-2000,
        duration:1.5,
        delay:0.5,
     })

     gsap.from('.right-bg',{
        x:2000,
        duration:1.5,
        delay:0.5
     })
    });


    return (
        <div>
           <div className='left-bg'><img src={leftImageURL} alt="" /></div>
            <div className='right-bg'><img src={rightImageURL} alt="" /></div>
        </div>
    )
}

export default Background