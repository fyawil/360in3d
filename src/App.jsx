import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PitchVideo from './components/PitchVideo.jsx'
// import Services from './components/Services.jsx'
import Scheduler from './components/Scheduler.jsx'
import AboutUs from './components/About Us.jsx'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <PitchVideo />
      {/* <Services /> */}
      <Scheduler />
       <AboutUs />
      <Footer />
    </>
  )
}

export default App
