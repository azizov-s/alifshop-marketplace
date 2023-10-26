import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'

import '../../App.css'
import air from '../../assets/airPods.webp'

import {
  Box,
  Typography,
} from "@mui/material";
import { Close, Upload } from "@mui/icons-material";
import { fileToBase64 } from '../../utils/fileToBase64';
import { Navigate, useNavigate } from 'react-router-dom';

const  NewProduct = () => {
  const navigate = useNavigate()

  const [brand, setBrand] = useState([])
  const [color, setColor] = useState([])
  const [subCategory, setSubcategory] = useState([])

  const [localImage, setLocalImage] = useState([])
  const [image, setImage] = useState([])

  // get Brands
  async function getBrand(){
    try {
        const {data} = await axiosRequest.get(`Brand/get-brands`)
        setBrand(data.data)
    } catch (error) {
      
    }
  }

  // get Color
  async function getColor(){
    try {
        const {data} = await axiosRequest.get(`Color/get-colors`)
        setColor(data.data)
    } catch (error) {
      
    }
  }

  // get Subcategory
  async function getSub(){
    try {
        const {data} = await axiosRequest.get(`SubCategory/get-sub-category`)
        setSubcategory(data.data)
    } catch (error) {
      
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      // let product = {
      //   ProductName: event.target["name"].value,
      //   Code: event.target["code"].value,
      //   Description: event.target["description"].value,
      //   Quantity: +event.target["quantity"].value,
      //   Price: event.target["price"].value,
      //   DiscountPrice: event.target["discountPrice"].value,
      //   SubCategoryId: +event.target["subCategory"].value,
      //   BrandId: +event.target["brand"].value,
      //   ColorId: +event.target["color"].value,
      // }

      let formData = new FormData()
      formData.append("ProductName", event.target["name"].value)
      formData.append("Code", event.target["code"].value)
      formData.append("Description", event.target["description"].value)
      formData.append("Quantity", +event.target["quantity"].value)
      formData.append("Price", event.target["price"].value)
      formData.append("DiscountPrice", event.target["discountPrice"].value)
      formData.append("SubCategoryId", +event.target["subCategory"].value)
      formData.append("BrandId", +event.target["brand"].value)
      formData.append("ColorId", +event.target["color"].value)
      image?.map((e)=> {
        formData.append("Images", e)
        return e
      })
      const {data} = await axiosRequest.post(`Product/add-product`, formData)
      navigate("/admin/productList")
    } catch (error) {
        
    }
  }

  // upload Image 
  const handleChange = async (e) => {
    let file = await fileToBase64(e.target.files[0]);
    setLocalImage([...localImage, file]);
    setImage([...image, e.target.files[0]]);
  };

  // delete local Image
  function deleteLocalImage(img){
    // setLocalImage([...localImage.filter((e)=> e!=img)])
    setLocalImage([])
    setImage([])
  }

  // console.log(image);
  // console.log(localImage);

  useEffect(()=>{
    getBrand(),
    getColor(),
    getSub()
  },[])

  return (
    <div className='ml-[250px] flex flex-wrap justify-between content-start text-gray-500 px-[100px] pt-[50px] pb-[100px]'>
      <form onSubmit={handleSubmit} className="w-[550px] flex flex-wrap justify-center content-start">
        <div className="w-[550px] flex justify-between items-center">
          <p className='text-[25px] text-[black] font-bold'>Новый продукт</p>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[18px] text-[black] font-bold'>Основная информация</p>
          <p className='text-[15px] mt-[5px]'>Раздел для настройки основной информации о продукте</p>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Название продукта</p>
          <input name='name' type="text" className='w-[550px] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
          placeholder='Название'/>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Код</p>
          <input name='code' type="text" className='w-[550px] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
          placeholder='Код'/>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Описание продукта</p>
          <textarea name='description' type="text" className='w-[550px] h-[150px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px] pt-[5px]'
          placeholder='Описание'/>
        </div>

        {/* <div className="w-[550px] h-[1px] my-[40px] bg-gray-500"></div>
        <div className="w-[550px]">
        <p className='text-[18px] text-[black] font-bold'>Дополнительная информация</p>
          <p className='text-[15px] mt-[5px]'>Раздел для настройки дополнительной информации о продукте</p>
        </div>
        <div className="w-[550px] flex flex-wrap justify-between content-start">
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Масса</p>
            <input type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='0'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Размер</p>
            <input type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='0'/>
          </div>
        </div> */}

        <div className="w-[550px] h-[1px] my-[40px] bg-gray-500"></div>
        <div className="w-[550px] mt-[0px]">
          <p className='text-[18px] text-[black] font-bold'>Цены</p>
          <p className='text-[15px] mt-[5px]'>Раздел для настройки основной информации о продукте</p>
        </div>
        <div className="w-[550px] flex flex-wrap justify-between content-start">
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Цена</p>
            <input name='price' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='c. 0'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Количество</p>
            <input name='quantity' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='0'/>
          </div>
          {/* <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Bulk Discount Price</p>
            <input type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='0'/>
          </div> */}
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Скидка в процентах (%)</p>
            <input name='discountPrice' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='% 0'/>
          </div>
        </div>
        <div className="w-[550px] h-[1px] my-[40px] bg-gray-500"></div>
        <div className="w-[550px] mt-[0px]">
          <p className='text-[18px] text-[black] font-bold'>Организации</p>
          <p className='text-[15px] mt-[5px]'>Раздел для настройки атрибута продукта</p>
        </div>
        <div className="w-[550px] flex flex-wrap justify-between content-start">
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Подкатегория</p>
            <select name='subCategory' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='Select...'>
              {
                subCategory?.map((e, i)=>{
                  return(
                    <option key={e?.id} value={e?.id}>
                      {e?.subCategoryName}
                    </option>
                  )
                })
              }
            </select>
          </div>
          {/* <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Tags</p>
            <select type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='Select...'></select>
          </div> */}
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Бренд</p>
            <select name='brand' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='Select...'>
              {
                brand?.map((e)=>{
                  return(
                    <option key={e?.id} value={e?.id}>
                      {e?.brandName}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Цвета</p>
            <select name='color' type="text" className='w-[100%] h-[35px] rounded-[5px] border-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
            placeholder='Select...'>
              {
                color?.map((e)=>{
                  return(
                    <option key={e?.id} value={e?.id}>
                      {e?.colorName}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="w-[550px] mt-[40px] flex justify-between items-center text-[black]">
          <button className='w-[250px] h-[40px] rounded-[5px] bg-gray-300 hover:bg-gray-400 text-[15px]'><p>Отменить</p></button>
          <button type='submit' className='w-[250px] h-[40px] rounded-[5px] text-[15px] bg-[#ffbe1f] hover:bg-[#ffd363]'><p>Добавить продукт</p></button>
        </div>
      </form>
      <div className="w-[360px]">
        <div className="w-[100%] h-[39px]"></div>
        <div className="w-[100%] mt-[30px]">
          <p className='text-[18px] text-[black] font-bold'>Изображение продукта</p>
          <p className='text-[15px] mt-[5px]'>Добавьте или измените изображение товара</p>
        </div>
        <div className="w-[100%] mt-[30px] grid grid-cols-3 grid-rows-auto gap-[20px]">
          {
            localImage?.map((e, i)=>{
              return(
                <div key={i} onClick={()=>deleteLocalImage(e)} className="h-[100px] bg-[white] overflow-hidden rounded-[5px] hover:border-[red] border-gray-300 border-[2px] flex justify-center items-center">
                  <img src={e} className='h-[100%]' alt="" />
                </div>  
                )
              })
            }
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
              gap: 2,
              }}
            >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px dashed #0095ef",
                // border: "2px dashed #ffbe1f",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                  <label htmlFor="Images">
                    <Box
                      sx={{
                        borderRadius: "5px",
                        width: "90px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Upload />
                      <Typography>Upload</Typography>
                    </Box>
                      <input
                        type="file"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        // multiple
                        id="Images"
                        accept="image/*"
                        style={{ display: "none" }}
                      />
                  </label>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default  NewProduct
