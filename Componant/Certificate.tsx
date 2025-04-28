import { useState, useEffect } from "react";
import "./CSS/Certificate.css";

// Categories with their folder names
const CATEGORIES = [
    { name: "UX Professional Google", folder: "ux", count: 4 },
    { name: "AI Specification KAUST", folder: "kaust", count: 3 },
    { name: "Training", folder: "training", count: 1 },
    { name: "Hackathon", folder: "Hakathon", count: 4 },
    { name: "Programming", folder: "programming", count: 3 },
    { name: "Volunteering", folder: "volunteering", count: 3 },
    { name: "Clubs", folder: "clubs", count: 2 },
    { name: "Excellence", folder: "excellence", count: 4 },
];

export default function Certificate() {
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate images based on selected category
    const imagesToShow = selectedCategory
        ? Array.from({ length: selectedCategory.count }, (_, i) => 
            `/certificate/${selectedCategory.folder}/${i + 1}.png`
          )
        : [];

    useEffect(() => {
        setCurrentIndex(0); // Reset index when category changes

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedCategory, imagesToShow.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesToShow.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className="title">
            <h1 className="certificate-heading">Certificate</h1>

            {/* Category Buttons */}
            <div className="category-buttons">
                {CATEGORIES.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory.name === category.name ? "selected" : ""}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Image Slider */}
            <div className="image-slider">
                {imagesToShow.length > 0 && (
                    <img
                        src={imagesToShow[currentIndex]}
                        alt={`Certificate ${currentIndex + 1}`}
                        className="slider-image"
                    />
                )}

                {/* Left Arrow */}
                <div className="arrow left" onClick={handlePrev}>
                    &#8592;
                </div>

                {/* Right Arrow */}
                <div className="arrow right" onClick={handleNext}>
                    &#8594;
                </div>
            </div>

            {/* Dots */}
            <div className="dots">
                {imagesToShow.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>

            <hr />
        </main>
    );
}
