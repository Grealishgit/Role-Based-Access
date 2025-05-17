import ProtectedRoutes from '@/components/ProtectedRoutes';
import { useAuth } from '@/context/AuthContext';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/dashboard')({
  component: () => (
    <ProtectedRoutes allowGuest={true}>
      <RouteComponent />
    </ProtectedRoutes>
  )
});

function RouteComponent() {
  const { user } = useAuth();

  // if (!user) {
  //   return (
  //     <div className='flex flex-col items-center  bg-gray-200 justify-center min-h-screen'>
  //       <p className="text-center  text-red-500 border cursor-pointer hover:bg-orange-500 hover:text-white rounded-md p-1.5 border-gray-800 font-semibold">User not logged in</p>;
  //     </div>

  //   )

  // }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="items-center">
        {user ? (
          <>
            <h2 className="text-2xl font-bold">Good Evening, {user?.username}!</h2>
            <p className="mt-2 text-center text-gray-600">You are logged in as <span className='text-green-500'>{user?.role}</span> </p>
            <p className="mt-2 text-center text-gray-600">Welcome to your dashboard.</p>
          </>
        ) : (
          <>
            <p className="text-center text-lg font-semibold text-red-500">Welcome Guest</p>
            <p className='font-semibold'>No role Assigned to you</p>
          </>

        )}

      </div>
    </div>
  );
}
