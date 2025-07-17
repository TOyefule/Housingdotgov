import React, { useState } from 'react'
import { User, Save, Upload } from 'lucide-react'

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1990-01-15',
    currentCity: 'Fairfax',
    currentState: 'VA',
    currentZip: '22030',
    currentCountry: 'United States',
    moveInDate: '2024-03-01',
    maxRent: '1200',
    preferredBedrooms: '2',
    preferredBathrooms: '1',
    veteranStatus: false,
    hcvRecipient: true,
    vashRecipient: false,
    otherSubsidy: false,
    differentlyAbled: false,
    hearingImpaired: false,
    deaf: false,
    visuallyImpaired: false,
    blind: false,
    physicallyImpaired: false,
    wheelchair: false,
    walker: false,
    intellectuallyImpaired: false,
    hasPets: false,
    petType: '',
    employmentStatus: 'employed',
    monthlyIncome: '3600',
    additionalInfo: ''
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
    console.log('Profile data:', formData)
    // Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Complete your profile to get better housing matches</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Current Address */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="currentCity" className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                id="currentCity"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="currentState" className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <select
                id="currentState"
                name="currentState"
                value={formData.currentState}
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
              <label htmlFor="currentZip" className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                id="currentZip"
                name="currentZip"
                value={formData.currentZip}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="currentCountry" className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                type="text"
                id="currentCountry"
                name="currentCountry"
                value={formData.currentCountry}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Housing Preferences */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Housing Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700 mb-2">
                Desired Move-in Date
              </label>
              <input
                type="date"
                id="moveInDate"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="maxRent" className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Monthly Rent
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="maxRent"
                  name="maxRent"
                  value={formData.maxRent}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferredBedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Bedrooms
              </label>
              <select
                id="preferredBedrooms"
                name="preferredBedrooms"
                value={formData.preferredBedrooms}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">No preference</option>
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredBathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Bathrooms
              </label>
              <select
                id="preferredBathrooms"
                name="preferredBathrooms"
                value={formData.preferredBathrooms}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">No preference</option>
                <option value="1">1 Bathroom</option>
                <option value="1.5">1.5 Bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="2.5">2.5 Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
              </select>
            </div>
          </div>
        </div>

        {/* Financial Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-2">
                Employment Status
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="employed">Employed</option>
                <option value="self-employed">Self-employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>

            <div>
              <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Income
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="monthlyIncome"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Special Circumstances</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Veteran & Housing Assistance</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="veteranStatus"
                    name="veteranStatus"
                    checked={formData.veteranStatus}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="veteranStatus" className="ml-3 text-sm text-gray-700">
                    Veteran status
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hcvRecipient"
                    name="hcvRecipient"
                    checked={formData.hcvRecipient}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="hcvRecipient" className="ml-3 text-sm text-gray-700">
                    Housing Choice Voucher (Section 8) recipient
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vashRecipient"
                    name="vashRecipient"
                    checked={formData.vashRecipient}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="vashRecipient" className="ml-3 text-sm text-gray-700">
                    VASH (Veterans Affairs Supportive Housing) recipient
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="otherSubsidy"
                    name="otherSubsidy"
                    checked={formData.otherSubsidy}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="otherSubsidy" className="ml-3 text-sm text-gray-700">
                    Other housing subsidy
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Accessibility Needs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="differentlyAbled"
                    name="differentlyAbled"
                    checked={formData.differentlyAbled}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="differentlyAbled" className="ml-3 text-sm text-gray-700">
                    Differently abled
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hearingImpaired"
                    name="hearingImpaired"
                    checked={formData.hearingImpaired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="hearingImpaired" className="ml-3 text-sm text-gray-700">
                    Hearing impaired
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="deaf"
                    name="deaf"
                    checked={formData.deaf}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="deaf" className="ml-3 text-sm text-gray-700">
                    Deaf
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="visuallyImpaired"
                    name="visuallyImpaired"
                    checked={formData.visuallyImpaired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="visuallyImpaired" className="ml-3 text-sm text-gray-700">
                    Visually impaired
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="blind"
                    name="blind"
                    checked={formData.blind}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="blind" className="ml-3 text-sm text-gray-700">
                    Blind
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="physicallyImpaired"
                    name="physicallyImpaired"
                    checked={formData.physicallyImpaired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="physicallyImpaired" className="ml-3 text-sm text-gray-700">
                    Physically impaired
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="wheelchair"
                    name="wheelchair"
                    checked={formData.wheelchair}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="wheelchair" className="ml-3 text-sm text-gray-700">
                    Wheelchair user
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="walker"
                    name="walker"
                    checked={formData.walker}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="walker" className="ml-3 text-sm text-gray-700">
                    Walker user
                  </label>
                </div>

                <div className="flex items-center md:col-span-2">
                  <input
                    type="checkbox"
                    id="intellectuallyImpaired"
                    name="intellectuallyImpaired"
                    checked={formData.intellectuallyImpaired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="intellectuallyImpaired" className="ml-3 text-sm text-gray-700">
                    Intellectually impaired
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Documents</h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">Upload your completed housing application</p>
              <p className="text-sm text-gray-500 mb-4">PDF, DOC, or DOCX up to 10MB</p>
              <button type="button" className="btn-secondary">
                Choose File
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Information</h2>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Any additional information that might help with housing placement..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            <Save className="w-5 h-5 mr-2" />
            Save Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default MyProfile