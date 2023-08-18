import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'

import Job from './Pages/Freelancer/Job'
import Freelancerboard from './Pages/Freelancer/Freelancerboard'
import Messages from './Pages/Freelancer/Messages'

function App() {


  return (
    <>
      <div className="">

        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/freelancer/dashboard" exact element={<Dashboard />} /> */}
            <Route path="/freelancer/job" exact element={<Job />} />
            <Route path="/freelancer/dashboard" exact element={<Freelancerboard />} />
            <Route path="/freelancer/messages" exact element={<Messages />} />
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
