import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import IMG from "../../assets/airPods.webp"
import IMG1 from "../../assets/bag.png"



const Product = () => {
  return (
    <div className='all pt-[125px] pb-[40px] px-[150px]'>
      <div className="flex pt-[2%]">
        <div className="div w-[50%]">
         <Swiper 
          slidesPerView={1}
          spaceBetween={0}

          breakpoints={{

              340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
          }}
          modules={[]}
          className="pb-[5%]">
          <SwiperSlide> <img src={IMG}  width={350} className='m-auto' alt="" /> </SwiperSlide>
          <SwiperSlide> <img src={IMG1} width={350} className='m-auto' alt="" />   </SwiperSlide>
        </Swiper>
        </div>
        <div className="div w-[50%]">
          <h1 className='text-[30px]  w-[60%]'>About Phone iphone 12 pro max 256gb</h1>
          <h1 className='text-[20px] text-[grey] pt-[2%]'>Kod Tovara: 0123456789</h1>
          <h1 className='text-[35px] pt-[2%] font-[600] border-b-4 pb-[3%]'>Price : 600$</h1>
          <h1 className='text-[20px] text-[grey] mt-[3%]'>Brand : <span className='text-[black]'>Apple</span></h1>
          <h1 className='text-[20px] text-[grey] mt-[1%]'>Abyom pamyat : <span className='text-[black]'>256 gb</span></h1>
          <h1 className='text-[20px] text-[grey] mt-[1%]'>Chastota obnovleniya ekrana : <span className='text-[black]'>120 gs</span></h1>
          <h1 className='text-[20px] text-[grey] mt-[1%]'>Model : <span className='text-[black]'>Iphone 12promax</span></h1>
          <h1 className='text-[20px] text-[grey] mt-[1%]'>Diaganal : <span className='text-[black]'>6.7 dym</span></h1>
          <h1 className='text-[20px] text-[grey] mt-[1%]'>Prosesor : <span className='text-[black]'>Aplle 12promax</span></h1>
          <h1 className='text-[skyblue] font-[600] text-[20px] mt-[2%] cursor-pointer'>More Information</h1>
        </div>
      </div>

      {/* all */}
    </div>
  )
}

export default Product
