import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import MapsLogo from "./MapsLogo.png";
import PhoneLogo from "./PhoneLogo.png";
import EmailLogo from "./EmailLogo.png";
import "./ContactPage.css";

const ContactPage = () => {
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
	const openProjectPage = () => {
		navigate("/project");
	};

	return (
		<div className="ContactPage">
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
						<li id="menuItemProject" onClick={openProjectPage} style={{cursor: "pointer"}}>
							Project
						</li>
						<li id="menuItemContact" onClick={openMenu} style={{cursor: "pointer"}}>
							Contact Us
						</li>
					</ul>
				</div>
			</div>
			<div className="contactCard">
				<div className="contactInfo">
					<img src={MapsLogo} alt="MapsLogo" id="mapsLogo" />
					<p id="address">
						U Building, 1st Floor, Dana Market, APMC Plot No. 7,
						<br />
						near RTO, Sector 19B, Vashi, Navi Mumbai,
						<br />
						Maharashtra 400703
					</p>
					<img src={PhoneLogo} alt="PhoneLogo" id="phoneLogo" />
					<p id="phone">
						+91 9136672230
						<br />
						+91 8355820985
						<br />
						+91 9892593672
					</p>
					<img src={EmailLogo} alt="EmailLogo" id="emailLogo" />
					<p id="email-to-us">triokps3@gmail.com</p>
				</div>
				<form className="contactForm">
					<div className="form-group">
						<label htmlFor="name" id="name-label">Name: </label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Full Name"
							required
						/>
						<br />
					</div>
					<div className="form-group">
						<label htmlFor="email-input" id="email-label">Email: </label>
						<input
							type="email"
							id="email-input"
							name="email-input"
							placeholder="Email"
							required
						/>
						<br />
					</div>
					<div className="form-group">
						<label htmlFor="message" id="message-label">Message: </label>
						<input
							type="text"
							id="message"
							name="message"
							placeholder="Tell us how can we help you..."
							required
						/>
						<br />
					</div>
					<button type="submit" id="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
