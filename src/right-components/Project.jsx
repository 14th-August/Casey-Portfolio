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
  "Python": <SiPython title="Python"/>,
  "Vite": <SiVite title="Vite" />
};

const projects = [
  { 
    id: '1', 
    year: '2026',
    name: "This Website", 
    tech: ["React", "HTML", "CSS", "Vite"], 
    desc: "First iteration of my website and incorporated using React and Vite. Will be updating overtime.", 
    link: "#" 
  },
  { 
    id: '2', 
    year: '2026',
    name: "Mediform Visualizations", 
    tech: ["React", "TypeScript", "Python"], 
    desc: "Project focused on medical data visualization and interactive charting for medical staff.", 
    link: "#" 
  },
  { 
    id: '3', 
    year: '2026',
    name: "New Project", 
    tech: ["TypeScript", "Tailwind"], 
    desc: "New Project in the works", 
    link: "#" 
  },
];

export function ProjectsGallery() {
  return (
    <div className="projects-wrapper">
      <h2 className="Project-title">Projects Portfolio</h2>
      <div className="project-grid">
        {projects.map(({ id, year, name, tech, desc, link }) => (
          <a key={id} href={link} className="project-card">
            <div className="project-content">
              <h3>
                {name} <span className="title-date">— {year}</span>
              </h3>
              <p>{desc}</p>
              
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