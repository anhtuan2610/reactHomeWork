import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import TheBand from './components/TheBand';
import TourDates from './components/TourDates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full flex-col items-center font-sans'>
      <Header/>
      <Banner/>
      <TheBand/>
      <TourDates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
