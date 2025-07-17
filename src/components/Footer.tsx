import React from 'react'
import { Home, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Housing.gov</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting landlords and tenants through innovative matching technology. 
              Making housing accessible and fair for everyone in Fairfax County.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Fairfax County, VA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Landlords</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/landlord" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/my-properties" className="hover:text-white transition-colors">My Properties</a></li>
              <li><a href="/add-property" className="hover:text-white transition-colors">Add Property</a></li>
              <li><a href="/accepted-tenants" className="hover:text-white transition-colors">Accepted Tenants</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Tenants</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/applicant" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/my-profile" className="hover:text-white transition-colors">My Profile</a></li>
              <li><a href="/my-matches" className="hover:text-white transition-colors">My Matches</a></li>
              <li><a href="/waitlist" className="hover:text-white transition-colors">Waitlist</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Housing.gov - Fairfax County Housing Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer