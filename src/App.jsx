import './App.css';

import { Stage, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useState } from 'react';
import ZoomImage from './ZoomImage';
import checker2 from './assets/checker2.png';
import checker3 from './assets/checker3.png';


const App = () => {
  const [zoomTargetX, setZoomTargetX] = useState(400)
  const [zoomTargetY, setZoomTargetY] = useState(300)

  return (
    <Stage width={800} height={600} options={{ background: 0x1099bb }}>
      <ZoomImage image={checker2} initialX={400} initialY={300} initialWidth={100} initialHeight={100} zoomX={zoomTargetX} zoomY={zoomTargetY} />

      <ZoomImage image={checker3} initialX={425} initialY={310} initialWidth={20} initialHeight={20} zoomX={zoomTargetX} zoomY={zoomTargetY}/>

      {/* <ZoomImage image={checker2} initialX={390} initialY={300} initialWidth={10} initialHeight={10} zoomX={zoomX} zoomY={zoomY}/> */}


      <Text text="+"
        x={zoomTargetX}
        y={zoomTargetY}
        anchor={0.5}
        isSprite={true}
        style={new TextStyle({
          align: 'center',
          fill: '#ff0000',
          fontSize: 32

        })}
      />
    </Stage>
  );
};

export default App;