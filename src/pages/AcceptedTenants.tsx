import React from 'react'
import { User, Mail, Phone, Calendar, MapPin, FileText } from 'lucide-react'

const AcceptedTenants = () => {
  const tenants = [
    {
      id: 1,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      property: 'Sunset Apartments',
      unit: 'Unit A',
      leaseStart: '2024-01-15',
      leaseEnd: '2024-12-31',
      rent: 1200,
      status: 'active',
      moveInDate: '2024-01-15',
      specialNeeds: ['Wheelchair accessible'],
      voucher: true
    },
    {
      id: 2,
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 987-6543',
      property: 'Oak Street Residences',
      unit: 'Unit 12B',
      leaseStart: '2023-09-01',
      leaseEnd: '2024-08-31',
      rent: 950,
      status: 'active',
      moveInDate: '2023-09-01',
      specialNeeds: [],
      voucher: false
    },
    {
      id: 3,
      firstName: 'Emily',
      lastName: 'Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 456-7890',
      property: 'Pine Valley Commons',
      unit: 'Unit 3C',
      leaseStart: '2024-03-01',
      leaseEnd: '2025-02-28',
      rent: 1500,
      status: 'pending_move_in',
      moveInDate: '2024-03-01',
      specialNeeds: ['Service animal'],
      voucher: true
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'pending_move_in':
        return 'bg-yellow-100 text-yellow-800'
      case 'lease_ending':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active Lease'
      case 'pending_move_in':
        return 'Pending Move-in'
      case 'lease_ending':
        return 'Lease Ending Soon'
      default:
        return status
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Accepted Tenants</h1>
        <p className="text-gray-600">Manage your current and approved tenants</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">28</p>
            <p className="text-sm text-gray-600">Total Tenants</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">25</p>
            <p className="text-sm text-gray-600">Active Leases</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">2</p>
            <p className="text-sm text-gray-600">Pending Move-in</p>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">1</p>
            <p className="text-sm text-gray-600">Lease Ending Soon</p>
          </div>
        </div>
      </div>

      {/* Tenants List */}
      <div className="space-y-6">
        {tenants.map((tenant) => (
          <div key={tenant.id} className="card">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tenant.firstName} {tenant.lastName}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tenant.status)}`}>
                        {getStatusText(tenant.status)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tenant.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tenant.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tenant.property} - {tenant.unit}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Lease: {new Date(tenant.leaseStart).toLocaleDateString()} - {new Date(tenant.leaseEnd).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">Rent: ${tenant.rent}/month</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">Move-in: {new Date(tenant.moveInDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Special Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tenant.voucher && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      Housing Voucher
                    </span>
                  )}
                  {tenant.specialNeeds.map((need, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4 lg:mt-0">
                <button className="btn-secondary text-sm py-2 px-4">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </button>
                <button className="btn-secondary text-sm py-2 px-4">
                  <FileText className="w-4 h-4 mr-1" />
                  View Lease
                </button>
                <button className="btn-primary text-sm py-2 px-4">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {tenants.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tenants yet</h3>
          <p className="text-gray-600 mb-6">Accepted tenants will appear here once applications are approved</p>
        </div>
      )}
    </div>
  )
}

export default AcceptedTenants