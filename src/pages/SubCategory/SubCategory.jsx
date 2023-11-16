import React, { useEffect, useState } from 'react'
import ProductCard2 from '../../components/ProductCard2/ProductCard2'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductCard from '../../components/ProductCard/ProductCard';
import { axiosRequest } from '../../utils/axiosRequest';
import { useNavigate, useParams } from 'react-router-dom';


const Category = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const arr = ["Samsung", "Iphone", "Xiaomi", "Другие смартфоны", "Планшеты"]
  const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12]
  const brands = ["Apple", "Amazon", "Blackberry", "Banana", "Blackview"] 

  const [sub, setSub] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [subName, setSubName] = useState('')

  const [products, setProducts] = useState([])

  async function getSubcategory(id) {
    try {
      const {data} = await axiosRequest.get(`SubCategory/get-sub-category-by-id?id=${id}`)
      setSubName(data.data?.subCategoryName)
    } catch (error) {
      
    }
  }

  async function getName() {
    if (localStorage.getItem('categoryID')) {
        try {
        const {data} = await axiosRequest.get(`Category/get-category-by-id?id=${+localStorage.getItem('categoryID')}`)
            setCategoryName(data.data?.categoryName)
        } catch (error) {
        
        }
    }
  }

  async function getProducts(id) {
    try {
      const {data} = await axiosRequest.get(`Product/get-products?SubcategoryId=${id}`)
      setProducts(data.data?.products)
    } catch (error) {
      
    }
  }

  function letToCategory() {
    if (localStorage.getItem('categoryID')) {
        navigate(`/category/${+localStorage.getItem('categoryID')}`)
    } 
  }

  useEffect(() => {
    setProducts([])
    getSubcategory(id)
    getProducts(id)
    getName()
  }, [id])
  

  return (
    <div className='pt-[125px] pb-[40px] px-[150px]'>
      <p className='w-[100%] text-[14px] text-gray-300'><span onClick={() => navigate('/')} className='text-[#3e75a8] cursor-pointer hover:text-[#ffbe1f]'>Каталог товаров</span> / <span onClick={() => letToCategory()} className='text-[#3e75a8] cursor-pointer hover:text-[#ffbe1f]'> {categoryName}</span> / <span className='text-[#3e75a8] cursor-pointer hover:text-[#ffbe1f]'> {subName}</span></p>
      <div className="w-[100%] my-[30px] flex justify-between items-center">
        <div className="w flex items-end">
          <h1 className='text-[32px] font-bold text-[#222222] leading-[32px]'>{subName}</h1>
          <p className='text-gray-500 text-[16px] ml-[15px]'>{products?.length} товаров</p>
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
      </div>
      <div className="w flex  justify-between border-b-[1px] border-b-gray-400">
        <div className="w-[200px] flex flex-wrap justify-start content-start pr-[5px] overflow-y-scrol">
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
        {
          products.length?
        <div className="w-[900px] grid grid-cols-4 grid-rows-auto">
          {
            products?.map((e)=>{
              return(
                <ProductCard key={e?.id} id={e?.id} productName={e?.productName} image={e?.image} price={e?.price} discountPrice={e?.discountPrice}/>
              )
            })
          }
        </div>:
        <div className="w-[900px] h-[280px] font-bold text-[35px] flex justify-center items-center">
          <p>Таких продуктов нет</p>
        </div>
        }
      </div>
    </div>
  )
}

export default Category