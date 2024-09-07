import React from "react";

const images = [
  "https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg",
  "https://media.istockphoto.com/id/165962743/vector/film-concept-in-the-box.jpg?s=612x612&w=0&k=20&c=w3sssoXoBg3j_V5WEnBr19NpU2jrWu28Pg_rZUQ3okI=",
  "https://media.istockphoto.com/id/1417782333/photo/3d-open-cardboard-box-with-floating-laptop-and-headphones-fast-delivery-order-from-store.jpg?s=612x612&w=0&k=20&c=URgaFevI-FQX7F3eNXTK6d3fManEQ5gwh2yVFb9Kesw=",
  "https://www.shutterstock.com/image-illustration/3d-open-cardboard-box-floating-260nw-2314508193.jpg",
  "https://www.shutterstock.com/image-illustration/3d-open-cardboard-box-floating-260nw-2314508193.jpg",
  "https://cdn3d.iconscout.com/3d/premium/thumb/parcel-unboxing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--package-cloths-shoes-gift-shopping-delivery-pack-e-commerce-illustrations-4323729.png?f=webp",
];


const styles = [
    "rotate-3",  
    "rotate-6", 
    "-rotate-3", 
    "rotate-12", 
    "-rotate-6", 
    "rotate-1",   
  ];

const ImageSlider = () => {
  return (
    <div className="relative w-full h-80 overflow-hidden shadow-lg rounded-xl border py-3 ">
      <div className="flex w-[200%] animate-marquee">
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-3/6 h-80 object-cover ml-20 rounded-3xl hover:scale-125 transition-all border ${styles[index]}`}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-400 opacity-50"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-400 opacity-50"></div>
    </div>
  );
};

export default ImageSlider;
