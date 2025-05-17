import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/AuthContext'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <AuthProvider>
        <Navbar />
        <hr className='border-gray-300' />
        <Outlet />
        <TanStackRouterDevtools />
      </AuthProvider>
    </React.Fragment>
  ),
})
