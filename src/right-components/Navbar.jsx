import './navbar.css';


const navLinks = [
    { id: 'about', label: 'About', ja:'紹介' },
    { id: 'projects', label: 'Projects',ja: 'プロジェクト' },
    { id: 'resume', label: 'Resume', ja: '履歴書' },
];

//href={`#${link.id}`}

export function Navbar({ activeId, setActiveId, language }) {
    const handleClick = (link) => {
    if (link.id === 'resume') {
      const a = document.createElement('a');
      const resumePath = `${import.meta.env.BASE_URL}files/Current CS Resume.pdf`.replace(/\/+/g, '/');
      a.href = resumePath;
      a.download = 'Casey_Adams_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      setActiveId(link.id);
    }
  };

  return (
    <nav className="sidebar-nav">
      {navLinks.map((link) => (
        <a
          key={link.id}
          className={activeId === link.id ? 'active' : ''}
          onClick={() => handleClick(link)}
        >
          {language === 'ja' ? link.ja : link.label}
        </a>
      ))}
    </nav>
  );
}


