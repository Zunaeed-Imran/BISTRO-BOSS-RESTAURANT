import './App.css'
import ChefRecommends from './components/ChefRecommends'
import FromOurManu from './components/FromOurManu'
import FromOurMenu2 from './components/FromOurMenu2'
import Hero from './components/Hero'
import OrderOnline from './components/OrderOnline'
import Testimonial from './components/Testimonial'

function App() {


  return (
    <>
      <div>
        <Hero />
        <OrderOnline />
        <FromOurManu />
        <ChefRecommends />
        <FromOurMenu2 />
        <Testimonial/>
      </div>
    </>
  )
}

export default App
