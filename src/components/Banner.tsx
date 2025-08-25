import './css/Banner.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Banner = () => {
    useGSAP(() => {
        gsap.from('.banner-wrapper img',{
            opacity:0,
            duration:1.5,
            delay:2,
        });
    })

    return (
        <div className="container">
            <div className="banner-wrapper">
                <img src="../../public/Immediately regret falling into bathtub.png" alt="" />
            </div>
        </div>
    )
}

export default Banner