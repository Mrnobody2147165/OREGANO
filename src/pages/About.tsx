import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './page css/About.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  const tl = gsap.timeline();
  const rightTL = gsap.timeline();

  useGSAP(() => {
    tl.from('.quotes',{
      x:-500,
      duration:1.2,
      delay:2
    });
    tl.from('.circle-bg',{
      x:1000,
      duration:1.2
    });
    tl.from('.left-content p',{
      opacity:0,
      duration:1.2,
    });
    rightTL.from('.para-1',{
      x:1000,
      duration:1.2,
      delay:2
    });
    rightTL.from('.para-2',{
      x:1000,
      duration:1.2,
    });
    rightTL.from('.para-3',{
      x:1000,
      duration:1.2,
    });

  });
  return (
    <>
    <Background leftImageURL="../../public/Light side.png" rightImageURL="../../public/Dark side.png"/>
    <Header Logo="../../public/Oregano 2.png" button="WHO WE ARE" spanProps={{ id: 'started-btn-copy' }}/>
    <div className="container">
    <div className="wrapper">
        <div className="left-content">
            <img className="quotes" src="../../public/Quotes.png" alt="" />
            <img className="circle-bg" src="../../public/Ellipse 1 copy 3.png" alt="" />
            <p>My left donut is missing, as is my right destroy the blinds. Cat snacks cough hairball on conveniently placed pants cough furball for scratch at fleas scratch strangers and dream about hunting birds. </p>
        </div>
        <div className="right-content">
            <p className="para-1">Run outside as soon as door open. Eat all the power cords refuse to drink water except out of someone's glass purr so eat all the power cords but purr, and sit on human meow. Dream about hunting birds. Kitty kitty kitty poochy, yet intrigued by the shower.</p>
            <p className="para-2">Hiss and stare at nothing then run suddenly away. Stare out the window destroy couch, and meow meow loudly just to annoy owners for spit up on light gray carpet instead of adjacent linoleum but need to chase tail. Stare out the window nap all day claw drapes ask for petting and make a weird face.</p>
            <p className="para-3">Knock dish off table rub face on owner need to chase tail, yet freak human out make funny noise mow mow mow mow mow mow success now attack human, attack feet. Present belly, scratch hand when stroked pounce on unsuspecting person yet chase mice. Hide head under blanket so no one can see. Slap owner's face until human fills food dish.</p>
        </div>
    </div>
    </div>
    <Footer divProps={{className:'footer-left-copy'}} twitter="../../public/twitter icon copy.png" linkedIn="../../public/linkedin icon copy.png" facebook="../../public/facebook icon copy.png"/>
    </>
  )
}

export default About