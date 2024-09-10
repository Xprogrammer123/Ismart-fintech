import { IoIosArrowForward } from "react-icons/io";
import ButtonOne from "./Helpers/ButtonOne";
import { Link } from "react-router-dom";

function Footer() {
    const handleSubscribe = () => {

    }

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex items-center gap-1 justify-center">
            Visa master-card
        </div>

        <div className="w-full bg-main-color border-[1px] border-[#000000] p-12">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 font-bold text-[12px]">
                    <p className="text-text-color">Join a Newsletter</p>

                    <div className="w-full bg-text-color p-1 rounded-[4px] flex items-center">
                        <input type="text" className="input border-none outline-none focus:none" />
                        <div>
                            <ButtonOne onClick={handleSubscribe} text={'Submit'} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center flex flex-col text-text-color">
                        <p className="flex flex-col gap-4 font-bold text-[12px]">Total Reviews</p>
                        <p className="flex flex-col gap-4 font-bold text-[12px]">1,22,789</p>
                    </div>
                    stars
                </div>
            </div>

            <h2 className="text-text-color text-center mt-6 mb-6 text-[16px] font-bold">About Us</h2>

            <div className="mt-4 flex flex-col gap-4">
                <Link className='link text-text-color w-full flex items-center justify-between'>
                    <p>Company</p>
                    <IoIosArrowForward />
                </Link>
                <Link className='link text-text-color w-full flex items-center justify-between'>
                    <p>Service</p>
                    <IoIosArrowForward />
                </Link>
                <Link className='link text-text-color w-full flex items-center justify-between'>
                    <p>Support</p>
                    <IoIosArrowForward />
                </Link>
                <Link className='link text-text-color w-full flex items-center justify-between'>
                    <p>Privacy</p>
                    <IoIosArrowForward />
                </Link>
            </div>

            <h2 className="text-text-color text-center mt-6 mb-6 text-[16px] font-bold">Patners</h2>
            <div className="flex gap-4 items-center">
                <div className="flex-1 p-6 bg-text-color"></div>
                <div className="flex-1 p-6 bg-text-color"></div>
                <div className="flex-1 p-6 bg-text-color"></div>
            </div>

            <h2 className="text-text-color text-center mt-6 mb-6 text-[16px] font-bold">Social Media</h2>
        </div>
    </div>
  )
}

export default Footer