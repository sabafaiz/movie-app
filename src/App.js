import './App.css';
import Topbar from './components/global/Topbar';
import SideNav from './components/global/SideNav';
import Discover from './components/discover/Discover';
import { Routes, Route } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  return (

    <div className="app">
    <ProSidebarProvider>
    <SideNav />
    </ProSidebarProvider>
  
      <main className='content' >
        <Topbar />
        <Routes>
          <Route path='/' element={<Discover />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
