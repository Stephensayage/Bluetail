import React, { useState, useEffect } from 'react';
import './App.css';
import { verifyUser } from './Services/auth'

import Header from './Components/Shared/header'
import Footer from './Components/Shared/footer'
import Main from './Main/Main';


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }
  console.log(`This is in app ${currentUser}`)
  return (<>
    <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <Main currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <Footer />
  </>
  );
}

export default App;
