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
        description: "私はスケーラブル、クリエイティブ、モジュールなアプリを作ります",
        buttonHint: "英語に切り替え",
        name: "ケーシー・アダムス",
    }
};


export function SideBar({ language, onToggleLanguage }) {

    const t = translations[language];

    const baseUrl = import.meta.env.BASE_URL;

    return (
        <header className="sidebar">
            <div className="sidebar-top">
                <h1 className="user-name">{t.name}</h1>
                <div className="line-element"></div>
                <h2 className="user-title">{t.title}</h2>
                <img src={`${baseUrl}images/seflie5.jpg`.replace(/\/+/g, '/')} className="image" />
                <p className="user-description">
                    {t.description}
                </p>
            </div>

            <div className="sidebar-footer">
                <div className="social-icons">
                    <a href="https://github.com/14th-August" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
                    <a href="https://www.instagram.com/adams.kc/" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
                    <a href="https://linkedin.com/in/cfa2026/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
                    <a href="https://mail.google.com/mail/?view=cm&to=CFAdams10@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer"><FaEnvelope size={24} />
                    </a>
                    
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

