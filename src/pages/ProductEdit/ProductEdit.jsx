import React from 'react'

const ProductEdit = () => {
  return (
    <div className='ml-[250px] flex flex-wrap justify-between content-start font-mono text-gray-500 px-[100px] pt-[50px] pb-[100px]'>
      <div className="w-[550px] flex flex-wrap justify-center content-start">
        <div className="w-[550px] flex justify-between items-center">
          <p className='text-[25px] text-[black] font-bold'>Edit Product</p>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[18px] text-[black] font-bold'>Basic Information</p>
          <p className='text-[15px] mt-[5px]'>Section to config basic product information</p>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Product Name</p>
          <input type="text" className='w-[550px] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
          placeholder='Name'/>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Code</p>
          <input type="text" className='w-[550px] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
          placeholder='Code'/>
        </div>
        <div className="w-[550px] mt-[30px]">
          <p className='text-[15px] mb-[5px]'>Description</p>
          <textarea type="text" className='w-[550px] h-[150px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px] pt-[7px]'
          placeholder='Description'/>
        </div>
        <div className="w-[550px] h-[1px] my-[30px] bg-gray-500"></div>
        <div className="w-[550px] mt-[0px]">
          <p className='text-[18px] text-[black] font-bold'>Pricing</p>
          <p className='text-[15px] mt-[5px]'>Section to config basic product information</p>
        </div>
        <div className="w-[550px] flex flex-wrap justify-between content-start">
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>SKU</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='0'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Price</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='$ 0'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Bulk Discount Price</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='0'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Tax Rate(%)</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='% 0'/>
          </div>
        </div>
        <div className="w-[550px] h-[1px] my-[30px] bg-gray-500"></div>
        <div className="w-[550px] mt-[0px]">
          <p className='text-[18px] text-[black] font-bold'>Organizations</p>
          <p className='text-[15px] mt-[5px]'>Section to config the product attribute</p>
        </div>
        <div className="w-[550px] flex flex-wrap justify-between content-start">
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Category</p>
            <select type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='Select...'></select>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Tags</p>
            <select type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='Select...'></select>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Brand</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='Brand'/>
          </div>
          <div className="w-[250px] mt-[30px]">
            <p className='text-[15px] mb-[5px]'>Vendor</p>
            <input type="text" className='w-[100%] h-[35px] mr-[10px] bg-[#efefef] rounded-[5px] outline-none border-[2px] border-gray-500 px-[12px]'
            placeholder='Vendor'/>
          </div>
        </div>
      </div>
      <div className="w-[350px] h-[350px]">
        <div className="w-[100%] mt-[50px]">
          <p className='text-[18px] text-[black] font-bold'>Product Image</p>
          <p className='text-[15px] mt-[5px]'>Add or change image for the product</p>
        </div>
      </div>
    </div>
  )
}

export default ProductEdit
