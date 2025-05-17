import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/products"!</div>
}
