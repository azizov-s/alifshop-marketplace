import React from 'react'
import ProductCard2 from '../../components/ProductCard2/ProductCard2'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Category = () => {
  const arr = ["Samsung", "Iphone", "Xiaomi", "Другие смартфоны", "Планшеты"]
  const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12]
  const brands = ["Apple", "Amazon", "Blackberry", "Banana", "Blackview"] 

  return (
    <div className='pt-[125px] pb-[40px] px-[150px]'>
      <p className='w-[100%] text-[14px] text-gray-300'><span className='text-[#3e75a8]'>Каталог товаров</span> / <span className='text-[#3e75a8]'> Смартфоны и планшеты</span></p>
      <div className="w-[100%] my-[30px] flex justify-between items-center">
        <div className="w flex items-end">
          <h1 className='text-[32px] font-bold text-[#222222] leading-[32px]'>Смартфоны и планшеты</h1>
          <p className='text-gray-500 text-[16px] ml-[15px]'>971 товаров</p>
        </div>
        <div className="w flex items-center text-[14px]">
          <p className='text-gray-500 mr-[15px]'>Сортировать</p>
          <select className='w-[220px] h-[47px] rounded-[5px] pl-[5px] border-[1px] border-gray-300 outline-none' name="" id="">
              <option value="">Популярные</option>
              <option value="">Сначала дешевые</option>
              <option value="">Сначала дорогие</option>
              <option value="">Новинки</option>
          </select>
        </div>
      </div>
      <div className="w mb-[30px]">
          {
            arr?.map((e, i)=>{
              return (
                <button key={i} className='px-[20px] h-[40px] rounded-[20px] bg-[#f3f4f5] hover:bg-gray-300 text-[16px] mr-[5px]'><p>{e}</p></button>
              )
            })
          }
      </div>
      <div className="w flex  justify-between border-b-[1px] border-b-gray-400">
        <div className="w-[200px] flex flex-wrap justify-start content-start pr-[5px] overflow-y-auto">
          <div className="w-[100%] flex flex-wrap justify-between text-[14px] mb-[30px]">
            <p className='w-[100%] font-bold mb-[10px]'>Цена</p>
            <input className='w-[45%] h-[38px] rounded-[5px] pl-[5px] border-[1px] border-gray-300 outline-[#ffbe1f]' type="text" placeholder='от 610' />
            <input className='w-[50%] h-[38px] rounded-[5px] pl-[5px] border-[1px] border-gray-300 outline-[#ffbe1f]' type="text" placeholder='до 26000'/>
          </div>
          <div className="w-[100%] flex flex-wrap justify-between text-[14px] mb-[30px]">
            <p className='w-[100%] font-bold mb-[10px]'>Бренды</p>
            {
              brands.map((e,i)=>{
                return(
                  <div className="w-[100%] mb-[10px] flex">
                    <input id={i} className='w-[20px] h-[20px] border-[1px] border-gray-300' type="checkbox" />
                    <label className='ml-[10px]' htmlFor={i}><p>{e}</p></label>
                  </div>      
                )
              })
            }
            {/* <input className='w-[45%] h-[38px] rounded-[5px] pl-[5px] border-[1px] border-gray-300 outline-[#ffbe1f]' type="text" placeholder='от 610' /> */}
            {/* <input className='w-[50%] h-[38px] rounded-[5px] pl-[5px] border-[1px] border-gray-300 outline-[#ffbe1f]' type="text" placeholder='до 26000'/> */}
          </div>
        </div>
        <div className="w-[900px] flex flex-wrap justify-between content-start">
          {
            arr2.map((e,i)=>{
              return(
                <ProductCard2/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Category
