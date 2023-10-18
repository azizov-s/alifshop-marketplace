import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState("")
  const [password, setPassword] = useState("")

  const checkLogin = async (event)=>{
    event.preventDefault()
    try {
      let obj = {
        admin: admin,
        password: password,
      }
    } catch (error) {
      
    }
  } 

  return (
    <div className='ml-[250px] h-[100vh] font-mono text-gray-500'>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
         <div className="w-[360px] h-[350px] bg-gray-200 rounded-[5px]">
          <form onSubmit={checkLogin} action="" className='w-[100%] h-[100%] flex flex-wrap justify-center content-evenly'>
            <input type="text" className='w-[300px] h-[40px] rounded-[5px] outline-none px-[15px]' placeholder='Admin'/>
            <input type="password" className='w-[300px] h-[40px] rounded-[5px] outline-none px-[15px]' placeholder='Password'/>
            <button type='submit' className='w-[120px] mr-[60px] h-[40px] hover:bg-gray-500 bg-[#c0c0c0] hover:text-[white] rounded-[5px]'><p>Login</p></button>
            <button onClick={()=>navigate('/')} className='w-[120px] h-[40px] hover:bg-gray-500 bg-[#c0c0c0] hover:text-[white] rounded-[5px]'><p>Cancel</p></button>
          </form>
         </div>
      </div>
    </div>
  )
}

export default Login