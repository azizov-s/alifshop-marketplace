import React, { useEffect } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'

const Popular = ({img, text}) => {
  return (
    <button className='w-[168px] p-[10px] flex flex-wrap justify-center content-start hover:text-[#ffd363]'>
      <div className="w-[128px] h-[128px] flex justify-center items-center">
        <img src={img} className='' alt="" />
      </div>
      <div className="w-[168px] text-center pt-[10px]">
        <p className='font-bold text-center text-[16px]'>{text}</p>
      </div>
    </button>
  )
}

export default Popular
