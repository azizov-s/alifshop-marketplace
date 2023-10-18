import React from 'react'

const HomeCard = ({img ,text1,text2}) => {
  return (
    <div className='lg:w-[17%] md:w-[25%] sm:w-[45%] pb-[20px]'> 
        <div>
            <img src={img} className='m-[auto]' alt="" />
        </div>
        <div className='w-[95%] text-center'>
           <p className='font-bold text-center'>{text1}</p> 
           <p >{text2}</p> 
          <button className='w-[120px] h-[30px] bg-[#FFBE1F] mt-[10px]'>В корзину</button>
        </div>
    </div>
  )
}

export default HomeCard