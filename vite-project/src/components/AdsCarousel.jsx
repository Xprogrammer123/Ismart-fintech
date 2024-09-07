import React, { useState, useEffect } from "react";

const AdsCarousel = () => {
	const images = [
		"https://t3.ftcdn.net/jpg/03/01/75/38/360_F_301753825_PHMbWY0fOQI7bnAnrek78101hw2ttv99.jpg",
		"https://us.123rf.com/450wm/ombule/ombule2008/ombule200800150/154443159-digital-advertising-seo-optimization-social-media-strategy-and-promotion-concepts-with-character.jpg?ver=6",
		"https://www.appsflyer.com/wp-content/uploads/2022/08/ad-tag.jpg",
		"https://www.searchenginejournal.com/wp-content/uploads/2020/01/responsive-display-ads-5e260c98e00db.jpg",
		"https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	// Automatically move to the next slide every 3 seconds
	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 3000); // 3 seconds

		return () => clearInterval(slideInterval); // Clear interval on component unmount
	}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative rounded-2xl w-full md:ml-32 ml-0 md:w-4/5 flex md:h-96 h-52 overflow-hidden borde-2 border-gray-300 mb-10">
			<div
				className="flex transition-transform duration-1000 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="w-full flex-shrink-0">
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover rounded-2xl"
						/>
					</div>
				))}
			</div>

			{/* Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? "bg-gray-800" : "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default AdsCarousel;
