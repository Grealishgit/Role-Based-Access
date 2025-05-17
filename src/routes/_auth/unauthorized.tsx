import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className='flex flex-col items-center  bg-gray-200 justify-center min-h-screen'>
        <p className="text-center  text-red-500 text-3xl font-semibold">Unauthorized</p>;
        <p className="text-center  text-black  font-semibold">You do not have permission to access this page</p>;
        <div className='flex flex-row items-center gap-3  mt-4'>
          <Link className='border border-gray-800 rounded-md p-1.5  font-semibold hover:bg-orange-400' to='/dashboard'> Dashboard</Link>
          <Link className='border border-gray-800 rounded-md p-1.5 px-6 font-semibold hover:bg-emerald-400 ' to='/login'>Login</Link>
        </div>

      </div>

    </div>
  )
}
