import "./CSS/Achivement.css"; // Import the CSS file

const ALL_IMAGES = Array.from({ length: 22 }, (_, i) => `/Achievement/${i + 1}.png`);

export default function Achievement() {
    return (
        <main className="achievement-title">
            <h1 className="achievement-heading">Achievement</h1>
            <h2 className="achievement-description">
                Second Place in the Entrepreneurial Bootcamp at King Abdulaziz University – as Techy Tag company
            </h2>
            <div className="achievement-images">
                <img
                    src={ALL_IMAGES[1]}
                    alt="Achievement 2"
                    className="achievement-image"
                />
            </div>

            <hr />
        </main>
    );
}
