import './App.css'
import ChefRecommends from './components/ChefRecommends'
import FromOurManu from './components/FromOurManu'
import FromOurMenu from './components/FromOurMenu'
import Hero from './components/Hero'
import OrderOnline from './components/OrderOnline'

function App() {


  return (
    <>
      <div>
        <Hero />
        <OrderOnline />
        <FromOurManu />
        <ChefRecommends />
        <FromOurMenu/>
      </div>
    </>
  )
}

export default App
