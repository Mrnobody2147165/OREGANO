import Background from '../components/Background'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slick from '../components/Slick'

const Products = () => {
  return (
    <>
    <Background leftImageURL='../../public/Dark side.png' rightImageURL='../../public/Light side.png'/>
    <Header Logo='../../public/Oregano.png' button='WHAT WE DO' spanProps={{id:'started-btn'}}/>
    <Slick/>
    <Footer divProps={{className:'footer-left'}} twitter='../../public/twitter icon.png' linkedIn='../../public/linkedin icon.png' facebook='../../public/facebook icon.png'/>
    </>
  )
}

export default Products