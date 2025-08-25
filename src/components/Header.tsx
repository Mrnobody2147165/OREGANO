import './css/Header.css'
import { useNavigate} from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


interface header {
    Logo: string,
    button: string,
    spanProps?: React.HTMLAttributes<HTMLSpanElement>
}

const Header = ({ button, Logo, spanProps }: header) => {
const navigate = useNavigate();

useGSAP(() => {
    gsap.from('header a' , {
        y:-1000,
        duration:1.5,
        delay:1
    });
    gsap.from('#started-btn' , {
        y:-1000,
        duration:1.5,
        delay:1,
    });
    gsap.from('#started-btn-copy' , {
        y:-1000,
        duration:1.5,
        delay:1,
    });
});

    return (
        <>
            <div className='container'>
                <header>
                     <a onClick={() => navigate('/')}><img src={Logo} alt="" /></a>
                    <span {...spanProps}>{button}</span>
                </header>
            </div>
        </>
    )
}

export default Header