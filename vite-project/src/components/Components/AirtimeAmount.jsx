import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ButtonOne from "./Helpers/ButtonOne";

function AirtimeAmount({ formData, setFormData, setSelectedCard }) {
    const [ isComplete, setIsComplete ] = useState(false)
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/airtime')
    }

    useEffect(() => {
        if(formData?.networkId && formData?.phoneNumber.length === 11 && !formData?.amount){
          setIsComplete(true)
        } else {
          setIsComplete(false);
        }
    }, [formData])

    const handleNext = () => {
        setSelectedCard('airtimePopup')
    } 

  return (
    <div className="">
        <div className="relative flex items-center justify-center w-full p-4">
            <div className="absolute left-0" onClick={handleBack}>
                <FaArrowLeft className="text-[24px] cursor-pointer" />
            </div>
            <p className="text-center font-semibold text-[17px] ">Enter Amount</p>
        </div>

        <p className="mt-4 text-center font-semibold">Amount available: ₦ 234,00.00</p>

        <div className="flex flex-col w-full gap-3 relative mt-6">
            <div className="pad3 w-full rounded-[16px] border-[1px] gap-3 bg-main-color-50">
                <p className="font-semibold">Enter Amount</p>
                <input type="text" id="amount" placeholder="|₦ 0.00" className="text-[24px] font-bold placeholder:text-light-gray-1 outline-none bg-transparent w-full" />
            </div>

            <div className="flex items-center justify-between pad3 w-full rounded-[16px] border-[1px] border-[#EEEEEE]">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-[14px] text-[#555555]">you're buying for:</p>
                    <p className="font-bold text-[14px] text-[#555555]">{formData?.phoneNumber}</p>
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-[14px] text-[#555555]">Network</p>
                    <p className="font-bold text-[14px] text-[#555555]">{formData?.network}</p>
                </div>
            </div>
        </div>


        <div className="w-full mt-[10rem]">
          <ButtonOne onClick={handleNext} text={'Continue'} style={`btnOne ${isComplete ? 'bg-main-color' : ''}`} />
        </div>
    </div>
  )
}

export default AirtimeAmount