import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Error from './Pages/Error'
import ForgotPassword from './Pages/ForgotPassword'
import Verify from './Pages/Verify'
import ResetPassword from './Pages/ResetPassword'

function App() {


  return (
    <>
      <div className="">

        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route path="/user/verify-email" exact element={<Verify />} />
            <Route path="/user/reset-password" exact element={<ResetPassword />} />
            <Route path="*" exact element={<Error />} />

            {/* <ProtectedRoute path='/' exact>

            </ProtectedRoute> */}

          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
