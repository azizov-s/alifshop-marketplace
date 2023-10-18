import React from 'react'
import "./ProductCard.css"

const ProductCard = ({img, text1 ,text2, text3}) => {
  return (
    <div className='text'> 
        <div>
            <img src={img} className='m-[auto]' alt="" />
        </div>
        <div className='w-[95%] '>
           <p className='font-bold mt-[10px]'>{text1}</p> 
           <p className='mt-[5px]' >{text2}</p> 
           <p className='text3 mt-[5px]' >{text3}</p> 
          <button className='w-[120px] h-[30px] bg-[#FFBE1F] mt-[10px]'>В корзину</button>
        </div>
    </div>
  )
}

export default ProductCard