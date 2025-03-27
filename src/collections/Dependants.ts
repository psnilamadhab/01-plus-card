import { isSuperAdminAccess } from '@/access/isAdmin'
import { createdBy } from '@/utils/createdBy'
import type { CollectionConfig } from 'payload'

export const Dependants: CollectionConfig = {
  slug: 'dependants',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    delete: isSuperAdminAccess,
    update: isSuperAdminAccess,
  },

  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },
    {
      type: 'text',
      name: 'aadhar',
    },
    {
      type: 'text',
      name: 'createdBy',
      required: true,
      defaultValue: createdBy,
    },
  ],
}
