import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";

const ServicesPage = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const openMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    const openHomePage = () => {
        navigate("/");
    }
    const openAboutPage = () => {
        navigate("/about");
    }
    const openProjectPage = () => {
        navigate("/project");
    }
    const openContactPage = () => {
        navigate("/contact");
    }
}

export default ServicesPage;