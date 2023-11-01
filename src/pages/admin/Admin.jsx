import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LoginIcon from '@mui/icons-material/Login';
import AddColor from '../../components/AddColor/AddColor';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddBrand from '../../components/AddBrand/AddBrand';
import AddUser from '../../components/AddUser/AddUser';
import img from '../../assets/iconAlif.png'
import { getToken } from '../../utils/token';

const admin = () => {
  const aboutMe = getToken(localStorage.getItem('access_token'))
  const navigate = useNavigate()
  const location = useLocation()
  const [colorModal, setColorModal] = useState(false)
  const [brandModal, setBrandModal] = useState(false)
  const [userModal, setUserModal] = useState(false)


  const handleClose = () =>{
    setColorModal(false)
    setBrandModal(false)
    setUserModal(false)
  }

  return (
    <div className='bg-[white]'>
      {
        location.pathname != "/admin"?
        <div className="w-[250px] h-[100vh] fixed border-r-[1px] border-r-gray-300 flex flex-wrap justify-center content-start pb-[50px] text-[15px]">
          <Link to='/'>
            <button className='w-[215px] h-[40px] flex justify-start pl-[5px] items-center mb-[20px] mt-[10px] hover:text-gray-500 rounded-[5px]'>
              {/* <KeyboardBackspaceIcon/>  */}
              <p className=''>Выйти</p>
            </button>
          </Link>
          {/* <Link to='/admin'>
            <button className='w-[100px] h-[40px] flex justify-end items-center mb-[20px] mt-[10px] hover:text-gray-500 rounded-[5px]'>
              <LoginIcon/>
              <p className='ml-[10px]'>Логин</p>
            </button>
          </Link> */}
          <div className="w-[215px] mb-[30px] flex justify-start items-center">
            <div className="w-[60px] h-[60px] rounded-[50px] flex justify-center items-center bg-gray-400">
              {
                aboutMe.sub?
                <img src={`${import.meta.env.VITE_APP_FILES_URL}${aboutMe?.sub}`} alt="" />:
                <img src={img} alt="" />
              }
            </div>
            <div className="w ml-[13px] text-[15px] text-[gray]">
              <p className='text-[20px] text-[black] font-bold'><span className='font-bold'></span> {aboutMe?.name}</p>
              {/* <p className=''>{aboutMe?.email}</p> */}
              <p className=''><span className='font-bold'>Status: </span>{aboutMe?.[`http://schemas.microsoft.com/ws/2008/06/identity/claims/role`]}</p>
            </div>
          </div>

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

          <button onClick={()=>{setColorModal(true)}} className='w-[215px] h-[40px] mt-[30px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
            <p>Цвет</p>
          </button>
          <button onClick={()=>{setBrandModal(true)}} className='w-[215px] h-[40px] flex justify-evenly items-center mt-[8px]  bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
            {/* <AddOutlinedIcon/> */}
            <p>Бренд</p>
          </button>
          <button onClick={()=>(setUserModal(true))} className='w-[215px] h-[40px] flex justify-start items-center pl-[15px] mt-[60px] mb-[8px] bg-gray-100 hover:bg-gray-300 rounded-[5px]'>
              <p>Новый пользователь</p>
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
      {
        userModal?
        <AddUser close={handleClose}/>:null
      }
      <Outlet/>
    </div>
  )
}

export default admin
