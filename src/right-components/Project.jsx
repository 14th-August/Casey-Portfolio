import './Project.css';
import {
    SiReact, SiHtml5, SiCss3, SiTypescript,
    SiNextdotjs, SiTailwindcss, SiPython, SiVite
} from 'react-icons/si';

const techIcons = {
    "React": <SiReact title="React" />,
    "HTML": <SiHtml5 title="HTML5" />,
    "CSS": <SiCss3 title="CSS3" />,
    "TypeScript": <SiTypescript title="TypeScript" />,
    "Next.js": <SiNextdotjs title="Next.js" />,
    "Tailwind": <SiTailwindcss title="Tailwind CSS" />,
    "Python": <SiPython title="Python" />,
    "Vite": <SiVite title="Vite" />
};

const projects = [
    {
        id: '1',
        year: '2026',
        name: "This Website",
        "jp-name": "本サイト",
        tech: ["React", "HTML", "CSS", "Vite"],
        desc: "First iteration of my website and incorporated using React and Vite. Will be updating overtime.",
        "jp-desc": "ReactとViteを用いた本サイトの初版です。随時更新を予定しております。",
        link: "#"
    },
    {
        id: '2',
        year: '2026',
        name: "Mediform Visualizations",
        "jp-name": "Mediform視覚化システム",
        tech: ["React", "TypeScript", "Python"],
        desc: "Project focused on medical data visualization and interactive charting for medical staff.",
        "jp-desc": "医療従事者向けのデータ視覚化および対話型チャートに焦点を当てた企画です。",
        link: "#"
    },
    {
        id: '3',
        year: '2026',
        name: "New Project",
        "jp-name": "新規プロジェクト",
        tech: ["TypeScript", "Tailwind"],
        desc: "New Project in the works",
        "jp-desc": "現在、新たなプロジェクトを鋭意開発中です。",
        link: "#"
    },
];

export function ProjectsGallery({ language }) {

    const isJapanese = language === 'ja';
    
    return (
        <div className="projects-wrapper">
            <h2 className="Project-title">
                {isJapanese ? "制作実績" : "Projects Portfolio"}
            </h2>
            <div className="project-grid">
                {projects.map(({ id, year, name, "jp-name": jpName, tech, desc, "jp-desc": jpDesc, link }) => (
                    <a key={id} href={link} className="project-card">
                        <div className="project-content">
                            <h3>
                                {isJapanese ? jpName : name} 
                                <span className="title-date">— {year}</span>
                            </h3>
                            <p>{isJapanese ? jpDesc : desc}</p>

                            <div className="icon-container">
                                {tech.map((item) => (
                                    <span key={item} className="tech-icon">
                                        {techIcons[item] || item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}