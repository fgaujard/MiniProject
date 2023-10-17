import PropTypes from 'prop-types'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CardList from './components/CardList.jsx'
import './style.scss'

function App() {

  const [cart, setCart] = useState(0);

  return (
    <>
      <Navbar cart={cart}/>
      <CardList cart={cart} setCart={setCart}/>
      <Footer />
    </>
  )
}

export default App
