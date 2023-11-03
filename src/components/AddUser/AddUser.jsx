import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '../../App.css'
import { axiosRequest } from '../../utils/axiosRequest';

const AddUser = ({close}) => {
    const [show, setShow] = useState(false)

    const handleAdd = async(event) =>{
        event.preventDefault()
        try {
            let formData = new FormData()
            formData.append('UserName', event.target['userName'].value)
            formData.append('PhoneNumber', event.target['phone'].value)
            formData.append('Email', event.target['email'].value)
            formData.append('Password', event.target['password'].value)
            formData.append('ConfirmPassword', event.target['confirmPassword'].value)

            const {data} = await axiosRequest.post(`Account/register`, formData) 
            close()
        } catch (error) {
            
        }
    }

    return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="w-[100%] h-[100vh] fixed top-0 flex justify-center items-center">
      <div className="w-[360px] h-[450px] px-[30px] rounded-[5px] bg-[white] p-[30px]">
        <div className="w-[100%] flex justify-between items-center">
            <p className='text-[20px] font-bold'>Новый пользователь</p>
            <button onClick={close} className='text-[gray] hover:text-[#ffbe1f]'>
                <CloseOutlinedIcon/>
            </button>
        </div>
        <form action="" onSubmit={handleAdd} className='w-[100%] flex flex-wrap justify-between'>
            <input name='userName' type="text" className='w-[100%] h-[40px] my-[20px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Имя пользователя'/>
            <input name='phone' type="text" className='w-[100%] h-[40px] mb-[20px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Номер телефона'/>
            <input name='email' type="email" className='w-[100%] h-[40px] mb-[20px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Почта'/>
            <input name='password' type="password" className='w-[100%] h-[40px] mb-[20px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Пароль'/>
            <input name='confirmPassword' type="password" className='w-[100%] h-[40px] mb-[20px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]' placeholder='Подтвердите пароль'/>

            <button type='submit' className='w-[100%]  h-[40px] rounded-[5px] bg-[#ffbe1f] hover:bg-[#ffd363] text-[15px]'><p>Зарегистрировать</p></button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
