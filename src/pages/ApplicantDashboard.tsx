import React from 'react'
import { Link } from 'react-router-dom'
import { User, Heart, FileText, Search, Bell, MapPin } from 'lucide-react'

const ApplicantDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Applicant!</h1>
        <p className="text-gray-600">Find your perfect home and manage your housing applications</p>
      </div>

      {/* Profile Completion */}
      <div className="card mb-8 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Complete Your Profile</h3>
            <p className="text-primary-700 mb-4">Complete your profile to get better housing matches</p>
            <div className="w-full bg-primary-200 rounded-full h-2 mb-4">
              <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-primary-600">75% Complete</p>
          </div>
          <Link to="/my-profile" className="btn-primary">
            Complete Profile
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-secondary-100 rounded-lg">
              <Heart className="w-6 h-6 text-secondary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Saved Properties</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 rounded-lg">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Search className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">New Matches</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Notifications</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link to="/my-profile" className="card hover:shadow-xl transition-all duration-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">My Profile</h3>
            <p className="text-gray-600 text-sm">View and edit your housing profile</p>
          </div>
        </Link>

        <Link to="/my-matches" className="card hover:shadow-xl transition-all duration-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors">
              <Heart className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">My Matches</h3>
            <p className="text-gray-600 text-sm">Browse properties matched to your profile</p>
          </div>
        </Link>

        <Link to="/waitlist" className="card hover:shadow-xl transition-all duration-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
              <FileText className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Applications</h3>
            <p className="text-gray-600 text-sm">Track your housing applications</p>
          </div>
        </Link>
      </div>

      {/* Recent Matches */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Apartment building" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sunset Apartments</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">123 Main St, Fairfax, VA</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">2 bed, 1 bath • $1,200/month</p>
            <div className="flex space-x-2">
              <button className="btn-primary flex-1 text-sm py-2">Apply Now</button>
              <button className="btn-secondary flex-1 text-sm py-2">Save</button>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Modern apartment" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Oak Street Residences</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">456 Oak St, Fairfax, VA</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">1 bed, 1 bath • $950/month</p>
            <div className="flex space-x-2">
              <button className="btn-primary flex-1 text-sm py-2">Apply Now</button>
              <button className="btn-secondary flex-1 text-sm py-2">Save</button>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Apartment complex" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pine Valley Commons</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">789 Pine Ave, Fairfax, VA</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">3 bed, 2 bath • $1,500/month</p>
            <div className="flex space-x-2">
              <button className="btn-primary flex-1 text-sm py-2">Apply Now</button>
              <button className="btn-secondary flex-1 text-sm py-2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantDashboard