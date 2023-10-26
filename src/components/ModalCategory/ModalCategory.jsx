import React, { useEffect, useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from 'axios';
import { axiosRequest } from '../../utils/axiosRequest';

function ModalCategory() {
    const [catalogy, setCatalogy] = useState([])
    const [subCategories, setSubCategories] = useState(1)

    // get Catalogy
    async function getCatalogy(){
        try {
            const {data} = await axiosRequest.get(`Catalog/get-catalogs`)
            setCatalogy(data.data[0].categories)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getCatalogy()
    }, [])

    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className="w-[100%] h-[100vh] t-0 p-0">
            <div className="">
                <div className="w-[100%] pb-[50px] h-[600px] bg-[white] flex">
                    <div className="w-[28%] bg-gray-200 flex justify-end items-start">
                        <div className="w-[265px] h-[515px] mt-[30px] text-[15px] overflow-y-auto">
                            {   
                                catalogy?.map((e)=>{
                                let logic = e.id == subCategories
                                return(
                                    <button 
                                    style={{backgroundColor:logic?"white":"",color:logic?"#ffbe1f":""}} 
                                    key={e?.id} onMouseOver={()=>setSubCategories(e?.id)} 
                                    className="w-[245px] h-[45px] mb-[5px] rounded-[5px] flex justify-start items-center pl-[15px] hover:bg-[white] hover:text-[#ffbe1f]">
                                    <p>{e?.categoryName}</p>
                                    </button>
                                )
                                })
                            }
                        </div>
                    </div>

                    <div className="w-[72%] pr-[100px]">
                        <div className="h-[515px] mt-[30px] flex flex-wrap justify-start content-start ml-[30px]">
                            {
                                catalogy?.find(e => e.id == subCategories)?.subCategories?.
                                map((e,i)=>{
                                    return(
                                    <div key={i} className="w-[260px] min-h-[96px] flex justify-start items-start">
                                        <h1 className='cursor-pointer font-bold colorHover'>{e?.subCategoryName}</h1>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCategory
