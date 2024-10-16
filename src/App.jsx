import './App.css'
import ChefRecommends from './components/ChefRecommends'
import FromOurManu from './components/FromOurManu'
import Hero from './components/Hero'
import OrderOnline from './components/OrderOnline'

function App() {


  return (
    <>
      <div>
        <Hero />
        <OrderOnline />
        <FromOurManu />
        <ChefRecommends/>
      </div>
    </>
  )
}

export default App
