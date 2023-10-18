import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import { Home, Layout, Login, Product, Admin, Catalogy, ProductList, ProductEdit, NewProduct, Category, Karzina } from './router/Router'
import './App.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <Suspense fallback={<Loader/>}>
        <Layout/>
      </Suspense>,
      children: [
        {
          index: true,
          element: 
          <Suspense fallback={<Loader/>}>
            <Home/>
          </Suspense>
        },
        {
          path: '/product',
          element: 
          <Suspense fallback={<Loader/>}>
            <Product/>
          </Suspense>
        },
        {
          path: '/admin',
          element: 
          <Suspense fallback={<Loader/>}>
            <Admin/>
          </Suspense>,
          children: [
            {
              index: true,
              element:
              <Suspense fallback={<Loader/>}>
                <Login/>
              </Suspense>, 
            },
            {
              path: '/admin/productList',
              element:
              <Suspense fallback={<Loader/>}>
                <ProductList/>
              </Suspense>, 
            },
            {
              path: '/admin/productEdit',
              element:
              <Suspense fallback={<Loader/>}>
                <ProductEdit/>
              </Suspense>, 
            },
            {
              path: '/admin/newProduct',
              element:
              <Suspense fallback={<Loader/>}>
                <NewProduct/>
              </Suspense>, 
            }
          ]
        },
        {
          path: '/catalogy',
          element: 
          <Suspense fallback={<Loader/>}>
            <Catalogy/>
          </Suspense>
        },
        {
          path: '/category',
          element: 
          <Suspense fallback={<Loader/>}>
            <Category/>
          </Suspense>
        },
        {
          path: '/karzina',
          element: 
          <Suspense fallback={<Loader/>}>
            <Karzina/>
          </Suspense>
        },
      ]
    }
  ])  


  
  return <RouterProvider router={router}/>
}

export default App