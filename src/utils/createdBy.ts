import type { PayloadRequest } from 'payload'

export const createdBy = ({ req }: { req: PayloadRequest }) => {
  return req.user?.email
}
