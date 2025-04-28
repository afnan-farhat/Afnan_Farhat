import React from "react";
import pythonLogo from "C:/Users/Afnan/navtraining/public/icons/python.png";
import javaLogo from "C:/Users/Afnan/navtraining/public/icons/java logo.png";
import wordpressLogo from "C:/Users/Afnan/navtraining/public/icons/wordpress.png";
import FigmaLogo from "C:/Users/Afnan/navtraining/public/icons/Figma-logo.png";
import FlutterLogo from "C:/Users/Afnan/navtraining/public/icons/flutter.png";
import ReactLogo from "C:/Users/Afnan/navtraining/public/icons/react logo.png";
import FirebaseLogo from "C:/Users/Afnan/navtraining/public/icons/firebase logo (1).png";
import MySQL from "C:/Users/Afnan/navtraining/public/icons/mysql-LOGO-01.png";
import Illustrator from "C:/Users/Afnan/navtraining/public/icons/illustrator-logo.png";
import Canva from "C:/Users/Afnan/navtraining/public/icons/canva-logo.png";
import GithubLogo from "C:/Users/Afnan/navtraining/public/icons/github.png";
import JuypeterLogo from "C:/Users/Afnan/navtraining/public/icons/jupyter-logo.png";

import pythonLogoBW from "C:/Users/Afnan/navtraining/public/icons/python logo B&W.png";
import javaLogoBW from "C:/Users/Afnan/navtraining/public/icons/java logo B&W.png";
import wordpressLogoBW from "C:/Users/Afnan/navtraining/public/icons/wordpress LOGO B&W.png";
import FigmaLogoBW from "C:/Users/Afnan/navtraining/public/icons/figma-logo BW.jpg";
import FlutterLogoBW from "C:/Users/Afnan/navtraining/public/icons/flutter.logo B&W.png";
import ReactLogoBW from "C:/Users/Afnan/navtraining/public/icons/react LOGO B&W.png";
import FirebaseLogoBW from "C:/Users/Afnan/navtraining/public/icons/firebaselogo-B&W.png";
import MySQLBW from "C:/Users/Afnan/navtraining/public/icons/mysql-LOGO-02.png";
import IllustratorBW from "C:/Users/Afnan/navtraining/public/icons/illustrator-logo-black-white-01.png";
import CanvaBW from "C:/Users/Afnan/navtraining/public/icons/canva-logo B&W.png";
import GithubBW from "C:/Users/Afnan/navtraining/public/icons/github B&W.png";
import JuypeterLogoBW from "C:/Users/Afnan/navtraining/public/icons/jupyter B&W.png";

import SkillBox from "./SkillBox";
import "@/app/app.css";

const Skill = () => {
  return (
    <div className="App">
      <main>
        <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>Skill</h1>
      </main>
      <div className="container">
        {/* 1st row of SkillBoxes */}
        <div className="skill-box-container">
          <SkillBox logoSrc={javaLogo} logoName="Java" hoverLogoSrc={javaLogoBW} />
          <div><p></p></div>
          <SkillBox logoSrc={pythonLogo} logoName="Python" hoverLogoSrc={pythonLogoBW} />
        </div>
        

        {/* 2nd row of SkillBoxes */}
        <div className="skill-box-container">
          <SkillBox logoSrc={FlutterLogo} logoName="Flutter" hoverLogoSrc={FlutterLogoBW} />
          <div><p></p></div>

          <SkillBox logoSrc={ReactLogo} logoName="React" hoverLogoSrc={ReactLogoBW} />
        </div>

        {/* 3rd row of SkillBoxes */}
        <div className="skill-box-container">
          <SkillBox logoSrc={wordpressLogo} logoName="WordPress" hoverLogoSrc={wordpressLogoBW} />
          <div><p></p></div>

          <SkillBox logoSrc={FirebaseLogo} logoName="Firebase" hoverLogoSrc={FirebaseLogoBW} />
        </div>

        {/* 4th row of SkillBoxes */}
        <div className="skill-box-container">
          <SkillBox logoSrc={MySQL} logoName="MySQL" hoverLogoSrc={MySQLBW} />
          <div><p></p></div>
          <SkillBox logoSrc={GithubLogo} logoName="Github" hoverLogoSrc={GithubBW} />

        </div>

        {/* 5th row of SkillBoxes */}
        <div className="skill-box-container">
        <SkillBox logoSrc={JuypeterLogo} logoName="Juypter" hoverLogoSrc={JuypeterLogoBW} />

          <div><p></p></div>
          <SkillBox logoSrc={FigmaLogo} logoName="Figma" hoverLogoSrc={FigmaLogoBW} />

        </div>

        {/* 6th row of SkillBoxes */}
        <div className="skill-box-container">
        <SkillBox logoSrc={Illustrator} logoName="Illustrator" hoverLogoSrc={IllustratorBW} />

          <div><p></p></div>

          <SkillBox logoSrc={Canva} logoName="Canva" hoverLogoSrc={CanvaBW} />
        </div>
      </div>

      <hr className="hr-style"/>

    </div>


  );
};

export default Skill;

