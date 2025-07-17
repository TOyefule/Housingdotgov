import React, { useState } from 'react'
import { ArrowLeft, Upload, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddProperty = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    address1: '',
    address2: '',
    city: '',
    state: 'VA',
    zip: '',
    email: '',
    phone: '',
    yearBuilt: '',
    website: '',
    rent: '',
    bedrooms: '',
    bathrooms: '',
    nonprofit: false,
    hasAccessibleUnit: false,
    acceptsVouchers: false,
    acceptsVASH: false,
    petFriendly: false,
    description: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Property data:', formData)
    // Redirect to properties page or show success message
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link to="/my-properties" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Property</h1>
        <p className="text-gray-600">List your rental property to connect with qualified tenants</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-2">
                Property Name *
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., Sunset Apartments"
              />
            </div>

            <div>
              <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
                Year Built
              </label>
              <input
                type="text"
                id="yearBuilt"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., 2020"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Property Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Describe your property, amenities, and neighborhood..."
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="123 Main Street"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-2">
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Unit A, Building 2, etc."
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Fairfax"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="VA">Virginia</option>
                <option value="MD">Maryland</option>
                <option value="DC">Washington DC</option>
              </select>
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="22030"
              />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Rent *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="rent"
                  name="rent"
                  value={formData.rent}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="1200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                Bedrooms *
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select</option>
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                Bathrooms *
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select</option>
                <option value="1">1 Bathroom</option>
                <option value="1.5">1.5 Bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="2.5">2.5 Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="contact@property.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website (Optional)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="https://www.yourproperty.com"
              />
            </div>
          </div>
        </div>

        {/* Property Features */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Property Features</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasAccessibleUnit"
                name="hasAccessibleUnit"
                checked={formData.hasAccessibleUnit}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="hasAccessibleUnit" className="ml-3 text-sm text-gray-700">
                Has accessible units (ADA compliant)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptsVouchers"
                name="acceptsVouchers"
                checked={formData.acceptsVouchers}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="acceptsVouchers" className="ml-3 text-sm text-gray-700">
                Accepts Housing Choice Vouchers (Section 8)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptsVASH"
                name="acceptsVASH"
                checked={formData.acceptsVASH}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="acceptsVASH" className="ml-3 text-sm text-gray-700">
                Accepts VASH (Veterans Affairs Supportive Housing)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="petFriendly"
                name="petFriendly"
                checked={formData.petFriendly}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="petFriendly" className="ml-3 text-sm text-gray-700">
                Pet-friendly
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="nonprofit"
                name="nonprofit"
                checked={formData.nonprofit}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="nonprofit" className="ml-3 text-sm text-gray-700">
                Nonprofit organization
              </label>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Property Photos</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Upload property photos</p>
            <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB each</p>
            <button
              type="button"
              className="btn-secondary"
            >
              Choose Files
            </button>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          <Link to="/my-properties" className="btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn-primary">
            <Plus className="w-5 h-5 mr-2" />
            Add Property
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProperty