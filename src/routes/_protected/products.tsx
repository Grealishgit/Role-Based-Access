import React, { useState } from 'react';
import { deleteProduct, fetchProducts } from '@/api'
import { useAuth } from '@/context/AuthContext'
import { PERMISSIONS } from '@/utils/roles'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/products')({
  component: RouteComponent,
  loader: async () => {
    return await fetchProducts();
  }
})

function RouteComponent() {
  const loaderProducts = Route.useLoaderData();
  const [products, setProducts] = useState(loaderProducts);
  const { hasPermission } = useAuth();
  const navigate = useNavigate();
  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasPermission(PERMISSIONS.DELETE_PRODUCT)) {
      alert('You do not have permission to delete products');
      navigate({ to: '/unauthorized' })
      return;
    }
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      setProducts((prev: any) => prev.filter((product: any) => product.id !== id));
      alert(`Product with id ${id} deleted`);
    }
  }

  return (
    <div className="flex flex-col md:mt-1 mt-5 items-center justify-center min-h-screen bg-gray-100">
      <div className='pt-10 items-center'>
        <h2 className="text-2xl text-center font-bold">Products</h2>
        <p className="mt-2 text-center text-gray-600">You can view the products here.</p>
      </div>
      <ul className='grid mt-5 mx-4 md:grid-cols-3 grid-cols-1'>
        {products && products.map((product: any) => (
          <li key={product.id} className="border rounded-lg items-center  p-2 m-2">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className='text-center'>{product.description}</p>
            <p className="text-green-500">Ksh.{product.price}</p>
            <div className='flex flex-row gap-2 items-center justify-center'>
              {hasPermission(PERMISSIONS.EDIT_PRODUCT) && <button type='button' onClick={() => alert(`Edit: ${product.name}`)}
                className='border hover:bg-green-300 py-0.5 rounded-md cursor-pointer px-4'>Edit</button>}
              {hasPermission(PERMISSIONS.DELETE_PRODUCT) && <button type='button' onClick={(e) => handleDelete(product.id, e)}
                className='border hover:bg-red-400 py-0.5 rounded-md cursor-pointer px-4'>Delete</button>}

            </div>

          </li>

        ))}
        {!products && <p>No products available</p>}
        {products && products.length === 0 && <p>No products available</p>}
      </ul>
    </div >
  )
}
