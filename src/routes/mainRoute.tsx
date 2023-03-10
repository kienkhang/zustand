import MainLayout from '@/layouts/MainLayout.js'
import CounterPage from '@/pages/CounterPage'
import HomePage from '@/pages/HomePage.js'
import TodoPage from '@/pages/TodoPage'
import { RouteObject } from 'react-router-dom'

const route: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: '/counter',
      element: <CounterPage />,
    },
    {
      path: '/todo',
      element: <TodoPage />,
    },
  ],
  element: <MainLayout />,
}

const install = (routes: RouteObject[]) => {
  routes.push(route)
}

export default install
