import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form"

const Contact = () => {

    const imageURL:string = "../../public/snazzy-image.png";
  return (
    <>
    <Background  rightImageURL={imageURL} leftImageURL="../../public/Light side.png"/>
    <Header Logo="../../public/Oregano 2.png" button="Get In Touch" spanProps={{id:'started-btn-copy'}}/>
    <div className="container">
    <div className="wrapper">
        <Form/>
    </div>
    </div>
    <Footer divProps={{className:'footer-left-copy'}} twitter="../../public/twitter icon copy.png" linkedIn="../../public/linkedin icon copy.png" facebook="../../public/facebook icon copy.png"/>
    </>
  )
}

export default Contact