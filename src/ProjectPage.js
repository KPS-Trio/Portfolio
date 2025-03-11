import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./ProjectPage.css";

const ProjectPage = () => {
    const navigate = useNavigate();
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
        const openMenu = () => {
            setIsMenuOpen((prev) => !prev);
        };
    
        const openHomePage = () => {
            navigate("/");
        };
        const openAboutPage = () => {
            navigate("/about");
        };
        const openServicesPage = () => {
            navigate("/services");
        };
        const openContactPage = () => {
            navigate("/contact");
        };

    return (
        <div className="ProjectPage">
            <header className="header">
				<img src={Logo} alt="Logo" id="logo" onClick={openMenu} />
				<h1 id="portfolio-title">Trio</h1>
			</header>
			<div
				className="menuPanel"
				style={{ left: isMenuOpen ? "0" : "-20%", transition: "left 0.5s" }}>
				<div className="menuHeader">
					<h1>Menu</h1>
					<img src={Logo} alt="Logo" id="logo1" onClick={openMenu} />
				</div>
				<div className="menuBody">
					<ul className="menuList" style={{ listStyleType: "none" }}>
						<li id="menuItemHome" onClick={openHomePage} style={{cursor: "pointer"}}>
							Home
						</li>
						<li id="menuItemAbout" onClick={openAboutPage} style={{cursor: "pointer"}}>
							About
						</li>
						<li id="menuItemServices" onClick={openServicesPage} style={{cursor: "pointer"}}>
							Services
						</li>
						<li id="menuItemProject" onClick={openMenu} style={{cursor: "pointer"}}>
							Project
						</li>
						<li id="menuItemContact" onClick={openContactPage} style={{cursor: "pointer"}}>
							Contact Us
						</li>
					</ul>
				</div>
			</div>
            <div className="project1">
				<img src={Logo} alt="Logo" id="logo2" />
			</div>
            <div className="project2"></div>
        </div>
    );
}

export default ProjectPage;