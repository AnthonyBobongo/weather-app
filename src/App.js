import React from 'react';
const api = {
  key: '9a0429b772c25562bf00a19bed94eef5',
  base: 'https://api.openweathermap.org/data/2.5/'
}


function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input
          type ='text'
          className='search-bar'
          placeholder='Search..'/>

        </div>
      </main>
    
    </div>
  );
}

export default App;
