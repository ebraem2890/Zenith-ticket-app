import React, {useState} from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './Footer/Footer'
import LoginPopUp from './LoginPopUp/LoginPopUp';

const App = () => {
   const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Footer />
    </>
  )
}

export default App
