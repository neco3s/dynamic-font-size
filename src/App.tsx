import './App.css';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
})

const textFontSizeState = selector({
  key: 'textFontSizeState',
  get: ({get}) => {
    const text = get(textState)
    const textLength = text.length
    if (textLength <= 8) {
      return "2rem";
    } else if (textLength <= 16) {
      return "1.5rem";
    } else if (textLength <= 24) {
      return "1rem";
    } else {
      return "0.8rem";
    }
  }
})

function App() {
  const [text, setText] = useRecoilState(textState)
  const fontSize = useRecoilValue(textFontSizeState)

  const addA = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (text.length > 27) {
      alert('Too long!')
      return
    }
    setText(text + 'A')
  }

  return (
    <div className="App">
      <div className="container">
        <span style={{fontSize: `${fontSize}`}}>{text}</span>
      </div>
      <button onClick={addA}>A</button>
    </div>
  );
}

export default App;
