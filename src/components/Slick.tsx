import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './css/Slick.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Slick = () => {

  const tl = gsap.timeline();
  const imageTL = gsap.timeline();

  useGSAP(() => {
    tl.from('.slide-content h1' , {
      x:-1000,
      duration:1,
      delay:2,
    });
    tl.from('.slide-content p',{
      x:-1000,
      duration:1
    });
    tl.from('.slide-content span' , {
      x:-1000,
      duration:1
    });

    imageTL.from('.slide-img img',{
      rotate:360,
      y:-1000,
      x:1000,
      duration:1.5,
      delay:2
    });
  })

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div className='slider-wrapper'>
          <div className="slide">
            <div className="slide-content">
              <h1>Study case</h1>
              <p>Run in circles show belly, lick paws then retire to the warmest spot on the couch to claw at the fabric.</p>
              <span>FULL SIZE</span>
            </div>
            <div className="slide-img"><img src="../../public/chris-barbalis-249277.png" alt="" /></div>
          </div>
        </div>
        <div className='slider-wrapper'>
          <div className="slide">
            <div className="slide-content">
              <h1>Art case</h1>
              <p>Run in circles show belly, lick paws then retire to the warmest spot on the couch to claw at the fabric.</p>
              <span>FULL SIZE</span>
            </div>
            <div className="slide-img"><img src="../../public/chris-barbalis-249277.png" alt="" /></div>
          </div>
        </div>
        <div className='slider-wrapper'>
          <div className="slide">
            <div className="slide-content">
              <h1>Color case</h1>
              <p>Run in circles show belly, lick paws then retire to the warmest spot on the couch to claw at the fabric.</p>
              <span>FULL SIZE</span>
            </div>
            <div className="slide-img"><img src="../../public/chris-barbalis-249277.png" alt="" /></div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Slick