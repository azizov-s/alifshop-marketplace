import React, { useEffect, useState } from 'react'
import "./Karzina.css"
import IMG from "../../assets/blender.webp"
import DeleteIcon from '@mui/icons-material/Delete';
import '../../App.css'
import notProduct from '../../assets/notProduct.png';

const Karzina = () => {
  const [special, setSpecial] = useState(false)

  return (
    // <div className="px-[150px] py-[125px] flex">
    //   <div className="w-[58%]">
    //     <div className="h-[95px] flex justify-between items-center">
    //       <div className="w flex justify-start items-center font-bold">
    //         <h1 className='text-[30px]'>Корзина</h1>
    //         <h1 className='text-[16px] text-[#73787d] mt-[5px] ml-[15px]'>1 Товар</h1>
    //       </div>
    //       <button className='text-[16px] text-[#3e75a8] hover:text-[red]'>Очистить корзину</button>
    //     </div>
    //     <div className="w flex flex-wrap">
    //       <div className="w-[100%] h-[83px] p-[15px] flex flex-wrap items-center bg-[#f7f8f9] font-bold rounded-[20px]">
    //           <div className="w-[100%] flex justify-between items-center text-[16px] text-[#73787d]">
    //             <p>Способ доставки</p>
    //             <p>Общая сумма</p>
    //           </div>
    //           <div className="w-[100%] flex justify-between items-center text-[18px]">
    //             <p>Доставка от XBIT computers</p>
    //             <p>0 c.</p>
    //           </div>
    //       </div>
    //       <div className="w-[100%] h-[235px] flex justify-between items-start mt-[25px]">
    //         <div className="w-[97px] h-[97px] flex justify-center items-center">
    //           <img src={IMG} className='h-[97px]' alt="" />
    //         </div>
    //         <div className="w-[80%] h-[100%] flex flex-wrap justify-start items-start">
    //           <div className="w flex justify-start items-center">
    //             <p className='text-[18px] text-[black] font-bold'>10000 с. <span className='font-normal mx-[5px] text-[#9ba1a7] text-[16px] line-through'>9000 с.</span></p>
    //             <div className="py-[3px] px-[8px] text-[12px] text-[white] bg-[#ff4444] rounded-[9px] ml-[5px]">- 10%</div>
    //             <div className="py-[3px] px-[8px] text-[12px] text-[white] bg-[#0073fd] rounded-[9px] ml-[5px]">+ Подарок</div>
    //           </div>
    //           <p className='w-[100%] text-[18px] mt-[5px] mb-[8px]'>Соковыжималка Eurolux EU-JE2720SG</p>
    //           <p className='w-[100%] text-[15px] text-[#73787d] mb-[10px]'>Оплата: наличными</p>
    //           <button className='p-[10px] flex justify-center items-center bg-[#ffe9b3] rounded-[10px]'>В рассрочку 125 c. / мес.</button>
    //           <div className="w-[100%]"></div>
    //           <button className='p-[10px] flex justify-center items-center bg-[#f2f2f2] rounded-[10px]'>Бесплатная доставка</button>
    //           <button className='p-[10px] ml-[20px] bg-[#ecf0f3] rounded-[10px] text-[#73787d] hover:text-[red]'><DeleteIcon/></button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[42%] flex justify-end items-end">
    //     <div className="w-[360px] h-[300px] fixed">
    //       <p className='w-[100%] text-[14px] font-bold text-[#73787d]'>Способ оплаты</p>
    //       <div className="w-[100%] mt-[15px] mb-[20px] flex justify-between items-center text-[14px]">
    //         {
    //           special?
    //           <button onClick={() => setSpecial(true)} className='w-[175px] h-[53px] font-bold border-[3px] border-[#ffbe1f] rounded-[10px]'>В рассрочку</button>:
    //           <button onClick={() => setSpecial(true)} className='w-[175px] h-[53px] bg-[#ecf0f3] rounded-[10px]'>В рассрочку</button>
    //         }
    //         {
    //           !special?
    //           <button onClick={() => setSpecial(false)} className='w-[175px] h-[53px] font-bold border-[3px] border-[#ffbe1f] rounded-[10px]'>Наличными</button>:
    //           <button onClick={() => setSpecial(false)} className='w-[175px] h-[53px] bg-[#ecf0f3] rounded-[10px]'>Наличными</button>
    //         }
    //       </div>
    //       <div className="w-[100%] bg-[#f7f8f9] rounded-[10px] p-[20px] text-[14px] text-[#73787d]">
    //         <div className="w-[100%] mb-[8px] flex justify-between items-center">
    //           <p>Товары (3)</p>
    //           <p className='text-[black] font-normal'>10 474 с.</p>
    //         </div>
    //         <div className="w-[100%] my-[8px] flex justify-between items-center">
    //           <p>Скидка</p>
    //           <p className='text-[black] font-normal'>-530 с.</p>
    //         </div>
    //         <div className="w-[100%] my-[8px] flex justify-between items-center">
    //           <p>Общая сумма доставки</p>
    //           <p className='text-[black] font-normal'>0 с.</p>
    //         </div>
    //         {
    //           special?
    //           <div className="w-[100%] my-[8px] flex justify-between items-center">
    //             <p>Комиссия за товары (3)</p>
    //             <p className='text-[black] font-normal'>2 899 с.</p>
    //           </div>:null
    //         }
    //         <div className="w-[100%] mt-[15px] flex justify-between items-center text-[18px] font-bold text-[black]">
    //           <p>Итого</p>
    //           <p className='text-[20px]'>12 843 с.</p>
    //         </div>
    //         <button className='w-[100%] h-[55px] my-[20px] backgroundX rounded-[10px] text-[black] text-[16px] font-bold'>Перейти к оформлению</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className='All d pt-[125px] pb-[40px]'>
      <div className="h-[100vh] py-[125px]">
        <h1 className='text-[30px] ml-[150px] font-[800]'>Корзина</h1>
        <div className="div w-[60%] m-auto mt-[100px] text-center">
          <img src={notProduct} alt="" className='w-[170px] m-auto'/>
          <h1 className='font-[800] text-[32px] mt-[30px]'>Внутри пока нет товаров</h1>
          <h1 className='font-[600] text-[16px] my-[10px]'>Перейдите в раздел с товарами, чтобы оставить заявку</h1>
          <button className='w-[196px] h-[56px] font-[500] text-[16px] backgroundX rounded-[10px]'>Перейти в раздел</button>
        </div>
      </div> 
    //   <div className="flex">
    //     <div className="all w-[60%]">
    //     <div className='flex w-[100%] bg-[red]'>
    //       <div className="bg-[red] flex w-[70%] pl-[15%] items-center font-bold">
    //         <h1 className='text-[32px]'>Корзина</h1>
    //         <h1 className='text-[16px] ml-[5%] text-[#73787d] pt-[2%]'>1 Товар</h1>
    //       </div>
    //       <h1 className='flex items-center text-[#3e75a8] text-[16px] ml-[10%] font-bold'>Очистить корзину</h1>
    //     </div>
    //     <div className="flex w-[85%] bg-[#F7F8F9] rounded-[gray] justify-between ml-[15%] mt-[5%]">
    //       <div>
    //         <h1 className='text-[20px] text-[grey]'>Способ доставки</h1>
    //         <h1 className='text-[22px] font-[600] mt-[2%]'>Доставка от Allo shop</h1>
    //       </div>
    //       <div className='text-right w-[20%] '>
    //         <h1 className='text-[grey] text-[20px]'>Общая сумма</h1>
    //         <h1 className='text-[22px] font-[600] mt-[2%]'>0 c.</h1>
    //       </div>
    //     </div>
    //     <div className="flex mx-[15%] mt-[5%]">
    //       <img src={IMG} width={100} alt="" />
    //       <div className="div ml-[5%]">
    //         <h1 className='text-[25px]  font-[600]'>3 902 с.</h1>
    //         <h1 className='text-[20px]  '>Xiaomi Poco X5 Pro 5G 8/256 GB, желтый</h1>
    //         <h1 className='w-[70%] text-[20px]  bg-[#FFE9B3] h-[6vh] mt-[3%] mb-[3%] rounded-[10px] flex items-center'>В рассрочку 223 c. / мес.</h1>
    //         <h1 className='w-[70%] text-[20px] bg-[#F7F8F9] rounded-[10px]'>Бесплатная доставка</h1>
    //       </div>
    //     </div>
    //     <div className="flex bg-[#F7F8F9] w-[40%] text-[25px] ml-[65%] rounded-[10px] mt-[2%] h-[6vh] items-center justify-evenly">
    //       <h1>-</h1>
    //       <h1>0</h1>
    //       <h1>+</h1>
    //       <button>Delete</button>
    //     </div>

    //     </div>
    //     <div className="div mt-[8%] ml-[5%] fixed top-[24%] bg-[#F7F8F9] left-[60%] h-[50vh] w-[30%] m-auto">
    //       <h1 className='text-[grey] m-[5%]'>Способ оплаты</h1>
    //       <div className="flex justify-between w-[100%] mt-[3%] px-[5%] text-center items-center ">
    //         <h1 className='h-[8vh] border-gold-[2] ddd  pt-[3%] w-[45%]'>В рассрочку</h1>
    //         <h1 className='h-[8vh] border-[2px] w-[45%] pt-[3%] bg-[#F7F8F9]'>Наличными</h1>
    //       </div>
    //       <div className="flex justify-between px-[5%] mt-[5%] items-center">
    //         <h1 className='text-[grey]'>Товары(6)</h1>
    //         <h1 className='text-[20px] font-[600]'>3902c</h1>
    //       </div>
          
    //       <div className="flex justify-between px-[5%] mt-[2%] items-center">
    //         <h1 className='text-[grey]'>Скидки</h1>
    //         <h1 className='text-[20px] font-[600]'>0c</h1>
    //       </div>

    //       <div className="flex justify-between px-[5%] mt-[2%] items-center">
    //         <h1 className='text-[grey]'>Обшая сумма доставки</h1>
    //         <h1 className='text-[20px] font-[600]'>0c</h1>
    //       </div>
    //       <div className="flex justify-between px-[5%] mt-[2%] items-center">
    //         <h1 className='text-[grey]'>Комиссия за товары</h1>
    //         <h1 className='text-[20px] font-[600]'>1100c</h1>
    //       </div>

    //       <div className="flex justify-between px-[5%] mt-[2%] items-center">
    //         <h1 className='font-[600] text-[25px]'>Итого</h1>
    //         <h1 className='text-[25px] font-[600]'>45346с</h1>
    //       </div>

    //       <h1 className='w-[90%] pt-[3%] rounded-[10px] h-[8vh]  m-auto bg-[#FFBE1F] mb-[20%] mt-[4%] text-center text-[20px] font-[600]'>Перейти к оформлению</h1>

    //     </div>





    //     {/* flex */}
    //   </div>

    //   {/* all */}
    // </div>
  )
}

export default Karzina