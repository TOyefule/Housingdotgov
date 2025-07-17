import React from 'react'
import { MapPin, DollarSign, Users, Heart, ExternalLink, Filter } from 'lucide-react'

const MyMatches = () => {
  const matches = [
    {
      id: 1,
      name: 'Sunset Apartments',
      address: '123 Main Street, Fairfax, VA 22030',
      rent: 1200,
      bedrooms: 2,
      bathrooms: 1,
      matchScore: 95,
      hasAccessibleUnit: true,
      acceptsVouchers: true,
      petFriendly: false,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Modern apartment complex with great amenities and accessible units.',
      amenities: ['Parking', 'Laundry', 'Accessible', 'Near Transit']
    },
    {
      id: 2,
      name: 'Oak Street Residences',
      address: '456 Oak Street, Fairfax, VA 22031',
      rent: 950,
      bedrooms: 1,
      bathrooms: 1,
      matchScore: 88,
      hasAccessibleUnit: false,
      acceptsVouchers: true,
      petFriendly: true,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cozy apartments in a quiet neighborhood with pet-friendly policies.',
      amenities: ['Pet-friendly', 'Garden', 'Parking', 'Storage']
    },
    {
      id: 3,
      name: 'Pine Valley Commons',
      address: '789 Pine Avenue, Fairfax, VA 22032',
      rent: 1500,
      bedrooms: 3,
      bathrooms: 2,
      matchScore: 82,
      hasAccessibleUnit: true,
      acceptsVouchers: false,
      petFriendly: true,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spacious family apartments with modern amenities and great location.',
      amenities: ['Pool', 'Gym', 'Playground', 'Accessible']
    },
    {
      id: 4,
      name: 'Maple Court Apartments',
      address: '321 Maple Court, Fairfax, VA 22033',
      rent: 1100,
      bedrooms: 2,
      bathrooms: 1.5,
      matchScore: 79,
      hasAccessibleUnit: false,
      acceptsVouchers: true,
      petFriendly: false,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Affordable housing with excellent community features.',
      amenities: ['Community Center', 'Parking', 'Near Schools', 'Laundry']
    }
  ]

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 80) return 'text-yellow-600 bg-yellow-100'
    return 'text-orange-600 bg-orange-100'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Matches</h1>
          <p className="text-gray-600">Properties matched to your profile and preferences</p>
        </div>
        <button className="btn-secondary">
          <Filter className="w-5 h-5 mr-2" />
          Filter Results
        </button>
      </div>

      {/* Match Summary */}
      <div className="card mb-8 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              {matches.length} Properties Match Your Profile
            </h3>
            <p className="text-primary-700">
              Based on your preferences for 2-bedroom units under $1,200/month with voucher acceptance
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-600 mb-1">Average Match Score</p>
            <p className="text-2xl font-bold text-primary-900">86%</p>
          </div>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="space-y-6">
        {matches.map((match) => (
          <div key={match.id} className="card">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Property Image */}
              <div className="lg:w-1/3">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-64 lg:h-48 object-cover rounded-lg"
                />
              </div>

              {/* Property Details */}
              <div className="lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{match.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{match.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchScoreColor(match.matchScore)}`}>
                      {match.matchScore}% Match
                    </span>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{match.description}</p>

                {/* Property Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">${match.rent}/month</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{match.bedrooms} bed, {match.bathrooms} bath</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {match.amenities.map((amenity, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {amenity}
                    </span>
                  ))}
                  {match.acceptsVouchers && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      Accepts Vouchers
                    </span>
                  )}
                  {match.hasAccessibleUnit && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Accessible Unit
                    </span>
                  )}
                  {match.petFriendly && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      Pet Friendly
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="btn-primary flex-1">
                    Apply Now
                  </button>
                  <button className="btn-secondary flex-1">
                    Contact Landlord
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="btn-secondary">
          Load More Properties
        </button>
      </div>
    </div>
  )
}

export default MyMatches