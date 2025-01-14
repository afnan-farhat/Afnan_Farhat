import React from "react";
// import "styles.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Wesha7 from "C:/Users/Afnan/navtraining/Componant/My projects/Wesha7.png";
import IEEE from "C:/Users/Afnan/navtraining/Componant/My projects/Ieee.png";
import Molhem from "C:/Users/Afnan/navtraining/Componant/My projects/molhem.png";
import PickupAndWalk from "C:/Users/Afnan/navtraining/Componant/My projects/pickup-and-walk.png";
import TechyTag from "C:/Users/Afnan/navtraining/Componant/My projects/techytag.png";
import MyWebsite from "C:/Users/Afnan/navtraining/Componant/My projects/My-website.png";



import wordpressLogoBW from "C:/Users/Afnan/navtraining/public/icons/wordpress LOGO B&W.png";
import FigmaLogoBW from "C:/Users/Afnan/navtraining/public/icons/figmalogo-black-white--01-01-01.png";
import FlutterLogoBW from "C:/Users/Afnan/navtraining/public/icons/flutter.logo B&W.png";
import ReactLogoBW from "C:/Users/Afnan/navtraining/public/icons/react LOGO B&W.png";
import FirebaseLogoBW from "C:/Users/Afnan/navtraining/public/icons/firebaselogo-black-white-01.png";
import IllustratorBW from "C:/Users/Afnan/navtraining/public/icons/illustrator-logo-black-white-01.png";
import Gimini from "C:/Users/Afnan/navtraining/public/icons/gemini logo b&w.jpg";

import javaLogoBW from "C:/Users/Afnan/navtraining/public/icons/java logo B&W.png";
import MySQLBW from "C:/Users/Afnan/navtraining/public/icons/MySQL-Logo-balck&white copy.png";

import pythonLogoBW from "C:/Users/Afnan/navtraining/public/icons/python logo B&W.png";


const Project: React.FC = () => {
    return (
        <main className="projects-container">
            <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>Projects</h1>
            <br />
            <br />
            {/* Wesha7 Project */}
            <div className="content">
                <div className="image-section">
                    <Image src={Wesha7} alt="Wesha7 Project Image" width={500} height={300} />
                </div>
                <div className="text-section">
                    <div>
                        <p><strong>Wesha7 Project </strong></p>

                        <strong>Position:</strong> Freelance Developer<br />
                        <br />
                        I developed Wesha7, a WordPress platform, as a freelance project. I collaborated with the customer and a team to deliver a responsive, user-friendly website with custom themes and plugins for enhanced functionality.<br />
                        <Image src={wordpressLogoBW} alt="WordPress Logo" width={30} height={30} className="icon-project" />
                    </div>

                </div>
            </div>
            <br />
            <br />
            <br />
            <hr />

            {/* IEEE Project */}
            <div className="content">
                <div className="text-section">
                    <div>
                        <p><strong>About Us Page for IEEE Club </strong></p>
                        <strong>Position:</strong> Web Developer<br />
                        <br />
                        I built a responsive "About Us" page for the IEEE Club using React. It includes a clean layout, interactive history timeline, and mobile-friendly design with CSS Flexbox for responsiveness.<br />
                        <Image src={ReactLogoBW} alt="React Logo" width={30} height={30} className="icon-project" />
                        <Image src={FigmaLogoBW} alt="Figma Logo" width={30} height={30} className="icon-project" />

                    </div>
                </div>
                <div className="image-section">
                    <Image src={IEEE} alt="IEEE Project Image" width={500} height={300} />
                </div>
            </div>
            <br />
            <br />
            <br />

            <hr />
            {/* MY Website Project */}
            <div className="content">
                <div className="image-section">
                    <Image src={MyWebsite} alt="MyWebsite Image" width={500} height={300} />
                </div>
                <div className="text-section">
                    <div>
                        <p><strong>Website Development</strong></p>

                        <strong>Position:</strong> Web Developer<br />
                        <br />
                        I built a responsive website using React, focusing on reusable components and smooth interactions. The website is fast, mobile-friendly, and optimized for performance. Figma was used for the design, but the main focus was on creating a dynamic and interactive experience with React.<br />
                        <Image src={ReactLogoBW} alt="React Logo" width={30} height={30} className="icon-project" />
                        <Image src={FigmaLogoBW} alt="Figma Logo" width={30} height={30} className="icon-project" />
                        <Image src={IllustratorBW} alt="llustrator Logo" width={30} height={30} className="icon-project" />

                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />

            <hr />
            {/* TechyTag Project */}
            <div className="content">
                <div className="text-section">
                    <div>
                        <p><strong>TechyTag Application (Gemini)</strong></p>

                        <strong>Position:</strong> Development Team Leader, Marketing Department Member<br />
                        <br />
                        I led the development of the TechyTag application using Flutter for a responsive experience on iOS and Android. The interface was designed in Figma, with AI-powered features integrated through Gemini and real-time data storage via Firebase. I managed a team of developers and worked closely with the marketing department. The app helps users track tagged items, offering seamless updates and secure login.<br />
                        <Image src={FlutterLogoBW} alt="Flutter Logo" width={30} height={30} className="icon-project" />

                        <Image src={FigmaLogoBW} alt="Figma Logo" width={30} height={30} className="icon-project" />
                        <Image src={FirebaseLogoBW} alt="Firebase Logo" width={30} height={30} className="icon-project" />
                        <Image src={Gimini} alt="Gimini Logo" width={30} height={30} className="icon-project" />

                    </div>
                </div>
                <div className="image-section">
                    <Image src={TechyTag} alt="TechyTag Project Image" width={500} height={300} />
                </div>
            </div>
            <br />
            <br />
            <br />

            <hr />
            {/* Molhem Project */}
            <div className="content">
                <div className="image-section">
                    <Image src={Molhem} alt="Molhem Project Image" width={500} height={300} />
                </div>
                <div className="text-section">
                    <div>
                        <p><strong>Molhem Application </strong></p>

                        <strong>Position:</strong> Designer<br />
                        <strong>Course:</strong> Human-Computer Interaction (HCI)<br />
                        <br />
                        I designed the Molhem application as part of the Human-Computer Interaction (HCI) course using Figma. The focus was on creating an intuitive, user-friendly interface that enhances the user experience. I worked on visual elements like icons, typography, and layout, ensuring a modern and functional design that aligns with HCI principles for usability and accessibility.<br />
                        <Image src={FigmaLogoBW} alt="Figma Logo" width={30} height={30} className="icon-project" />

                    </div>

                </div>
            </div>
            <br />
            <br />
            <br />

            <hr />

            {/* Pickup and Walk Project */}
            <div className="content">
                <div className="text-section">
                    <div>
                        <p><strong>Pick Up and Walk Project </strong></p>

                        <strong>Course:</strong> Data Analysis<br />
                        <strong>Position:</strong> Designer<br />
                        <br />
                        As part of the Data Analysis course, I designed the Pick Up and Walk project using Figma. The focus was on presenting data-driven insights in a clear and visually appealing way. I created intuitive dashboards and layouts to display key metrics, ensuring the design was user-friendly while facilitating easy interpretation of data.<br />
                        <Image src={FigmaLogoBW} alt="Figma Logo" width={30} height={30} className="icon-project" />
                    </div>
                </div>

                <div className="image-section">
                    <Image src={PickupAndWalk} alt="Pickup And Walk Project Image" width={500} height={300} />
                </div>
            </div>
            <br />
            <br />
            <br />

            <hr />

        </main>
    );
};

export default Project;
