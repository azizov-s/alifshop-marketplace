import React, { useRef, useState } from 'react';
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

const Home = () => {
  return (
    <div>
        <div className='mt-[100px] cursor-pointer w-[85%] m-[auto]'>
          <Swiper navigation={true}  modules={[Navigation]}className="mySwiper">
            <SwiperSlide><img src={slide1} className='w-[100%]' alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} className='w-[100%]'  alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} className='w-[100%]' alt="" /></SwiperSlide>
          </Swiper>
        </div>

    <div>
      <div className='pt-[100px]'>
        <p className='ml-[100px] text-[30px] font-bold'>Популярные категории</p>
      </div>

      <div className='flex gap-[20px] flex-wrap justify-start ml-[100px] mt-[50px]'>
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


    <div>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Oбогреватели <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={obogrevatel} text1="690C" text2="37c. x 24мес" text3="Электрический обогреватель Winning Star St-4081 , чёрный"/>
        </SwiperSlide>
     
      </Swiper>
    </div>

    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Водонагреватели <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={termusk} text1="2 100 c" text2="122c. x 24 мес" text3="Накопитель электрический"/>
        </SwiperSlide>
     
      </Swiper>
    </div>



    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Погрузитесь в кино <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={telik} text1="6 994 c" text2="399c. x 24 мес" text3="Телевизор Philips 50PUS8505/60,50 дюйм."/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Книжное путешествие <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={amazon} text1="179 c" text2="18c. x 24 мес" text3="Amazon. От офиса в гараже до $10 млрд годовго дохода "/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Ноутбуки для работы и учёбы <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={noutbook} text1="2 149 c" text2="215c. x 24 мес" text3="Ноутбук Lenovo V15 IGL (82C3001NAK) Intel Celeron "/>
        </SwiperSlide>
     
      </Swiper>
    </div>



    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Холодильники <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={holodilnik} text1="4 700 c" text2="255c. x 24 мес" text3="Холодильник Shivaki HD 395 FWENH-IN л, серый "/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Облегчите жизнь <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={blender} text1="450c" text2="21c. x 24 мес" text3="Стационарный блендер Philips HR2052/00 , белый "/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Стиральные машины <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={stilar} text1="7 725c" text2="441c. x 24 мес" text3="Стиральная машина LG F4V5VSOW, 9 кг, белый  "/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Строительные инструменты <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={drel} text1="880c" text2="48c. x 24 мес" text3="Электрическая ударная дрель Total TG111165  "/>
        </SwiperSlide>
     
      </Swiper>
    </div>



    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Без смартфона ни дня <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={tel} text1="728 c" text2="42c. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={tel} text1="728 c " text2="482. x 24 мес" text3="Xiaomi Redmi 9A 2/32 GB, черный"/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'>Умные гаджеты <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={chasi} text1="2 500 c" text2="144 c. x 24 мес" text3="Умные часы Samsung Galaxy Watch 4 Classic 44 мм"/>
        </SwiperSlide>
     
      </Swiper>
    </div>



    <div className='pt-[100px]'>
      <div className='ml-[100px]'>
          <p className='text-[30px] font-bold'> Аудио погружение <spam className='ml-[20px] text-[18px] text-[#0075CC] font-normal'>Смотреть все</spam></p>
      </div>
    </div>

    <div className='m-[auto] mt-[50px] w-[85%] '>
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2 "/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard img={airPods} text1="1 475 c" text2="80 c. x 24 мес" text3="Беспроводные наушники Apple AirPods 2"/>
        </SwiperSlide>
     
      </Swiper>
    </div>


    </div>
  )
}

export default Home