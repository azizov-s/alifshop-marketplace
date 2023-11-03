import React from 'react'
import '../../App.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import alif from '../../assets/iconAlif.png'

const ProductCard2 = ({img, text1 ,text2}) => {
  return (
    <div className="min-w-[200px] flex flex-wrap justify-start content-start mb-[32px]">
        <div className="w-[100%] flex flex-wrap justify-start content-start hover:text-[#ffbe1f] cursor-pointer">
            <div className="w-[100%] h-[200px] rounded-[5px] overflow-hidden bg-gray-300 flex justify-center items-center">
                <img src={alif} className='' alt="" />
            </div>
            <div className="p-[5px] text-[12px] text-[white] bg-[#0073fd] mr-1 rounded-[8px] mt-[-15px]">+ Подарок</div>
            <div className="p-[5px] text-[12px] text-[white] bg-[#ff4444] mr-1 rounded-[8px] mt-[-15px]">- 11%</div>
            <p className='w-[100%] text-[16px] text-[black] mt-2 font-bold'>16500 с. <span className='font-normal text-[#9ba1a7] text-[14px] line-through'>16500 с.</span></p>
            <p className='w-[100%] text-[14px] text-[#73787d] my-1'>793 с. * 24  мес.</p>
            <p className='w-[100%] text-[14px] mb-2'>iPhone 13 Pro Max 256 GB (nano-SIM+eSIM), голубой</p>
        </div>
        <button className='w-[120px] h-[40px] flex justify-evenly items-center rounded-[5px] text-[14px] backgroundX'>
            <ShoppingCartOutlinedIcon style={{fontSize:"18px"}}/>
            <p>В корзину</p>
        </button>
    </div>
    // <div className="min-w-[200px] flex flex-wrap justify-start content-start mb-[32px]">
    //   <div className="w-[100%] flex flex-wrap justify-start content-start hover:text-[#ffbe1f] cursor-pointer">
    //       <div className="w-[200px] h-[200px] rounded-[5px] overflow-hidden bg-[gray] flex justify-center items-center">
    //           <img src={alif} className='' alt="" />
    //       </div>
    //       <div className="p-[5px] text-[12px] text-[white] bg-[#0073fd] mr-1 rounded-[8px] mt-[-15px]">+ Подарок</div>
    //       <div className="p-[5px] text-[12px] text-[white] bg-[#ff4444] mr-1 rounded-[8px] mt-[-15px]">- 11%</div>
    //       <p className='w-[100%] text-[16px] text-[black] mt-2 font-bold'>16500 с.</p>
    //       <p className='w-[100%] text-[14px] text-[#73787d] my-1'>793 с. * 24  мес.</p>
    //       <p className='w-[100%] text-[14px] mb-2'>iPhone 13 Pro Max 256 GB (nano-SIM+eSIM), голубой</p>
    //   </div>
    //   <button className='w-[120px] h-[40px] flex justify-evenly items-center rounded-[5px] text-[14px] backgroundX'>
    //       <ShoppingCartOutlinedIcon style={{fontSize:"18px"}}/>
    //       <p>В корзину</p>
    //   </button>
    // </div>
  )
}

export default ProductCard2