import { FaGithub, FaCode } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlineTranslate  } from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import './sidebar.css';

const navLinks = [
    { id: 'about', icon: <RiInformationLine  size={24} />, label: 'About' },
    { id: 'github', icon: <FaGithub size={24} />, label: 'Github' },
    { id: 'projects', icon: <FaCode size={24} />, label: 'Projects' },
    { id: 'socials', icon: <IoShareSocial  size={24} />, label: 'Socials' },
    { id: 'contact', icon: <HiOutlineMailOpen  size={24} />, label: 'Contact' },
];

export function SideBar() {
    return (
        <nav className="sidebar">
            <ul className="sidebar-list">
                {navLinks.map((link) => (
                    <li key={link.id} className="sidebar-item">
                        <span className="sidebar-icon">{link.icon}</span>
                        <span className="sidebar-label">{link.label}</span>
                    </li>
                ))}
            </ul>

            <div className="sidebar-footer">
                <div className="sidebar-item">
                    <HiOutlineTranslate size={24} />
                </div>
            </div>

        </nav>
    );
}

