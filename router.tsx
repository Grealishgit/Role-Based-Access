import { createRouter } from '@tanstack/react-router'
import { routeTree } from './src/routeTree.gen'

//create a new router intance
const router = createRouter({
    routeTree
})

//Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface RegisterRouter {
        router: typeof router
    }
}

export default router