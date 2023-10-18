import React from 'react'

const Popular = ({img, text}) => {
  return (
    <div>
      <div className="w-[14%] pb-[20px] text-[gold]">
        <img src={img} className='m-[auto] w-[60%]' alt="" />
      </div>
      <div className="w-[95%] text-center">
        <p className='font-bold text-center pt-[10px]'>{text}</p>
      </div>
    </div>
  )
}

export default Popular
