import './navbar.css';

const navLinks = [
    { id: 'about', label: 'About', ja:'紹介' },
    { id: 'projects', label: 'Projects',ja: 'プロジェクト' },
    { id: 'resume', label: 'Resume', ja: '履歴書' },
];

export function Navbar({ activeId, setActiveId, language }) {
    return (
        <nav className="sidebar-nav">
            {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={activeId === link.id ? 'active' : ''}
                    onClick={() => {
                        setActiveId(link.id);
                    }}
                >
                    {language === 'ja' ? link.ja : link.label}
                    </a>
            ))}
        </nav>
    );
}



