import Css from './Css';
import { css, globalCss, keyframes, styled } from './stitches.config';

const globalStyles = globalCss({
  body: { background: 'orange' },
});

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' },
});
const Keyframe = styled('button', {
  '&:hover': { animation: `${scaleUp} 200ms` },
});

function App() {
  return (
    <div className="App">
      <Theme>Theme</Theme>
      <Media>Media</Media>
      <Util>Util</Util>
    </div>
  );
}

const Theme = styled('div', {
  border: '1px solid black',
  color: '$gray400',
  width: '$blockSize',
  borderRadius: '$radius',
});

const Media = styled('div', {
  '@mobile': { background: 'red' },
  '@tableSm': { background: 'blue' },
  '@tableLg': { background: 'yellow' },
  '@desktop': { background: 'green' },
});

const Util = styled('div', {
  border: '1px solid black', // 여기는 Util로 못만드나
  paddingX: 50,
  paddingY: '100px',
  color: 'green',
});

export default App;
