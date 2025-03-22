import { isSuperAdmin, isSuperAdminAccess } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'Users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  access: {
    read: isSuperAdminAccess,
    create: isSuperAdminAccess,
    delete: isSuperAdminAccess,
    update: isSuperAdminAccess,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt', 'updatedAt'],
  },
  auth: true,
  fields: [
    {
      type: 'text',
      name: 'name',
    },
    {
      name: 'role',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      options: [
        {
          label: 'editor',
          value: 'editor',
        },
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'user',
          value: 'user',
        },
      ],
    },
  ],
}
