import { Button } from "./components/Button.jsx";
import './App.css';

export function App() {
  return (<>
    <Button initIsLiked={true}>
      <strong>Me gusta esto</strong>
    </Button>
    <Button initIsLiked={false}>
      <strong>Me gusta</strong>
    </Button>
    <Button initIsLiked={false} bcolor="aquamarine">
      <strong>Me gusta</strong>
    </Button>
  </>)
}
