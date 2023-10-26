import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LoginIcon from '@mui/icons-material/Login';
import AddColor from '../../components/AddColor/AddColor';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddBrand from '../../components/AddBrand/AddBrand';

const admin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [colorModal, setColorModal] = useState(false)
  const [brandModal, setBrandModal] = useState(false)

  const handleClose = () =>{
    setColorModal(false)
    setBrandModal(false)
  }

  return (
    <div className='bg-[white]'>
      {
        location.pathname != "/admin"?
        <div className="w-[250px] h-[100vh] fixed border-r-[1px] border-r-gray-300 flex flex-wrap justify-center content-start pt-[50px] text-[15px]">
          <Link to='/'>
            <button className='w-[85px] h-[40px] flex justify-center items-center mb-[50px] mr-[30px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <KeyboardBackspaceIcon/>
            </button>
          </Link>
          <Link to='/admin'>
            <button className='w-[100px] h-[40px] flex justify-evenly items-center mb-[50px]  bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <LoginIcon/>
              <p>Login</p>
            </button>
          </Link>
          <Link to='/admin/productList'>
            <button style={{backgroundColor:location.pathname.includes('productList')?"#ffbe1f":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[15px] mb-[8px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <p>Список продуктов</p>
            </button>
          </Link>
          <Link to='/admin/productEdit'>
            <button style={{backgroundColor:location.pathname.includes('productEdit')?"#ffbe1f":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[15px] mb-[8px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <p>Редактирование</p>
            </button>
          </Link>
          <Link to='/admin/newProduct'>
            <button style={{backgroundColor:location.pathname.includes('newProduct')?"#ffbe1f":""}} className='w-[215px] h-[40px] flex justify-start items-center pl-[15px] mb-[8px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <p>Новый продукт</p>
            </button>
          </Link>

          <button onClick={()=>{setColorModal(true)}} className='w-[85px] h-[40px] mt-[30px] mr-[30px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
            <ColorLensIcon/>
          </button>
          <button onClick={()=>{setBrandModal(true)}} className='w-[100px] h-[40px] flex justify-evenly items-center mt-[30px]  bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
            <AddOutlinedIcon/>
            <p>Бренд</p>
          </button>
        </div>:null
      }
      {
        colorModal?
        <AddColor close={handleClose}/>:null
      }
      {
        brandModal?
        <AddBrand close={handleClose}/>:null
      }
      <Outlet/>
    </div>
  )
}

export default admin
