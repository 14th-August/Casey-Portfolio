import './about.css';

const content = {
    en: {
        p1: <>
        I am a developer from <span className="highlight">Nanaimo, BC, Canada.</span> I am currently enrolled at <span className="highlight">Vancouver Island University</span> and my passion is developing applications for my community and colleagues. 
        My favourite hobbies are studying Japanese, cooking, working out, and bugging my friends.</>,
        p2: <>Building with the idea of <span className="highlight">scalability and practical design</span> are what drives me to improve my skills 
        as a developer. I push myself to grow my technical stack and remain adaptable and flexible.</>,
        p3: <>Currently, I am <span className="highlight">looking for work opportunities</span> and have been steadily honing my skills through personal and research projects. If you would like to see some of my contributions, 
        feel free to check out my projects or my GitHub. If you would like to contact me, 
        consider sending me an email by clicking the mail icon.</>
    },
    ja: {
        p1: <><span className="highlight">カナダのブリティッシュコロンビア州にあるナナイモ</span>出身のディべロッパーです。私は現在バンクーバーアイランド大学に在籍しています。コミュニティや同僚や会社のためにアプリを作ります。
        私の趣味は日本語の勉強、料理、運動、そして友達と出かけることです。</>,
        p2: <>実用的なデザインでアイディアを作ります。技術の向上のためにテックスタックを磨き、変化に柔軟に対応することを心がけています。</>,
        p3: <>現在、<span className="highlight">お仕事を探しており</span>、もしプロジェクトをご覧になりたい場合GitHubを確認してください。連絡を希望される方は、メールアイコンを確認してください</>
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