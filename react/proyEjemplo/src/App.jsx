import { Button } from "./Button.jsx";
import './App.css';

export function App() {
  return (<>
    <Button initIsLiked={true}>
      <strong>Me gusta esto</strong>
    </Button>
    <Button initIsLiked={false}>
      <strong>Me gusta</strong>
    </Button>
  </>)
}
