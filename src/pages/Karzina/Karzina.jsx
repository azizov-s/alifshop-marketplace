import React from 'react'
import "./Karzina.css"
import IMG from "../../assets/blender.webp"

const Karzina = () => {
  return (
    <div className='All d pt-[125px] pb-[40px]'>
      {/* <div className="div">
        <h1 className='text-[30px] ml-[10%] font-[800] mt-[5%]'>Корзина</h1>
        <div className="div w-[60%] m-auto mt-[3%] text-center">
          <img src={IMG} alt="" width={280} className='m-auto'/>
          <h1 className='font-[800] text-[40px]'>Внутри пока нет товаров</h1>
          <h1 className='font-[600] text-[20px] mt-[2%]'>Перейдите в раздел с товарами, чтобы оставить заявку</h1>
          <h1 className='text-[20px] w-[30%] h-[9vh] rounded-[10px] pt-[2%] m-auto mt-[3%] bg-[orange] '>Перейти в раздел</h1>
        </div>
      </div> */}
      <div className="flex">
        <div className="all w-[60%]">
        <div className='flex w-[100%] mt-[5%]'>
          <div className="flex w-[70%] pl-[15%] items-center">
          <h1 className='text-[40px] font-[800]'>Корзина</h1>
          <h1 className='text-[20px] ml-[5%] text-[grey] pt-[2%]'>1 Товар</h1>
          </div>
          <h1 className='flex items-center text-[blue] font-[400] text-[20px] ml-[10%] '>Очистить корзину</h1>
        </div>
        <div className="flex w-[85%] bg-[#F7F8F9] rounded-[gray] justify-between ml-[15%] mt-[5%]">
          <div>
            <h1 className='text-[20px] text-[grey]'>Способ доставки</h1>
            <h1 className='text-[22px] font-[600] mt-[2%]'>Доставка от Allo shop</h1>
          </div>
          <div className='text-right w-[20%] '>
            <h1 className='text-[grey] text-[20px]'>Общая сумма</h1>
            <h1 className='text-[22px] font-[600] mt-[2%]'>0 c.</h1>
          </div>
        </div>
        <div className="flex mx-[15%] mt-[5%]">
          <img src={IMG} width={100} alt="" />
          <div className="div ml-[5%]">
            <h1 className='text-[25px]  font-[600]'>3 902 с.</h1>
            <h1 className='text-[20px]  '>Xiaomi Poco X5 Pro 5G 8/256 GB, желтый</h1>
            <h1 className='w-[70%] text-[20px]  bg-[#FFE9B3] h-[6vh] mt-[3%] mb-[3%] rounded-[10px] flex items-center'>В рассрочку 223 c. / мес.</h1>
            <h1 className='w-[70%] text-[20px] bg-[#F7F8F9] rounded-[10px]'>Бесплатная доставка</h1>
          </div>
        </div>
        <div className="flex bg-[#F7F8F9] w-[40%] text-[25px] ml-[65%] rounded-[10px] mt-[2%] h-[6vh] items-center justify-evenly">
          <h1>-</h1>
          <h1>0</h1>
          <h1>+</h1>
          <button>Delete</button>
        </div>
        {/* allllllll */}
        </div>
        <div className="div mt-[8%] ml-[5%] fixed top-[24%] bg-[#F7F8F9] left-[60%] h-[50vh] w-[30%] m-auto">
          <h1 className='text-[grey] m-[5%]'>Способ оплаты</h1>
          <div className="flex justify-between w-[100%] mt-[3%] px-[5%] text-center items-center ">
            <h1 className='h-[8vh] border-gold-[2] ddd  pt-[3%] w-[45%]'>В рассрочку</h1>
            <h1 className='h-[8vh] border-[2px] w-[45%] pt-[3%] bg-[#F7F8F9]'>Наличными</h1>
          </div>
          <div className="flex justify-between px-[5%] mt-[5%] items-center">
            <h1 className='text-[grey]'>Товары(6)</h1>
            <h1 className='text-[20px] font-[600]'>3902c</h1>
          </div>
          
          <div className="flex justify-between px-[5%] mt-[2%] items-center">
            <h1 className='text-[grey]'>Скидки</h1>
            <h1 className='text-[20px] font-[600]'>0c</h1>
          </div>

          <div className="flex justify-between px-[5%] mt-[2%] items-center">
            <h1 className='text-[grey]'>Обшая сумма доставки</h1>
            <h1 className='text-[20px] font-[600]'>0c</h1>
          </div>
          <div className="flex justify-between px-[5%] mt-[2%] items-center">
            <h1 className='text-[grey]'>Комиссия за товары</h1>
            <h1 className='text-[20px] font-[600]'>1100c</h1>
          </div>

          <div className="flex justify-between px-[5%] mt-[2%] items-center">
            <h1 className='font-[600] text-[25px]'>Итого</h1>
            <h1 className='text-[25px] font-[600]'>45346с</h1>
          </div>

          <h1 className='w-[90%] pt-[3%] rounded-[10px] h-[8vh]  m-auto bg-[#FFBE1F] mb-[20%] mt-[4%] text-center text-[20px] font-[600]'>Перейти к оформлению</h1>

        </div>





        {/* flex */}
      </div>

      {/* all */}
    </div>
  )
}

export default Karzina