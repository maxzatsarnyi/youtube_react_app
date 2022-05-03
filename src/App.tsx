import { Suspense } from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes } from './routes/index';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='app'>
        {/* HEADER */}
        {/* Sidebar */}
        {/* Recommended */}
        <Header />
        <div className='app__page'>
          <Sidebar />
          <div className='app__container'>
            <Routes />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
