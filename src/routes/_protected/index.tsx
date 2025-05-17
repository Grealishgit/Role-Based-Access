import ProtectedRoutes from '@/components/ProtectedRoutes'
import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/')({
  component: () => {
    return (
      <ProtectedRoutes allowGuest={true}>
        <Navigate to="/dashboard" />
      </ProtectedRoutes>
    )
  },
})


