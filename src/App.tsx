import './App.css'
import Background from './components/Background'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
 
  return (
    <>
    <Header Logo='../public/Oregano.png' button='LETS GET STARTED' spanProps={{id:'started-btn'}}/>
    <Banner/>
    <Footer divProps={{className:'footer-left'}} twitter='../public/twitter icon.png' linkedIn='../public/linkedin icon.png' facebook='../public/facebook icon.png'/>
    <Background leftImageURL='../public/Dark side.png' rightImageURL='../public/Light side.png'/>
    </>
  )
}

export default App
