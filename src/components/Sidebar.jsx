import { FaGithub, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlineTranslate  } from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import { useState } from "react";

import './sidebar.css';

const navLinks = [
    { id: 'about', icon: <RiInformationLine  size={24} />, label: 'About' },
    { id: 'github', icon: <FaGithub size={24} />, label: 'Github' },
    { id: 'projects', icon: <FaCode size={24} />, label: 'Projects' },
    { id: 'socials', icon: <IoShareSocial  size={24} />, label: 'Socials' },
    { id: 'contact', icon: <HiOutlineMailOpen  size={24} />, label: 'Contact' },
];

export function SideBar() {
    const [isExpanded, setIsExpanded] = useState(true);

    const [activeId, setActiveId] = useState('about');

    return (
        <nav className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
            <div className="sidebar-header">
                {isExpanded && <h2 className="user-name">Casey Adams</h2>}
                <button
                    className={`toggle-btn ${isExpanded ? 'is-active' : ''}`}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                </button>
            </div>

            <ul className="sidebar-list">
                {navLinks.map((link) => (
                    <li 
                        key={link.id} 
                        className={`sidebar-item ${activeId === link.id ? 'active' : ''}`}
                        onClick={() => setActiveId(link.id)}
                    >
                        <span className="sidebar-icon">{link.icon}</span>
                        {isExpanded && <span className="sidebar-label">{link.label}</span>}
                    </li>
                ))}
            </ul>

            <div className="sidebar-footer">
                <div className="sidebar-item">
                    <HiOutlineTranslate size={24} />
                    {isExpanded && <span className="sidebar-label">日本語</span>}
                </div>
            </div>
        </nav>
    );
}

