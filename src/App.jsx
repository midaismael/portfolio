import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/4-Main/Main'
import Contact from './components/3-contact/contact'
import Footer from './components/5-footer/Footer'


function App() {

  return (
    <div className='container'>
      <Header />
      <div className='divider' />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
    </div>
  )
}

export default App
