import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import Krishna from "./Krishna.jpg";
import Pravartak from "./Pravartak.jpg";
import Saloni from "./Saloni.png";
import "./AboutPage.css";

const AboutPage = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const openMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const openHomePage = () => {
		navigate("/");
	};
	const openServicesPage = () => {
		navigate("/services");
	};
	const openProjectPage = () => {
		navigate("/project");
	};
	const openContactPage = () => {
		navigate("/contact");
	};

	const downloadCV = () => {
        document.getElementById("downloadButton").addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1ViwH2EtGhVHJSJ_PLmSQGYD1_vPRYTpa/view");
        });
    }

    const downloadCV1 = () => {
        document.getElementById("downloadButton1").addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1OPlu4IXX__JWqkpaks5dI1dNm1TG4_5x/view");
        });
    }

    const downloadCV2 = () => {
        document.getElementById("downloadButton2").addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1RkOyUXnLLBKfxj_rWZK5Qyckei_3YNZF/view");
        });
    }

	return (
		<div className="AboutPage">
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
						<li
							id="menuItemHome"
							onClick={openHomePage}
							style={{ cursor: "pointer" }}>
							Home
						</li>
						<li id="menuItemAbout" style={{ cursor: "pointer" }}>
							About
						</li>
						<li
							id="menuItemServices"
							onClick={openServicesPage}
							style={{ cursor: "pointer" }}>
							Services
						</li>
						<li
							id="menuItemProject"
							onClick={openProjectPage}
							style={{ cursor: "pointer" }}>
							Project
						</li>
						<li
							id="menuItemContact"
							onClick={openContactPage}
							style={{ cursor: "pointer" }}>
							Contact Us
						</li>
					</ul>
				</div>
			</div>
			<div className="aboutContent">
				<p id="hint-text">
					Please hover the mouse over the images to know more about us.
				</p>
				<div className="flipcard-1">
					<div className="flipcard-inner">
						<div className="flipcard-front">
							<img src={Krishna} alt="Krishna Kanojiya" id="logo3" />{" "}
							{/* Add user image here */}
						</div>
						<div className="flipcard-back">
							<p>
								Hey, I'm Krishna! 🚀
								<br />
								As a first-year Student of BCA, I possess a unique blend of
								coding skills and modern software testing knowledge. Skilled in
								C programming, HTML, and CSS, I add a technical proficiency and
								design artistry to each of my work. I am interested in creating
								elegant solutions and deep dives into the intricacies of
								software engineering.
								<br />
								My dream is to take complex problems and turn them into simple
								effective solution. 💡🔍
							</p>
						</div>
					</div>
				</div>
				<button id="downloadButton" onClick={downloadCV}>Download CV</button>
				<div className="flipcard-2">
					<div className="flipcard-inner">
						<div className="flipcard-front">
							<img src={Pravartak} alt="Pravartak Ambhore" id="logo3" />{" "}
							{/* Add user image here */}
						</div>
						<div className="flipcard-back">
							<p>Hi! My name is Pravartak</p>
						</div>
					</div>
				</div>
				<button id="downloadButton1" onClick={downloadCV1}>Download CV</button>
				<div className="flipcard-3">
					<div className="flipcard-inner">
						<div className="flipcard-front">
							<img src={Saloni} alt="Saloni Mandhare" id="logo3" />{" "}
							{/* Add user image here */}
						</div>
						<div className="flipcard-back">
							<p>
								Hi, I'm Saloni! 👋
								<br />
								<br />
								I'm a first-year Bachelor of Computer Applications (BCA) student
								with a passionate drive for technology and software development.
								Proficient in C and C++ programming, I'm deeply enthusiastic
								about coding, web development, and software design. My journey
								is fueled by curiosity and a constant desire to learn and grow
								in the ever-evolving world of technology.
							</p>
						</div>
					</div>
				</div>
				<button id="downloadButton2" onClick={downloadCV2}>Download CV</button>
			</div>
		</div>
	);
};

export default AboutPage;
