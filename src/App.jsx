import { useState } from 'react';
import { SideBar } from './components/Sidebar';
import { Clock } from './components/clock';
import './App.css'

function App() {
  <title>Welcome to My Website!</title>
  const [isTokyo, setIsTokyo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="App">
        <SideBar 
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          toggleTimezone={() => setIsTokyo(!isTokyo)}
        />

        <main className="main-content">
            <header className="top-bar">
          <Clock isTokyo={isTokyo} />
        </header>
        
        </main>
    </div>
  );
}

export default App
