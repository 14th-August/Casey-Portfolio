import './project.css'

const projects = [
    { id: '1', name: "This Website", tech: ["React", "HTML", "CSS"], desc: "The very website you're viewing right now!", link: "#" },
    { id: '2', name: "Mediform Visualizations", tech: ["React"], desc: "Project I am working on.", link: "#"},
];

export function ProjectsGallery () {
    return (
        <div className="container">
            <h2>Previous Work</h2>

            <div className="project-grid">
                {projects.map(({ id, name, tech, desc, link }) => (
                    <a key={id} href={link} classname="project-card">
                        <h3>{name}</h3>
                        <p>{desc}</p>

                        <div className="tech-container">
                            {tech.map((item) => {
                                <span key={item} className="tech-tag">{item}</span>
                            })}
                        </div>
                    </a>
                ))}
                
            </div>       
        </div>
    );
} 