import './css/Footer.css'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
interface buttons {
    twitter:string,
    linkedIn:string,
    facebook:string,
    divProps:React.HTMLAttributes<HTMLDivElement>
}

const Footer = ({twitter ,  linkedIn , facebook , divProps}: buttons) => {
    const tl = gsap.timeline();
    const imageTL = gsap.timeline();

    useGSAP(() => {
        tl.from('.item-1',{
            y:1000,
            duration:1,
            delay:2,
        });
        tl.from('.item-2',{
            y:1000,
            duration:1,
        });
        tl.from('.item-3',{
            y:1000,
            duration:1,
        });

        imageTL.from('.img-1',{
            y:1000,
            duration:1,
            delay:2,
        });
        imageTL.from('.img-2',{
            y:1000,
            duration:1
        })
        imageTL.from('.img-3',{
            y:1000,
            duration:1
        })
    })

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/About');
    }

  return (
    <div className="container">
        <div className="footer-wrapper">
            <footer>
                <div {...divProps}>
                    <ul>
                        <li className='item-1'><a  onClick={handleClick}>ABOUT</a></li>
                        <li className='item-2'><a  onClick={() => navigate('/Products')}>PRODUCTS</a></li>
                        <li className='item-3'><a  onClick={() => navigate('/Contact')}>CONTACT</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <ul>
                        <li className='img-1'><button><img src={twitter} alt="" /></button></li>
                        <li className='img-2'><button ><img src={linkedIn} alt="" /></button></li>
                        <li className='img-3'><button ><img src={facebook} alt="" /></button></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer