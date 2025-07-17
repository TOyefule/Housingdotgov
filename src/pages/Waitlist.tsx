import React from 'react'
import { Clock, User, Mail, Phone, MapPin, CheckCircle, XCircle, Eye } from 'lucide-react'

const Waitlist = () => {
  const waitlistEntries = [
    {
      id: 1,
      applicant: {
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@email.com',
        phone: '(555) 234-5678'
      },
      property: 'Sunset Apartments',
      unit: 'Unit A',
      applicationDate: '2024-01-20',
      status: 'pending_review',
      priority: 'high',
      specialNeeds: ['Wheelchair accessible'],
      voucher: true,
      monthlyIncome: 3200,
      preferredMoveIn: '2024-03-01'
    },
    {
      id: 2,
      applicant: {
        firstName: 'Lisa',
        lastName: 'Thompson',
        email: 'lisa.thompson@email.com',
        phone: '(555) 345-6789'
      },
      property: 'Oak Street Residences',
      unit: 'Unit 8B',
      applicationDate: '2024-01-18',
      status: 'under_review',
      priority: 'medium',
      specialNeeds: [],
      voucher: false,
      monthlyIncome: 2800,
      preferredMoveIn: '2024-02-15'
    },
    {
      id: 3,
      applicant: {
        firstName: 'Robert',
        lastName: 'Garcia',
        email: 'robert.garcia@email.com',
        phone: '(555) 456-7890'
      },
      property: 'Pine Valley Commons',
      unit: 'Unit 5C',
      applicationDate: '2024-01-15',
      status: 'approved',
      priority: 'high',
      specialNeeds: ['Service animal'],
      voucher: true,
      monthlyIncome: 4200,
      preferredMoveIn: '2024-04-01'
    },
    {
      id: 4,
      applicant: {
        firstName: 'Maria',
        lastName: 'Lopez',
        email: 'maria.lopez@email.com',
        phone: '(555) 567-8901'
      },
      property: 'Maple Court Apartments',
      unit: 'Unit 2A',
      applicationDate: '2024-01-12',
      status: 'waitlisted',
      priority: 'low',
      specialNeeds: [],
      voucher: true,
      monthlyIncome: 2400,
      preferredMoveIn: '2024-05-01'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'under_review':
        return 'bg-blue-100 text-blue-800'
      case 'pending_review':
        return 'bg-yellow-100 text-yellow-800'
      case 'waitlisted':
        return 'bg-purple-100 text-purple-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved'
      case 'under_review':
        return 'Under Review'
      case 'pending_review':
        return 'Pending Review'
      case 'waitlisted':
        return 'Waitlisted'
      case 'rejected':
        return 'Rejected'
      default:
        return status
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600'
      case 'medium':
        return 'text-yellow-600'
      case 'low':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  const handleApprove = (id: number) => {
    console.log('Approving application:', id)
    // Handle approval logic
  }

  const handleReject = (id: number) => {
    console.log('Rejecting application:', id)
    // Handle rejection logic
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Waitlist & Applications</h1>
        <p className="text-gray-600">Review and manage pending housing applications</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">15</p>
            <p className="text-sm text-gray-600">Total Applications</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">5</p>
            <p className="text-sm text-gray-600">Pending Review</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-600">Under Review</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">4</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">3</p>
            <p className="text-sm text-gray-600">Waitlisted</p>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6">
        {waitlistEntries.map((entry) => (
          <div key={entry.id} className="card">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {entry.applicant.firstName} {entry.applicant.lastName}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                          {getStatusText(entry.status)}
                        </span>
                        <span className={`text-xs font-medium ${getPriorityColor(entry.priority)}`}>
                          {entry.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{entry.applicant.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{entry.applicant.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{entry.property} - {entry.unit}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Applied: {new Date(entry.applicationDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">Income: ${entry.monthlyIncome.toLocaleString()}/month</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">Move-in: {new Date(entry.preferredMoveIn).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Special Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.voucher && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      Housing Voucher
                    </span>
                  )}
                  {entry.specialNeeds.map((need, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4 lg:mt-0">
                <button className="btn-secondary text-sm py-2 px-4">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </button>
                {entry.status === 'pending_review' && (
                  <>
                    <button 
                      onClick={() => handleApprove(entry.id)}
                      className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </button>
                    <button 
                      onClick={() => handleReject(entry.id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg transition-colors"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </button>
                  </>
                )}
                {entry.status === 'under_review' && (
                  <button className="btn-primary text-sm py-2 px-4">
                    Continue Review
                  </button>
                )}
                {entry.status === 'approved' && (
                  <button className="btn-primary text-sm py-2 px-4">
                    Send Lease
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {waitlistEntries.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
          <p className="text-gray-600 mb-6">Housing applications will appear here when tenants apply to your properties</p>
        </div>
      )}
    </div>
  )
}

export default Waitlist