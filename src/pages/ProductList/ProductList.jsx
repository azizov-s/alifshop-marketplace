import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import img from '../../assets/iconAlif.png'

const ProductList = () => {
  const arr = [
    {
      id: 1,
      name: "Phone",
      category: "Electronic",
      status: "In Stock",
      price: "250",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruit",
      status: "Out of Stock",
      price: "129",
    },
    {
      id: 3,
      name: "Apple",
      category: "Electronic",
      status: "In Stock",
      price: "339",
    },
    {
      id: 4,
      name: "Mango",
      category: "Fruit",
      status: "Limited",
      price: "149",
    }
  ] 

  return (
    <div className='ml-[250px] h-[100vh] font-mono text-gray-500 px-[100px] pt-[50px]'>
      <div className="w-[100%] flex justify-between items-center">
        <p className='text-[25px] text-[black] font-bold'>Products</p>
        <div className="w flex">
          <input type="search" className='w-[250px] h-[35px] mr-[10px] rounded-[5px] outline-none border-[2px] border-gray-500 px-[14px]' placeholder='Search Product'/>
          <button className='px-[10px] h-[35px] mr-[10px] rounded-[5px] border-[2px] border-gray-500 hover:text-white hover:bg-gray-500'>
            <p>Filter</p>
          </button>
          <button className='px-[10px] h-[35px] rounded-[5px] border-[2px] border-gray-500 hover:text-white hover:bg-gray-500'>
            <p>+ Add Product</p>
          </button>
        </div>
      </div>
      <div className="w-[100%] min-h-[50px] rounded-[5px] mt-[30px] text-[14px]">
        <div className="w-[100%] py-[5px] flex justify-between items-center bg-gray-200 rounded-t-[5px]">
          <div className="w-[30%] pl-[20px]">
            <p>NAME</p>
          </div>
          <div className="w-[20%] pl-[20px]">
            <p>CATEGORY</p>
          </div>
          <div className="w-[20%] pl-[20px]">
            <p>STATUS</p>
          </div>
          <div className="w-[15%] pl-[20px]">
            <p>PRICE</p>
          </div>
          <div className="w-[15%]"></div>
        </div>
        {
          arr?.map(e => {
            return(
              <div key={e.id} className="w-[100%] py-[15px] flex justify-between items-center border-b-[2px] text-[gray] font-bold border-b-gray-400">
                <div className="w-[30%] pl-[20px] flex justify-start items-center">
                  <div className="w-[30px] h-[30px] mr-[20px] rounded-[5px] bg-gray-400 overflow-hidden">
                    <img src={img} className='h-[30px] object-cover' alt="" />
                  </div>
                  <p>{e.name}</p>
                </div>
                <div className="w-[20%] pl-[20px]">
                  <p>{e.category}</p>
                </div>
                <div className="w-[20%] pl-[20px]">
                  <p style={{color:e.status=="In Stock"?"green":e.status=="Limited"?"brown":"red"}}>{e.status}</p>
                </div>
                <div className="w-[15%] pl-[20px]">
                  <p>{e.price} $</p>
                </div>
                <div className="w-[15%] pl-[20px]">
                  <EditIcon/>
                  <DeleteOutlineOutlinedIcon/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList