import React, { useState } from "react";
import { StaticImageData } from "next/image";

type ImageSliderProps = {
    imageUrls: (string | StaticImageData)[];
};

export function Slider({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
    }

    function showPrevImage() {
        setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
    }

    console.log(imageIndex); // Log current index to check if it's updating correctly

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Image */}
            <img
                src={typeof imageUrls[imageIndex] === "string" ? imageUrls[imageIndex] : imageUrls[imageIndex].src}
                className="img-slider-img"
                alt={`Slide ${imageIndex + 1}`}
            />
            
            {/* Left Arrow */}
            <button
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{
                    position: "absolute",
                    left: "-60px", // Move arrow outside the image
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                &#x276E; {/* Unicode for a bolder "<" */}
            </button>
            
            {/* Right Arrow */}
            <button
                onClick={showNextImage}
                className="img-slider-btn"
                style={{
                    position: "absolute",
                    right: "-60px", // Move arrow outside the image
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                &#x276F; {/* Unicode for a bolder ">" */}
            </button>

            {/* Circle Indicator */}
            <div className="img-slider-circle-container">
                {imageUrls.map((_, index) => (
                    <div
                        key={index}
                        className={`img-slider-circle ${index === imageIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
