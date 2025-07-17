import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LandlordDashboard from './pages/LandlordDashboard'
import ApplicantDashboard from './pages/ApplicantDashboard'
import MyProperties from './pages/MyProperties'
import AddProperty from './pages/AddProperty'
import MyProfile from './pages/MyProfile'
import MyMatches from './pages/MyMatches'
import AcceptedTenants from './pages/AcceptedTenants'
import Waitlist from './pages/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landlord" element={<LandlordDashboard />} />
          <Route path="/applicant" element={<ApplicantDashboard />} />
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-matches" element={<MyMatches />} />
          <Route path="/accepted-tenants" element={<AcceptedTenants />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App