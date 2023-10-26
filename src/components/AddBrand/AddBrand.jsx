import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function AddBrand({close}) {
    const [brand, setBrand] = useState([])
    const [txt, setTxt] = useState("")

    // get color
    async function getBrand(){
        try {
            let {data} = await axiosRequest.get(`Brand/get-brands?PageSize=100`)
            setBrand(data.data)
        } catch (error) {
            
        }
    }

    // delete brand
    async function deleteBrand(id){
        try {
            // let {data} = await axiosRequest.delete(`Brand/delete-brand?id=${id}`)
            // getBrand()
        } catch (error) {
            
        }
    }

    // add brand
    async function addBrand(){
        if(txt && !brand.find((e)=> e?.brandName.toLowerCase()==txt.toLowerCase().trim()))
        {
            try {
                let brand = txt.trim().toLowerCase()
                let formData = new FormData()
                formData.append("BrandName", brand[0].toUpperCase()+brand.substring(1))
                let {data} = await axiosRequest.post(`Brand/add-brand`, formData)
                getBrand()
                setTxt("")
            } catch (error) {
                
            }
        }else{
            alert("Такой бренд уже есть")
            setTxt("")
        }   
    }

    useEffect(()=>{
        getBrand()
    },[])

    return (
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="w-[100%] h-[100vh] fixed top-0 flex justify-center items-center">
            <div className="w-[500px] min-h-[200px] rounded-[5px] bg-[white] p-[30px]">
                <div className="w-[100%] flex justify-between items-center">
                    <p className='text-[20px] font-bold'>Добавьте бренд</p>
                    <button onClick={close} className='text-[gray] hover:text-[#ffbe1f]'>
                    <CloseOutlinedIcon/>
                    </button>
                </div>
                <div className="w-[100%] max-h-[180px] pr-[10px] overflow-y-auto grid grid-cols-3 grid-rows-auto gap-[10px] my-[30px] text-[15px]">
                    {
                        brand?.map((e)=>{
                            return(
                                <button onClick={()=>deleteBrand(e?.id)} key={e.id} className="h-[35px] rounded-[5px] bg-gray-200 hover:bg-[red] hover:text-[white]">
                                    <p>{e?.brandName}</p>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="w-[100%] h-[35px] grid grid-cols-3 grid-rows-auto gap-[10px]">
                    <input value={txt} onChange={(e)=>setTxt(e.target.value)} className="col-span-2 rounded-[5px] bg-gray-200 pl-[10px] outline-[#ffbe1f]" placeholder='Бренд'></input>
                    <button onClick={()=>addBrand()} className="w rounded-[5px] bg-gray-200 hover:bg-[#ffbe1f] hover:text-[white] text-[15px]"><p>Добавить</p></button>
                </div>
            </div>
        </div>
    )
}


export default AddBrand

