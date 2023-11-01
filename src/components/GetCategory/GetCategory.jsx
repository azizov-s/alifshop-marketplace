import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function GetCategory({close}) {
    const [color, setColor] = useState([])
    const [txt, setTxt] = useState("")

    // get color
    async function getColor(){
        try {
            let {data} = await axiosRequest.get(`Color/get-colors`)
            setColor(data.data)
        } catch (error) {
            
        }
    }

    // delete color
    async function deleteColor(id){
        try {
            // let {data} = await axiosRequest.delete(`Color/delete-color?id=${id}`)
            // getColor()
        } catch (error) {
            
        }
    }

    // add color
    async function addColor(){
        if(txt && !color.find((e)=> e?.colorName.toLowerCase()==txt.toLowerCase().trim()))
        {
            try {
                let formData = new FormData()
                formData.append("ColorName", txt.toLowerCase().trim())
                let {data} = await axiosRequest.post(`Color/add-color`, formData)
                getColor()
                setTxt("")
            } catch (error) {
                
            }
        }else{
            alert("Такой цвет уже есть")
            setTxt("")
        }   
    }

    useEffect(()=>{
        getColor()
    },[])

    return (
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="w-[100%] h-[100vh] fixed top-0 flex justify-center items-center">
            <div className="w-[500px] min-h-[200px] rounded-[5px] bg-[white] p-[30px]">
                <div className="w-[100%] flex justify-between items-center">
                    <p className='text-[20px] font-bold'>Добавьте цвет</p>
                    <button onClick={close} className='text-[gray] hover:text-[#ffbe1f]'>
                    <CloseOutlinedIcon/>
                    </button>
                </div>
                <div className="w-[100%] grid grid-cols-3 grid-rows-auto gap-[10px] my-[30px] text-[15px]">
                    {
                        color?.map((e)=>{
                            return(
                                <button onClick={()=>deleteColor(e.id)} key={e.id} className="h-[35px] rounded-[5px] bg-gray-200 hover:bg-[red] hover:text-[white]">
                                    <p>{e?.colorName}</p>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="w-[100%] h-[35px] grid grid-cols-3 grid-rows-auto gap-[10px]">
                    <input value={txt} onChange={(e)=>setTxt(e.target.value)} className="col-span-2 rounded-[5px] bg-gray-200 pl-[10px] outline-[#ffbe1f]" placeholder='Цвет'></input>
                    <button onClick={()=>addColor()} className="w rounded-[5px] bg-gray-200 hover:bg-[#ffbe1f] hover:text-[white] text-[15px]"><p>Добавить</p></button>
                </div>
            </div>
        </div>
    )
}

export default GetCategory