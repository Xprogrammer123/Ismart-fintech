import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ButtonOne from "./Helpers/ButtonOne";

function PurchaseAirtime() {

  const handleNext = () => {

  }

  return (
    <div className='flex flex-col w-full gap-8 mt-4'>
      <div className="flex flex-col w-full gap-4 mt-4">
          <div className="bg-main-color-opa rounded-[10px] h-[74px] flex items-center">
              <div className="flex ml-8 items-center justify-between mr-4 w-full">
                  <div className="flex items-center text-text-color gap-7">
                      <div>
                        <IoIosArrowDown className="" />
                      </div>

                      <div className="flex flex-col text-text-color text-[16px]">
                          <p>To myself</p>
                          <p>0806 580 2702</p>
                      </div>
                  </div>

                  <div className="text-text-color">
                    <IoIosArrowForward />
                  </div>
              </div>
          </div>

          <div className="flex flex-col gap-2">
              <p className="text-text-color-2 text-[14px] font-bold">Purchase for others </p>
              <div className="flex flex-col gap-4">
                  <input type="text" className="input" placeholder="Enter Phone Number" />
                  <select name="" id="" className="input">
                      <option value="">Select Network</option>
                  </select>
              </div>
          </div>
      </div>

      <div className="w-full">
          <ButtonOne onClick={handleNext} text={'Continue'} />
      </div>
    </div>
  )
}

export default PurchaseAirtime