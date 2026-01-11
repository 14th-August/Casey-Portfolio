import './about.css';

const content = {
    en: {
        p1: <>
        I am a developer from <span className="highlight">Nanaimo, BC, Canada.</span> I am currently enrolled at Vancouver Island University and my passion is developing applications for my community and colleagues. 
        My favourite hobbies are studying Japanese, cooking, working out, and bugging my friends.</>,
        p2: <>Building with the idea of <span className="highlight">scalability and practical design</span> are what drives me to improve my skills 
        as a developer. I push myself to grow my technical stack and remain adaptable and flexible.</>,
        p3: <>Currently, I am <span className="highlight">looking for work opportunities</span> and have been steadily honing my skills through personal and research projects. If you would like to see some of my contributions, 
        feel free to check out my projects or my GitHub. If you would like to contact me, 
        consider sending me an email by clicking the mail icon.</>
    },
    ja: {
        p1: <>私は<span className="highlight">カナダのナナイモ</span>出身のデベロッパーです。現在、<span className="highlight">バンクーバーアイランド大学</span>に在学しており...</>,
        p2: <><span className="highlight">拡張性と実用的なデザイン</span>という考えを大切に、開発者としてのスキルを磨いています...</>,
        p3: <>現在、<span className="highlight">お仕事を探しており</span>、個人プロジェクトや研究を通じて着実にスキルを向上させています...</>
    }
};

export function About({ language }) {
    const t = content[language];

    return (
        <section id="about" className="about-section">
            <p className="about-text">{t.p1}</p>
            <p className="about-text">{t.p2}</p>
            <p className="about-text">{t.p3}</p>
        </section>
    );
}