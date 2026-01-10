import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiOutlineTranslate } from "react-icons/hi";
import './sidebar.css';


export function SideBar({ toggleTimezone }) {

    return (
        <header className="sidebar">
            <div className="sidebar-top">
                <h1 className="user-name">Casey Adams</h1>
                <div className="line-element"></div>
                <h2 className="user-title">Software Engineer</h2>
                <p className="user-description">
                I create scalable, creative, and modular 
                applications. 
                </p>
            </div>

            <img src="src/assets/selfie3.png" className="image" />

            <div className="sidebar-footer">
                <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
                    <a href="mailto:CFAdams10@gmail.com"><FaEnvelope size={24} /></a>
                    
                    <button className="icon-button" onClick={toggleTimezone} title="日本語">
                        <HiOutlineTranslate size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}

