import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Admin',
    plural: 'Admins',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt', 'updatedAt'],
    hideAPIURL: true,
  },
  auth: true,
  fields: [
    {
      type: 'text',
      name: 'name',
    },
  ],
}
