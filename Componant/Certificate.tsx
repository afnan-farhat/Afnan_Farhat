import bacisPythonCertificate from "C:/Users/Afnan/navtraining/public/certificate/basic python.png";
import MathmaticalCertificate from "C:/Users/Afnan/navtraining/public/certificate/Mathmatical for machine learning and data scince .png";
import UXCertificate1 from "C:/Users/Afnan/navtraining/public/certificate/UX-Emphthize, Define, Ideate.png";
import UXCertificate2 from "C:/Users/Afnan/navtraining/public/certificate/UX-bulid wireframe .png";
import UXCertificate3 from "C:/Users/Afnan/navtraining/public/certificate/UX-conduct UX research.png";
import UXCertificate4 from "C:/Users/Afnan/navtraining/public/certificate/UX-foundation of UX design.png";
import WebDevolopmentCertificate from "C:/Users/Afnan/navtraining/public/certificate/web devolopment.jpg";
import InjazCertificate from "C:/Users/Afnan/navtraining/public/certificate/injaz saudi.jpg";
import { Slider } from "./Slider/Slider";

const IMAGES = [
    bacisPythonCertificate,
    MathmaticalCertificate,
    UXCertificate1,
    UXCertificate2,
    UXCertificate3,
    UXCertificate4,
    InjazCertificate,
    WebDevolopmentCertificate,
];

export default function Certificate() {
    return (
        <main className="title">
            <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>Certificate</h1>
            <div></div>
            <div
                style={{
                    maxWidth: "600px",
                    aspectRatio: "16/9",
                    margin: "90px auto",
                    position: "relative",
                }}
            >
                <Slider imageUrls={IMAGES} />
            </div>
            <hr />

        </main>

        
    );
}
