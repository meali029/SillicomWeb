import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div style={{ backgroundColor: color, color:'white',width: '93rem', height: '100vh', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
        <div style={{  width: '33rem', height: '10vh', display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
           <button onClick={()=>setColor('red')
           }>Red </button>
           <button onClick={()=>setColor('Black')
           } > Black</button>
           <button onClick={()=>setColor('Green')
           }>Green</button>
           <button onClick={()=>setColor('Blue')
           }>Blue</button>
        </div>
      </div>
    </>
  );
}

export default App;
