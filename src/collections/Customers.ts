import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
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
  ],
}
