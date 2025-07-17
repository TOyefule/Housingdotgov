import React from 'react'
import { Link } from 'react-router-dom'
import { Plus, MapPin, Users, DollarSign, Edit, Eye } from 'lucide-react'

const MyProperties = () => {
  const properties = [
    {
      id: 1,
      name: 'Sunset Apartments',
      address1: '123 Main Street',
      address2: 'Unit A',
      city: 'Fairfax',
      state: 'VA',
      zip: '22030',
      rent: 1200,
      bedrooms: 2,
      bathrooms: 1,
      hasAccessibleUnit: true,
      unitsAvailable: true,
      tenants: 1,
      maxTenants: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Oak Street Residences',
      address1: '456 Oak Street',
      address2: '',
      city: 'Fairfax',
      state: 'VA',
      zip: '22031',
      rent: 950,
      bedrooms: 1,
      bathrooms: 1,
      hasAccessibleUnit: false,
      unitsAvailable: false,
      tenants: 1,
      maxTenants: 1,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Pine Valley Commons',
      address1: '789 Pine Avenue',
      address2: 'Building B',
      city: 'Fairfax',
      state: 'VA',
      zip: '22032',
      rent: 1500,
      bedrooms: 3,
      bathrooms: 2,
      hasAccessibleUnit: true,
      unitsAvailable: true,
      tenants: 0,
      maxTenants: 1,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Properties</h1>
          <p className="text-gray-600">Manage your rental properties and track occupancy</p>
        </div>
        <Link to="/add-property" className="btn-primary">
          <Plus className="w-5 h-5 mr-2" />
          Add Property
        </Link>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="card">
            <img 
              src={property.image} 
              alt={property.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  {property.address1}
                  {property.address2 && `, ${property.address2}`}
                  <br />
                  {property.city}, {property.state} {property.zip}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="text-sm">${property.rent}/month</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {property.bedrooms} bed, {property.bathrooms} bath
                </span>
              </div>
            </div>

            {/* Property Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {property.hasAccessibleUnit && (
                <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                  Accessible Unit
                </span>
              )}
              {property.unitsAvailable ? (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Units Available
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                  Fully Occupied
                </span>
              )}
            </div>

            {/* Occupancy Status */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Occupancy</span>
                <span className="text-sm text-gray-600">
                  {property.tenants}/{property.maxTenants}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full" 
                  style={{ width: `${(property.tenants / property.maxTenants) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-4">
              <Link 
                to="/accepted-tenants" 
                className="flex-1 text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                View Tenants
              </Link>
              <Link 
                to="/waitlist" 
                className="flex-1 text-center py-2 px-4 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors text-sm font-medium"
              >
                Waitlist
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {properties.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No properties yet</h3>
          <p className="text-gray-600 mb-6">Get started by adding your first rental property</p>
          <Link to="/add-property" className="btn-primary">
            Add Your First Property
          </Link>
        </div>
      )}
    </div>
  )
}

export default MyProperties