import { useState } from 'react';
import { SideBar } from './left-components/Sidebar';
import { Clock } from './right-components/clock';
import { About } from './right-components/About';
import './App.css'

function App() {
  <title>Welcome to My Website!</title>
  const [isTokyo, setIsTokyo] = useState(false);

  return (
    <div className="app-container">
        <SideBar 
          isTokyo={isTokyo}
          toggleTimezone={() => setIsTokyo(!isTokyo)}
        />

        <main className="main-content">
            <header className="top-bar">
                <Clock isTokyo={isTokyo} />
            </header>
            
            <section id="about" className="content-section">
                <About />
            </section>

            <section id="experience" className="content-section">
            </section>

            <section id="projects" className="content-section">
            </section>
          </main>
    </div>
  );
}

export default App
