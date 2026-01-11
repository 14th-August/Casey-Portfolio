import { useState } from 'react';
import { SideBar } from './left-components/Sidebar';
import { Clock } from './right-components/clock';
import { About } from './right-components/About';
import { Navbar } from './right-components/navbar';
import { ProjectsGallery } from './right-components/Project';
import './App.css';

export function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
    };

  const renderContent = () => {
    switch (activeTab) {
      case 'about': return <About language={language} />;
      case 'projects': return <ProjectsGallery language={language} />;
      default: return <About language={language} />;
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <SideBar language={language} onToggleLanguage={toggleLanguage}/>

        <main className="main-content">
          <header className="top-bar">
            <Clock language={language} />
          </header>

          <div className="content">
            <section className="content-section">
              {renderContent()}
            </section>
          </div>

          <div className="navbar-container">
            <Navbar activeId={activeTab} setActiveId={setActiveTab} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;