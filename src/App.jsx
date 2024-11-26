import './App.css'
import ChefRecommendsAPI from './components/ChefRecommendsAPI'
// import ChefRecommends from './components/ChefRecommends'
import FromOurManu from './components/FromOurManu'
import FromOurMenu2 from './components/FromOurMenu2'
import Hero from './components/Hero'
import OrderOnline from './components/OrderOnline'
import Testimonial from './components/Testimonial'
import PageTitle from './services/PageTitle'

function App() {


  return (
    <>
      <div>
        <PageTitle title={'Bistro-Boss'} />
        <Hero />
        <OrderOnline />
        <FromOurManu />
        {/* <ChefRecommends /> */}
        <ChefRecommendsAPI/>
        <FromOurMenu2 />
        <Testimonial />
      </div>
    </>
  );
}

export default App
