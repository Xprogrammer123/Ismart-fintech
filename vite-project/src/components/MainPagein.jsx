import React from "react";
import { PiStarFill } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { SiChase } from "react-icons/si";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";
import { GiWallet } from "react-icons/gi";
import { PiHandDeposit } from "react-icons/pi";
import { MdQrCodeScanner } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import AdsCarousel from "./AdsCarousel";

function Main() {
	return (
		<>
			<section className={`h-screen md:w-4/5 w-full overflow-x-hidden`}>
				<header className="w-screen h-16 border border-gray-200 flex justify-between items-center p-4 shadow-sm fixed top-0 left-0 bg-text-color z-10">
					{/* Logo */}
					<img
						src="https://i.postimg.cc/RFYWbcwc/Screenshot-139.png"
						className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-400"
						alt="Logo"
					/>

					{/* Title */}
					<h2 className="font-semibold text-base sm:text-xl font-mono ml-2 sm:ml-4">
						Bills and Mall
					</h2>

					{/* Modal Button */}
					<div className="ml-auto space-x-3 sm:space-x-5 ">
						<button>
							<Sidebar />
						</button>
					</div>
				</header>

				<br />
				<br />
				<br />

				<div className="w-full h-14 border border-gray-300 flex justify-center mb-7 bg-gray-200">
					ADS
				</div>

				<div className="h-56 w-full bg-custom-color -mt-10 mb-32 px-3">
					<div className="border-2 border-gray-300 h-80 w-full md:4/5 shadow-xl mx-auto rounded-3xl bg-white mb-10 md:py-10 md:px-20 px-4 py-2 flex justify-between items-center">
						{/* Left Side: Wallet Balance and Buttons */}
						<div className="flex flex-col space-y-6">
							<h2 className="md:text-4xl text-2xl font-bold font-mono">
								Wallet Balance
							</h2>
							<h3 className="md:text-3xl text-xl font-bold font-mono">
								N 4000
							</h3>

							<div className="grid grid-cols-2 gap-4">
								<button className="border h-14 w-44 rounded-lg shadow-xl font-bold font-mono text-xl flex items-center p-2 mt-5 md:mt-0">
									<GiWallet className="text-2xl mr-2" /> Fund Wallet
								</button>
								<button className="border h-14 w-44 rounded-lg shadow-xl font-bold font-mono text-xl flex items-center p-2 ml-32 md:ml-0 mt-5 md:mt-0">
									<PiHandDeposit className="text-2xl mr-2" /> Transfer
								</button>
							</div>
						</div>

						{/* Center: QR Code Payment Button */}
						<div className="flex justify-center items-center">
							<button className="border md:h-20 md:w-60 rounded-lg shadow-xl font-bold font-mono text-xl flex items-center p-2 h-20 w-36 mr-5 md:mr-0 -mt-14 md:-mt-0">
								<MdQrCodeScanner className="text-6xl mr-2" /> QR Code Payment
							</button>
						</div>

						{/* Right Side: Pascoin Details */}
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center mt-10 w-full ml-0 md:ml-14">
					{/* Price of Pascoin (Left on larger screens, top on mobile) */}
					<div className="text-left space-y-2 mr-44 md:mr-0">
						<h3 className="text-2xl font-bold font-mono">Price of Pascoin</h3>
						<h3 className="text-3xl font-bold font-mono">N 100</h3>
					</div>

					{/* Total Coins (Right on larger screens, bottom on mobile) */}
					<div className="text-right space-y-2 mt-4 md:mt-0 mr-0 ml-44 md:ml-0 md:mr-28">
						<h3 className="text-2xl font-bold font-mono">Total Coins</h3>
						<h4 className="text-xl font-bold font-mono">P 20</h4>
					</div>
				</div>

				<AdsCarousel />

				<div className="mb-20 flex flex-col md:flex-row">
					{/* Image */}
					<div className="w-full md:w-[880px] h-44 md:h-96 border rounded-2xl md:ml-5">
						<img
							src="https://t4.ftcdn.net/jpg/01/95/78/87/360_F_195788717_Ba8397mYBadW3JUx5SQejAxpRN02DyEF.jpg"
							alt="Store Image"
							className="h-full w-full rounded-2xl "
						/>
					</div>

					{/* Box Container: Stacked Vertically */}
					<div className="flex md:flex-col space-y-4 w-full md:w-1/4 md:h-96 md:ml-4 grid-col-2 space-x-3 ">
						{/* First Box */}
						<div className="w-1/2 md:w-full h-40 md:h-1/2 rounded-2xl border  flex items-center justify-center mt-4">
							<img
								src="https://i.pinimg.com/originals/af/5d/8c/af5d8cc8f49cab055cd0328075b87c11.jpg"
								alt=""
								className="w-full h-full rounded-2xl"
							/>

							<CiSquarePlus className="text-5xl mr-2" />
						</div>

						{/* Second Box */}
						<div className="w-1/2 md:w-full h-40 md:h-1/2 rounded-2xl borde flex items-center justify-center">
							<img
								src="https://img.freepik.com/premium-vector/banner-design-with-shop-now-text-purple-memphis-style-background_626143-1103.jpg"
								alt=""
								className="w-full h-full rounded-2xl"
							/>
						</div>
					</div>
				</div>

				<div className="h-2/4 md:w-4/5 w-full md:ml-32 rounded-xl shadow-2xl p-4 overflow-y-auto">
					<h2 className="font-mono font-semibold text-2xl mb-4 text-center">
						Transaction History
					</h2>

					<div className="h-24 w-full shadow-sm px-6 mb-3">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/640px-New-mtn-logo.jpg"
							alt=""
							className="rounded-full h-16 w-16"
						/>
						<div className="ml-20 -mt-14">
							<h4 className="font-bold font-mono">3.5gb 2-days plan</h4>
							<h5 className="text-green-600 font-mono font-bold"> N 500</h5>
							<h6 className="font-mono text-slate-300">2:45 pm sept-07-24</h6>
							<h2 className="text-green-600 font-bold text-xl justify-end flex -mt-12">
								Successful
							</h2>
						</div>
					</div>

					<div className="h-24 w-full shadow-sm px-6 mb-3">
						<img
							src="https://play-lh.googleusercontent.com/mU1dMWlW2KwsnFlv5odNCJ_UPLBxRfXAVloigb4WUjrDBddaNGsre1omOdoB1xEGdFvO"
							alt=""
							className="rounded-full h-16 w-16"
						/>
						<div className="ml-20 -mt-14">
							<h4 className="font-bold font-mono">Airtime</h4>
							<h5 className="text-red-600 font-mono font-bold"> N 200</h5>
							<h6 className="font-mono text-slate-300">5:42 pm sept-04-24</h6>
							<h2 className="text-red-600 font-bold text-xl justify-end flex -mt-12">
								failed
							</h2>
						</div>
					</div>
					<div className="h-28 w-full shadow-sm px-6 mb-3">
						<img
							src="https://cdn.pixabay.com/photo/2013/07/12/15/49/shop-150362_640.png"
							alt=""
							className="rounded-full h-16 w-16"
						/>
						<div className="ml-20 -mt-14">
							<h4 className="font-bold font-mono">Market place</h4>
							<h5 className="font-mono font-bold"> purchase of track suit </h5>
							<h5 className="text-green-600 font-mono font-bold"> N 2,500</h5>
							<h6 className="font-mono text-slate-300">5:42 pm sept-04-24</h6>
							<h2 className="text-green-600 font-bold text-xl justify-end flex -mt-12">
								Successful
							</h2>
						</div>
					</div>
				</div>

				<div className="flex justify-center space-x-3">
					<RiVisaLine className="text-blue-700 h-12 w-12 mt-2" />
					<RiMastercardLine className="h-16 w-12" />
					<SiChase className="text-blue-600 h-8 w-8 mt-4" />
					<a href="#" className="inline-block">
						<span className="mt-11 ">
							20+ Payment Methods
							<IoIosArrowForward className="ml-44 -mt-4" />
						</span>
					</a>
				</div>

				<footer className="bg-custom-color w-full px-4 py-6 mb-20">
					<h3 className="font-bold text-2xl font-mono text-text-color mb-3 ml-6 ">
						Join the Newsletter
					</h3>
					<div>
						<input
							type="text"
							placeholder="Enter Your Email"
							className="h-14 md:w-1/2 md:p-5 rounded-full md:ml-6 shadow-lg font-bold text-lg text-slate-500 w-full "
						/>
						<button className="bg-custom-color rounded-full h-10 w-20 -ml-24 font-bold text-text-color">
							Send
						</button>
					</div>

					<h3 className="font-bold text-3xl font-mono text-text-color md:mb-3 md:flex md:justify-end md:-mt-28 md:mr-20 flex justify-center mb-1">
						Total Reviews
					</h3>
					<h4 className="font-bold text-lg font-mono text-text-color md:mb-3 md:flex md:justify-end md:mr-24 flex justify-center mb-1">
						over 1k+ reviews
					</h4>

					<div className="md:flex md:justify-end md:mr-24 md:mb-3 text-xl text-text-color md:gap-2 flex justify-center mb-8">
						<PiStarFill />
						<PiStarFill />
						<PiStarFill />
						<PiStarHalfFill />
						<PiStarHalfFill />
					</div>
					<h3 className="font-bold text-3xl font-mono text-text-color mb-5 md:ml-6 flex justify-center">
						About Us
					</h3>

					<div>
						<div className="mb-5">
							<h4 className="font-bold text-lg font-mono text-text-color mb-3 md:ml-6">
								Company
							</h4>
							<IoIosArrowForward className="-mt-8 ml-96 text-text-color" />
						</div>

						<div className="mb-5">
							<h4 className="font-bold text-lg font-mono text-text-color mb-3 md:ml-6">
								Services
							</h4>
							<IoIosArrowForward className="-mt-8 ml-96 text-text-color" />
						</div>

						<div className="mb-5">
							<h4 className="font-bold text-lg font-mono text-text-color mb-3 md:ml-6">
								Support
							</h4>
							<IoIosArrowForward className="-mt-8 ml-96 text-text-color" />
						</div>

						<div className="mb-5">
							<h4 className="font-bold text-lg font-mono text-text-color mb-3 md:ml-6">
								Privacy & Contact
							</h4>
							<IoIosArrowForward className="-mt-8 ml-96 text-text-color" />
						</div>
					</div>
					<h3 className="font-bold text-3xl font-mono text-text-color mb-5 md:mr-80 md:flex md:justify-end md:mt-8 flex justify-center ">
						Partners
					</h3>

					<div className="md:flex md:justify-end mb-5 md:-mt-44 md:mr-36 grid grid-cols-3 md:mb-5">
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt=""
							className="h-32 w-32 rounded-lg border-2 border-custom-color"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt=""
							className="h-32 w-32 rounded-lg border-2 border-custom-color"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt=""
							className="h-32 w-32 rounded-lg border-2 border-custom-color"
						/>
					</div>

					<div className="flex justify-center gap-2">
						<FaLinkedin className="font-bold text-2xl text-text-color" />
						<FaDiscord className="font-bold text-2xl text-text-color" />
						<FaFacebook className="font-bold text-2xl text-text-color" />
						<FaXTwitter className="font-bold text-2xl text-text-color" />
					</div>
				</footer>
				<BottomNavbar />
			</section>
		</>
	);
}

export default Main;
