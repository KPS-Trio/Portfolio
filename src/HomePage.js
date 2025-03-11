import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Logo from "./Logo.png";

const HomePage = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const openMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }
    const openAboutPage = () => {
        navigate("/about");
    }
    const openServicesPage = () => {
        navigate("/services");
    }
    const openProjectPage = () => {
        navigate("/project");
    }
    const openContactPage = () => {
        navigate("/contact");
    }

    return(
        <div className="HomePage">
            <header className="header">
                <img src={Logo} alt="Logo" id="logo" onClick={openMenu} />
                <h1 id="portfolio-title">Trio</h1>
                <img src={"https://img.icons8.com/ios-filled/50/home.png"} alt="Logo" id="home-btn" />
            </header>
            <div className="menuPanel" style={{left: isMenuOpen ? "0" : "-20%", transition: "left 0.5s"}}>
                <div className="menuHeader">
                    <h1>Menu</h1>
                    <img src={Logo} alt="Logo" id="logo1" onClick={openMenu} />
                </div>
                <div className="menuBody">
                    <ul className="menuList" style={{listStyleType: "none"}}>
                        <li id="menuItemHome"><NavLink to={"/"}>Home</NavLink></li>
                        <li id="menuItemAbout" onClick={openAboutPage}><NavLink to={"/about"}>About</NavLink></li>
                        <li id="menuItemServices" onClick={openServicesPage}><NavLink to={"/services"}>Services</NavLink></li>
                        <li id="menuItemProject" onClick={openProjectPage}><NavLink to={"/project"}>Project</NavLink></li>
                        <li id="menuItemContact" onClick={openContactPage}><NavLink to={"/contact"}>Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <img src={Logo} alt="Logo" id="logo2" />
                <h1 id="content-title">Welcome to Trio portfolio</h1>
                <h2>Click <NavLink to={"/about"}>here</NavLink> to go on next page<br />or<br />click on the menu button at top left.</h2>
            </div>
        </div>
    )
};

export default HomePage;