import './styles/index.scss';
import {useEffect} from "react";
import Test from 'test';

export default function App() {
  useEffect(() => {
    document.title = "Algs | Двоичная куча"; // from store
  }, [])
  return (
    <div className="App">
      <Test />
    </div>
  );
}