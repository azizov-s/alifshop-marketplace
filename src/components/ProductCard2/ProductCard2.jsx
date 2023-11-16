import React from 'react'
import '../../App.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import alif from '../../assets/iconAlif.png'

const ProductCard2 = ({id, productName, image, price, discountPrice}) => {
  let sell = price!=discountPrice? Math.ceil(((price - discountPrice)*100/price)):null

  return (
    <div key={id} className="min-w-[200px] flex flex-wrap justify-start content-start mb-[30px]">
        <div className="w-[100%] h-[325px] flex flex-wrap justify-start content-start hover:text-[#ffbe1f] cursor-pointer">
            <div className="w-[100%] h-[200px] rounded-[5px] overflow-hidden flex justify-center items-center">
                {
                  image?
                  <img src={`${import.meta.env.VITE_APP_FILES_URL}${image}`} className='h-[80%]' alt="" />:
                  <img src={alif} className='' alt="" />
                }
                {/* <img src={alif} className='' alt="" /> */}
            </div>
            {
              sell?
              <div className="p-[5px] text-[12px] text-[white] bg-[#ff4444] mr-1 rounded-[8px] mt-[-15px]">{sell} %</div>:null
            }
            {
              sell?
              <div className="p-[5px] text-[12px] text-[white] bg-[#0073fd] mr-1 rounded-[8px] mt-[-15px]">+ Подарок</div>:null
            }            
            <div className="p-[5px] h-[30px] mt-[-15px]"></div>
            <p className='w-[100%] text-[16px] text-[black] mt-2 font-bold'>{discountPrice == price?price:discountPrice} с. <span className='font-normal text-[#9ba1a7] text-[14px] line-through'>{discountPrice == price ? "" : price + " с."}</span></p>
            <p className='w-[100%] text-[14px] text-[#73787d] my-1'>{Math.floor(discountPrice/24)} с. * 24  мес.</p>
            <p className='w-[100%] text-[14px] mb-2'>{productName}</p>
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
