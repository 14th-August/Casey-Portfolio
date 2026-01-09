import { useState } from 'react';
import { SideBar } from './left-components/Sidebar';
import { Clock } from './right-components/clock';
import { About } from './right-components/About';
import { Navbar } from './right-components/navbar';
import { ProjectsGallery } from './right-components/Project';
import './App.css';

function App() {
  const [isTokyo, setIsTokyo] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <ProjectsGallery />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <SideBar isTokyo={isTokyo} toggleTimezone={() => setIsTokyo(!isTokyo)} />

      <main className="main-content">
        <header className="top-bar">
          <Clock isTokyo={isTokyo} />
        </header>
        
        <div className="content">
          <section className="content-section">
            {renderContent()}
          </section>
        </div>

        <Navbar activeId={activeTab} setActiveId={setActiveTab} />
      </main>
    </div>
  );
}

export default App;