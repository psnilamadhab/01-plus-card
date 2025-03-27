import { isSuperAdminAccess } from '@/access/isAdmin'
import { createdBy } from '@/utils/createdBy'
import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  access: {
    delete: isSuperAdminAccess,
    update: isSuperAdminAccess,
  },
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['phone'],
  },
  indexes: [],
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },
    {
      type: 'text',
      name: 'phone',
      required: true,
      index: true,
      validate: (value: any) => value.length === 10 || 'Phone number should be 10 digits',
    },
    {
      type: 'email',
      name: 'email',
    },
    {
      type: 'text',
      name: 'aadhar',
    },
    {
      type: 'text',
      name: 'bank account',
    },
    {
      type: 'textarea',
      name: 'address',
    },
    {
      type: 'number',
      name: 'pin code',
    },
    {
      type: 'relationship',
      name: 'dependants',
      relationTo: ['dependants'],
      hasMany: true,
    },
    {
      type: 'text',
      name: 'createdBy',
      required: true,
      defaultValue: createdBy,
    },
  ],
}
