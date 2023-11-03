import React, { useEffect, useRef, useState } from 'react';
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slode2.png"
import slide3 from "../../assets/slide3.jpg"
import skidki from "../../assets/skidki.jpg"
import phones from "../../assets/phones.jpg"
import kondi from  "../../assets/kodiconer.jpg"
import bag from "../../assets/bag.png"
import naushniki from "../../assets/naushniki.jpg"
import tv from "../../assets/tv.jpg"
import nout from "../../assets/nout.jpg"
import book from "../../assets/book.jpg"
import stiralMashina from "../../assets/stiralMashina.jpg"
import mikser from "../../assets/mikser.jpg"
import shupaver from "../../assets/shrupaver.jpg"
import cosmetic from "../../assets/cosmetic.png"
import obogrevatel from "../../assets/obogrevatel.webp"
import termusk from "../../assets/termusk.webp"
import telik from "../../assets/telik.webp"
import amazon from "../../assets/amazon.webp"
import noutbook from "../../assets/noutbook.webp"
import holodilnik from "../../assets/holodilnik.webp"
import blender from "../../assets/blender.webp"
import stilar from "../../assets/stiral.webp"
import drel from "../../assets/drel.webp"
import tel from "../../assets/tel.webp"
import chasi from "../../assets/chasi.webp"
import airPods from "../../assets/airPods.webp"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import { Navigation } from 'swiper/modules';
import HomeCard from '../../components/HomeCard/HomeCard';
import Popular from '../../components/Popular/Popular';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductCard2 from '../../components/ProductCard2/ProductCard2';
import { axiosRequest } from '../../utils/axiosRequest';

const Home = () => {
  useEffect(()=>{
    getProducts(4)
  },[])

  const [xiaomi, setXiaomi] = useState([])
  // 4

  // get Products
  async function getProducts(id){
    try {
      const {data} = await axiosRequest.get(`Product/get-products?SubcategoryId=${id}`)
      if(id == 4){
        setXiaomi(data.data?.products)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='px-[150px]'>
      <div className='mt-[125px] cursor-pointer w-[100%]'>
          <Swiper navigation={true}  modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={slide1} className='w-[100%]' alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} className='w-[100%]'  alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} className='w-[100%]' alt="" /></SwiperSlide>
          </Swiper>
      </div>
      <div>
        <div className='pt-[100px]'>
          <p className='text-[24px] font-bold'>Популярные категории</p>
        </div>
        <div className='w-[100%] flex gap-[20px] flex-wrap justify-start mt-[50px]'>
          <Popular img={skidki} text="Скидки"/>
          <Popular img={phones} text="Смарфоны и планшеты"/>
          <Popular img={kondi} text="Кондиционеры"/>
          <Popular img={bag} text="Сумки и аксессуары"/>
          <Popular img={naushniki} text="Наушники"/>
          <Popular img={tv} text="Телевизоры"/>
          <Popular img={nout} text="Ноутбуки"/>
          <Popular img={book} text="Книги"/>
          <Popular img={stiralMashina} text="Бытовая техника"/>
          <Popular img={mikser} text="Мелкая бытовая техника"/>
          <Popular img={shupaver} text="Строительсво и ремонт"/>
          <Popular img={cosmetic} text="Товары для красоты"/>
        </div>
      </div>
      <div className='pt-[100px] w-[100%] '>
        <div className='w-[100%] mb-[50px] flex justify-start items-center'>
            <p className='text-[24px] font-bold'>Смартфоны Xiaomi</p>
            <button className='ml-[20px] text-[16px] text-[#3e75ab] hover:text-[#ffbe1f] font-normal'>Смотреть все</button>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            xiaomi?.map((e)=>{
              return (
                <SwiperSlide>
                  <ProductCard2 img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Home