import React, { useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';

import '../App.css'
import { ArrowDownwardSharp, PhoneForwardedRounded } from '@mui/icons-material';
import logo from '../assets/logo.png'

const Layout = () => {
  const location = useLocation()

  const [search, setSearch] = useState("")
  const arr = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Lorem ipsum dolor sit amet, consectetur adipisicing",
  "Lorem ipsum dolor sit amet, consectetur","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit", "Lorem ipsum dolor","Lorem ipsum", "Lorem"]
  const categories = [
    {
      id: 1,
      name: "Смартфоны и планшеты",
      subcategories: ["Iphone", "Другие смартфоны", "Samsung", "Планшеты", "Xiaomi"]
    },
    {
      id: 2,
      name: "Бытовая техника",
      subcategories: ["Телевизоры", "Морозильники", "Варочные аппараты", "Мини печи", "Водонагреватели", "Обогреватели"]
    },
    {
      id: 3,
      name: "Наушники и акксесуары",
      subcategories: ["Наушники", "Беспроводные колонки", "Кабели видеоб аудио USB", "Стилусы", "Умные часы", "Аккумуляторы"]
    },
    {
      id: 4,
      name: "Компьютерная техника",
      subcategories: ["Ноутбуки", "ПК", "Wif-Fi роутеры", "Гейминг", "Сумки для ноутбуков", "Мониторы"]
    }
  ]
  const [subCategories, setSubCategories] = useState(1)
  const [modalCategory,setModalCategory] = useState(false)

  // cities
  const cities = ["Душанбе","Худжанд","Вахдат","Турсунзаде","Гиссар","Бохтар","Куляб",
  "Истаравшан","Исфара","Канибадам","Пенджикент","Бустон","Гафуров","Вашингтон"]
  const [modalCity, setModalCity] = useState(false)
  
  // close modal
  // const specialDiv = useRef()
  // const closeModal= (e)=>{
  //   console.log(e.target);
  //   console.log(specialDiv.current);
  // }

  return (
    <div>
      <div className="overflow-visible z-10 relative">
        <div style={{display:location.pathname.includes("admin")?"none":""}} className="w-[100%] fixed top-0 overflow-visible">
          <div className="w-[100%] h-[105px] bg-[white] md-[20px] lg:px-[150px] flex justify-between items-center">
            <Link to="/">
              <button className='w-[150px] h-[42px]'>
                <img src={logo} className='h-[42px]' alt="" />
              </button>
            </Link>
            <button onClick={()=>{setModalCategory(!modalCategory),setSearch("")}} className='w-[165px] h-[45px] flex justify-evenly items-center rounded-[5px] backgroundX text-[15px]'>
              <div className="w-[30px] h-[30px] flex justify-center items-center">
                {
                  !modalCategory?
                  <MenuOutlinedIcon/>:
                  <CloseOutlinedIcon/>
                }
              </div>
              <p className='text-[14px]'>Каталог товаров</p>
            </button>
            <div className="w-[558px] h-[50px] mt-[5px] flex-wrap flex justify-center items-center overflow-visible">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" className='w-[500px] h-[50px] rounded-l-[5px] border-l-[2px] border-t-[2px] border-b-[2px] border-gray-300 hover:border-gray-500 outline-[#ffbe1f] px-[15px]'
              placeholder='название товара или артикул'/>
              <button className='w-[55px] h-[50px] rounded-r-[5px] backgroundX borderX'>
                <SearchOutlinedIcon/>
              </button>
              {
                search?
                <div className="w-[555px] max-h-[400px] relative text-[15px] overflow-y-auto flex flex-wrap justify-start content-start bg-[white] rounded-[5px] mt-[10px] overflow-auto shadowX">
                {
                  arr?.
                  filter(e => e.trim().toLowerCase().includes(search.trim().toLowerCase()))
                  ?.map(e => {
                    return (
                      <div className="w-[100%] h-[48px] flex justify-start pl-[15px] hover:bg-gray-100 items-center">
                        <p>{e}</p>
                      </div>
                    )
                  })
                }
                <div className="w-[100%] h-[48px] flex justify-start pl-[15px] hover:bg-gray-100 items-center">
                  <p>Ничего не найдено</p>
                </div>
                </div>:""
                }
            </div>
            <Link to='/karzina'>
              {/* <button className='w-[30px] h-[30px]'>
                <ShoppingCartOutlinedIcon style={{fontSize:"25px"}}/>
              </button> */}
              <button className='w-[30px] h-[30px]'>
                <Badge badgeContent={4} color="error">  
                  <ShoppingCartOutlinedIcon style={{fontSize:"25px", color:"black"}} color="action" />
                </Badge>
              </button>  
            </Link>
            <Link to="/admin">
              <button className='w-[30px] h-[30px]'>
                <AdminPanelSettingsOutlinedIcon style={{fontSize:"25px",}}/>
              </button>
            </Link>
            <button onClick={()=>setModalCity(true)} className='w-[115px] h-[48px] flex justify-evenly items-center hover:text-[#ffbe1f]'>
              <PlaceOutlinedIcon style={{color:"black"}}/>
              <p className='text-[14px]'>{localStorage.getItem('myCity')?localStorage.getItem('myCity'):"Душанбе"}</p>
            </button>
          </div>
          {
            modalCategory?
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className="w-[100%] h-[100vh] t-0 p-0">
              <div className="">
                <div className="w-[100%] pb-[50px] h-[600px] bg-[white] flex">

                  <div className="w-[28%] bg-gray-200 flex justify-end items-start">
                    <div className="w-[265px] h-[515px] mt-[30px] text-[15px] overflow-y-auto">
                      {
                        categories?.map((e)=>{
                          let logic = e.id == subCategories
                          return(
                            <button style={{backgroundColor:logic?"white":"",color:logic?"#ffbe1f":""}} key={e.id} onMouseOver={()=>setSubCategories(e.id)} className="w-[245px] h-[45px] mb-[5px] rounded-[5px] flex justify-start items-center pl-[15px] hover:bg-[white] hover:text-[#ffbe1f]">
                              <p>{e.name}</p>
                            </button>
                          )
                        })
                      }
                    </div>
                  </div>

                  <div className="w-[72%] pr-[100px]">
                      <div className="h-[515px] mt-[30px] flex flex-wrap justify-start content-start ml-[30px]">
                        {
                          categories.find(e=> e.id == subCategories)?.subcategories?.
                          map((e,i)=>{
                            return(
                              <div key={i} className="w-[260px] min-h-[96px] flex justify-start items-start">
                                <h1 className='cursor-pointer font-bold colorHover'>{e}</h1>
                              </div>
                            )
                          })
                        }
                      </div>
                  </div>

                </div>
              </div>
            </div>:null
          }
        </div>
        { 
          modalCity?
          <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className="w-[100%] h-[100vh] fixed top-0 p-0 flex justify-center items-center">
            <div className="w-[512px] bg-[white] flex flex-wrap justify-between content-start rounded-[5px] py-[40px] px-[40px]">
              <div className="w-[100%] flex justify-end">
                <button onClick={()=>setModalCity(false)} className='text-[gray] hover:text-[#ffbe1f]'>
                <CloseOutlinedIcon/>
                </button>
              </div>
              <p className='w-[100%] text-[18px] my-[10px]'>Выберите ваш город</p>
              {
                cities?.map((e, i)=>{
                    if(!localStorage.getItem('myCity')){
                      localStorage.setItem('myCity', 'Душанбе')
                    }
                    let logic = e == localStorage.getItem('myCity')
                  return(
                      <button onClick={()=>{localStorage.setItem('myCity',e),setModalCity(false)}} style={{backgroundColor:logic?"#ffbe1f":"",hoverBackgroundColor:logic?"#ffd363":""}} className='w-[208px] h-[56px] text-[16px] mb-[12px] rounded-[5px] bg-[#f3f4f5] hover:bg-gray-300'> 
                        <p>{e}</p>
                      </button>
                    )
                  }
                )
              }
            </div>
          </div>:null
        }
      </div>
      <Outlet/>
 
    </div>
    
  )
}

export default Layout