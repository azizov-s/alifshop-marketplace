import React, { useState } from 'react'
import './Login.css'
import {axiosRequest} from '../../utils/axiosRequest'
import { useNavigate } from 'react-router-dom'
import { saveToken } from '../../utils/token'
import logo from '../../assets/iconAlif.png'
import '../../App.css'

import img from '../../assets/moun.avif'

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Login = () => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)

  async function getLogin(){
    if(localStorage.getItem('access_token')){
      navigate("/admin/productList")
    }else{
      try {
        let formData = new FormData()
        formData.append("UserName", admin)
        formData.append("Password", password)
        const {data} = await axiosRequest.post(`Account/login`, formData)
        saveToken(data.data)
        navigate('/admin/productList')
      } catch (error) {
        
      }
    }
  }

  return (
    <div className='h-[100vh]'>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div>
          <div className="w-[360px] h-[450px] bg-[white] rounded-[5px]">
            <div className='w-[100%] h-[100%] flex flex-wrap justify-center content-evenly'>
              <img src={logo} alt="" />
              <p className='w-[300px] text-[25px] font-bold leading-[35px] text-center'>Aдмин Панель</p>
              <input value={admin} onChange={(e)=>setAdmin(e.target.value)} type="text" className='w-[300px] h-[40px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Логин'/>
              <div className="w-[300px] flex justify-start items-center">
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type={!show?"password":"text"} className='w-[300px] h-[40px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Пароль'/>
              <button style={{color:!show?"#737373":"#ffbe1f"}} onClick={()=>setShow(!show)} className='w-[30px] h-[30px] ml-[-40px]'>
                <RemoveRedEyeOutlinedIcon/>
              </button>
              </div>

              <button onClick={()=>navigate('/')} className='w-[120px] h-[40px] mr-[60px] rounded-[5px] bg-gray-300 hover:bg-gray-400 text-[15px]'><p>Отмена</p></button>
              <button onClick={()=>getLogin()} className='w-[120px]  h-[40px] rounded-[5px] backgroundX text-[15px]'><p>Войти</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login