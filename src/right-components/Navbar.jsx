import './navbar.css';

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
];

export function Navbar({ activeId, setActiveId }) {
    return (
        <nav className="sidebar-nav">
            {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={activeId === link.id ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault(); 
                        setActiveId(link.id);
                    }}
                >
                    {link.label}
                    </a>
            ))}
        </nav>
    );
}



