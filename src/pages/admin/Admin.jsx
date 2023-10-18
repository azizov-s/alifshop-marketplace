import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const admin = () => {
  const location = useLocation()

  return (
    <div className='bg-[#efefef]'>
      <div className="w-[250px] h-[100vh] fixed bg-gray-300 flex flex-wrap justify-center content-start pt-[50px] text-gray-500 text-[15px] font-mono">
        <Link to='/'>
          <button className='w-[215px] h-[40px] flex justify-start items-center pl-[20px] mb-[30px] hover:bg-gray-300 rounded-[5px]'>
            <p>Back to Main</p>
          </button>
        </Link>
        <Link to='/admin'>
          <button style={{backgroundColor:location.pathname.length == 6?"#c0c0c0":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[20px] mb-[10px] hover:bg-[#c0c0c0] rounded-[5px]'>
            <p>Login</p>
          </button>
        </Link>
        <Link to='/admin/productList'>
          <button style={{backgroundColor:location.pathname.includes('productList')?"#c0c0c0":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[20px] mb-[10px] hover:bg-[#c0c0c0] rounded-[5px]'>
            <p>Product List</p>
          </button>
        </Link>
        <Link to='/admin/productEdit'>
          <button style={{backgroundColor:location.pathname.includes('productEdit')?"#c0c0c0":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[20px] mb-[10px] hover:bg-[#c0c0c0] rounded-[5px]'>
            <p>Product Edit</p>
          </button>
        </Link>
        <Link to='/admin/newProduct'>
          <button style={{backgroundColor:location.pathname.includes('newProduct')?"#c0c0c0":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[20px] mb-[10px] hover:bg-[#c0c0c0] rounded-[5px]'>
            <p>New product</p>
          </button>
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default admin
