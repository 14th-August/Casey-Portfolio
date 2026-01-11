import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiOutlineTranslate } from "react-icons/hi";
import './sidebar.css';

const translations = {
    en: {
        title: "Software Engineer",
        description: "I create scalable, creative, and modular applications.",
        buttonHint: "Switch to Japanese",
        name: "Casey Adams"
    },
    ja: {
        title: "ソフトウェアエンジニア",
        description: "小生、拡張性・創造性・モジュール性を備えたアプリを開発。",
        buttonHint: "英語に切り替え",
        name: "ケーシー・アダムス",
    }
};


export function SideBar({ language, onToggleLanguage }) {

    const t = translations[language];

    return (
        <header className="sidebar">
            <div className="sidebar-top">
                <h1 className="user-name">{t.name}</h1>
                <div className="line-element"></div>
                <h2 className="user-title">{t.title}</h2>
                <img src="src/assets/seflie5.jpg" className="image" />
                <p className="user-description">
                    {t.description}
                </p>
            </div>

            <div className="sidebar-footer">
                <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
                    <a href="mailto:CFAdams10@gmail.com"><FaEnvelope size={24} /></a>
                    
                    <button 
                        className="icon-button" 
                        onClick={onToggleLanguage}
                        title={t.buttonHint}
                    >
                        <HiOutlineTranslate size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}

