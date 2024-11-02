import './App.css';
import { useMemo } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

const App = () => {

  return (
    <Stage width={800} height={600} options={{ background: 0x1099bb }}>
      <Container x={200} y={200}>
        <Text
          text="Hello World"
          anchor={0.5}
          x={220}
          y={150}
          style={
            new TextStyle({
              align: 'center',
              fill: '0xffffff',
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: '#E72264',
              dropShadowDistance: 6,
            })
          }
        />
      </Container>
    </Stage>
  );
};

export default App;