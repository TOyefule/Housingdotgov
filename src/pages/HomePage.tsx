import React from 'react'
import { Link } from 'react-router-dom'
import { Building, Users, Shield, CheckCircle, ArrowRight, Home } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Housing.gov
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Connecting landlords and tenants through innovative matching technology. 
              Making housing accessible and fair for everyone in Fairfax County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/landlord" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
                <Building className="w-5 h-5 mr-2 inline" />
                Landlord Sign Up
              </Link>
              <Link to="/applicant" className="btn-primary bg-primary-500 hover:bg-primary-400">
                <Users className="w-5 h-5 mr-2 inline" />
                Tenant Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Housing.gov Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform streamlines the housing process with smart matching and comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Landlords</h3>
              <p className="text-gray-600 mb-6">
                List your properties, manage applications, and find qualified tenants with our comprehensive screening tools.
              </p>
              <Link to="/landlord" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Tenants</h3>
              <p className="text-gray-600 mb-6">
                Create your profile, browse available properties, and get matched with suitable housing options.
              </p>
              <Link to="/applicant" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Fair</h3>
              <p className="text-gray-600 mb-6">
                Our platform ensures fair housing practices and secure transactions for all users.
              </p>
              <a href="#features" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Housing.gov?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Matching Algorithm</h3>
                    <p className="text-gray-600">Our advanced matching system connects landlords with qualified tenants based on compatibility factors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Support</h3>
                    <p className="text-gray-600">Special accommodations for veterans, disabled individuals, and those with housing subsidies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Profiles</h3>
                    <p className="text-gray-600">Detailed tenant and property profiles ensure better matches and reduced vacancy rates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Waitlist Management</h3>
                    <p className="text-gray-600">Efficient waitlist system to manage applications and notify users of available units.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern apartment building" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of landlords and tenants who have found their perfect match through Housing.gov
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/landlord" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
              <Building className="w-5 h-5 mr-2 inline" />
              I'm a Landlord
            </Link>
            <Link to="/applicant" className="btn-primary bg-primary-500 hover:bg-primary-400 border-2 border-white">
              <Home className="w-5 h-5 mr-2 inline" />
              I'm Looking for Housing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage