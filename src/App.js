import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';


function App() {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
