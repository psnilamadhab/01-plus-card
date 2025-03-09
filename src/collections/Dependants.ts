import type { CollectionConfig } from 'payload'

export const Dependants: CollectionConfig = {
  slug: 'dependants',
  admin: {
    useAsTitle: 'name',
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
  ],
}
