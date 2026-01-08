import './about.css';

export function About() {
    return (
        <section id="about" className="about-section">
            <p className="about-text">
                I am a developer from <span className="highlight">Nanaimo, BC, Canada</span>. 
                I am currently enrolled at <span className="highlight">Vancouver Island University</span> and 
                my passion is developing applications for my community and colleagues. 
                My favourite hobbies are studying Japanese, cooking, working out, and bugging my friends.
            </p>

            <p className="about-text">
                Building with the idea of <span className="highlight">scalability and practical design</span> are 
                what drives me to improve my skills as a developer. I push myself to grow my technical stack 
                and remain adaptable and flexible.
            </p>

            <p className="about-text">
                Currently, I am <span className="highlight">looking for work opportunities</span> and have been 
                steadily honing my skills through personal and research projects. If you would like to see 
                some of my contributions, feel free to check out my projects or my GitHub. 
                If you would like to contact me, consider sending me an email by clicking the mail icon.
            </p>
        </section>
    );
}