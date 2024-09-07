import React from "react";
import Carousel from "./carousel";
import { PiStarFill } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsTicketPerforated } from "react-icons/bs";
import { HiGiftTop } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";
import ImageSlider from "./ImageSlider";
import GameCarousel from "./GameCarousel";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { SiChase } from "react-icons/si";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";

function Main() {


	return (
		<>
			<section
				className={`h-screen md:w-4/5 w-full overflow-x-hidden`}
			>
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

				<div className="flex flex-col md:flex-row mb-4">
					{/* Carousel on top for mobile, left for larger screens */}
					<div className="w-full md:w-1/2 order-2 md:order-1">
						<Carousel />
					</div>

					{/* Buttons on the bottom for mobile, right for larger screens */}
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-4 md:mt-0 md:ml-8 order-1 md:order-2 mb-10">
						<h1 className="font-bold text-2xl md:text-4xl font-mono mb-6 md:mb-8 text-center md:text-left md:mr-60">
							Our Services
						</h1>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 justify-center md:mr-28">
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<FaMoneyBillTransfer className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								Airtime2Cash
							</button>
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<BsQrCode className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								QR code
							</button>
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<ImConnection className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								Recharge
							</button>
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<BsTicketPerforated className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								Purchase Ticket
							</button>
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<HiGiftTop className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								Gift Card
							</button>
							<button className="rounded-lg w-full h-24 px-5 font-sans font-semibold shadow-lg">
								<BsShop className="flex justify-center text-2xl font-bold text-custom-color mb-2" />
								Market Place
							</button>
						</div>
					</div>
				</div>

				<div className="border border-gray-400 w-4/6 flex justify-center md:ml-52 mb-5 ml-20">
					Pascoin ads
				</div>

				<div className="px-4 sm:px-8 lg:px-16">
					<h3 className="text-custom-color font-bold text-xl sm:text-2xl text-center sm:text-left">
						Most Ordered Products
					</h3>
					<a
						href=""
						className="font-semibold text-base sm:text-lg justify-center sm:justify-end flex mt-2 sm:mt-0"
					>
						more <IoIosArrowForward className="mt-1 ml-2" />
					</a>
					<br />
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-5 sm:gap-x-8 mt-4">
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Product"
							className="h-48 w-48 sm:h-44 sm:w-44 rounded-lg border-2 border-custom-color md:h-36 md:w-36"
						/>
					</div>
				</div>

				<br />
				<br />
				<br />
				<div className="px-4 sm:px-8 lg:px-16">
					{/* Heading */}
					<h3 className="text-custom-color font-bold text-xl sm:text-2xl text-center sm:text-left mb-4 sm:mb-0">
						Unboxing
					</h3>

					{/* "More" link */}
					<a
						href=""
						className="font-semibold text-base sm:text-lg flex justify-center sm:justify-end mb-4 sm:mb-0"
					>
						more <IoIosArrowForward className="ml-2" />
					</a>

					{/* Image and Slider container */}
					<div className="w-full h-auto mx-auto mt-10 sm:mt-20 flex flex-col md:flex-row md:h-[500px] items-center ">
						{/* Image on left, takes 50% of the width */}
						<div className="w-full md:w-1/2 h-full md:ml-36 ml-24">
							<img
								src="https://cdn3d.iconscout.com/3d/premium/thumb/parcel-unboxing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--package-cloths-shoes-gift-shopping-delivery-pack-e-commerce-illustrations-4323729.png?f=webp"
								alt="Unboxing"
								className="w-4/5 h-4/5 object rounded-lg"
							/>
						</div>

						{/* Slider on right, takes 50% of the width */}
						<div className="w-full md:w-1/2 h-full mt-8 md:mt-0 md:ml-8 md-mr-16">
							<ImageSlider />
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />

				<div className="px-4 sm:px-8 lg:px-16">
					<h3 className="text-custom-color font-bold text-2xl text-center mb-4">
						Games
					</h3>

					<a
						href=""
						className="font-semibold text-lg flex justify-center items-center mb-6"
					>
						more <IoIosArrowForward className="ml-2 mt-1" />
					</a>

					<div className="mb-10 w-full sm:w-4/5 mx-auto">
						<GameCarousel />
					</div>
				</div>

				<div className="px-4 sm:px-8 lg:px-16 ">
					{/* Heading */}
					<h3 className="text-custom-color font-bold text-xl sm:text-2xl text-center sm:text-left mb-4">
						Gift Card
					</h3>
					<br />
					<br />
					{/* "More" link */}
					<a
						href=""
						className="font-semibold text-base sm:text-lg flex justify-center sm:justify-end mb-4"
					>
						more <IoIosArrowForward className="ml-2 mt-1" />
					</a>

					{/* Responsive Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4 sm:gap-x-8 px-4 sm:px-0 justify-center md:flex md:justify-center">
						<img
							src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
							alt="Gift Card 1"
							className="h-44 w-44 rounded-lg border-2 border-custom-color"
						/>
						<img
							src="https://neocurrency.com/wp-content/uploads/2024/03/Yi5i2xAqiQouV121i1tz12l38cndvabIhrtogDao-2.jpeg"
							alt="Gift Card 2"
							className="h-44 w-44 rounded-lg border-2 border-custom-color"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Gift Card 3"
							className="h-44 w-44 rounded-lg border-2 border-custom-color"
						/>
						<img
							src="https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg"
							alt="Gift Card 4"
							className="h-44 w-44 rounded-lg border-2 border-custom-color"
						/>
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
				<BottomNavbar/>
			</section>
		</>
	);
}

export default Main;
