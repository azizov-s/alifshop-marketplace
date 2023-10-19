import React, { useState } from 'react'
import './Login.css'
import {axiosRequest} from '../../utils/axiosRequest'
import { useNavigate } from 'react-router-dom'
import { saveToken } from '../../utils/token'

const Login = () => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState("")
  const [password, setPassword] = useState("")

  // const checkLogin = async (event)=>{
  //   event.preventDefault()
  //   try {
  //     let obj = {
  //       admin: admin,
  //       password: password,
  //     }
  //     let {data} = await axiosRequest.post(`Account/login?UserName=${admin}&Password=${password}`, obj)
  //     saveToken(data.data)
  //   } catch (error) {
      
  //   }
  // } 
  async function getLogin(){
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

  return (
    <div className='ml-[250px] h-[100vh] font-mono text-gray-500'>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
         <div className="w-[360px] h-[350px] bg-gray-200 rounded-[5px]">
          <div className='w-[100%] h-[100%] flex flex-wrap justify-center content-evenly'>
            <input value={admin} onChange={(e)=>setAdmin(e.target.value)} type="text" className='w-[300px] h-[40px] rounded-[5px] outline-none px-[15px]' placeholder='Admin'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='w-[300px] h-[40px] rounded-[5px] outline-none px-[15px]' placeholder='Password'/>
            <button onClick={()=>getLogin()} className='w-[120px] mr-[60px] h-[40px] hover:bg-gray-500 bg-[#c0c0c0] hover:text-[white] rounded-[5px]'><p>Login</p></button>
            <button onClick={()=>navigate('/')} className='w-[120px] h-[40px] hover:bg-gray-500 bg-[#c0c0c0] hover:text-[white] rounded-[5px]'><p>Cancel</p></button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Login