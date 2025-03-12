import React from 'react'
import Siginup from './Components/Auth/Signup'
import SignIn from './Components/Auth/siginin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashborde from './Components/Auth/pages/Dashborde'
import SendMoney from './Components/Auth/pages/SendMoney'

export default function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/Siginup" element={<Siginup />} />
          <Route path="/siginin" element={<SignIn />} />
          <Route path="/dashbord" element={<Dashborde />} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
