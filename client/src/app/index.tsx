import './styles/index.scss';
import {useEffect} from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Test from 'test';
import Content from 'pages/Contents';
import Layout from "widgets/ui/Layout"

export default function App() {
  useEffect(() => {
    document.title = "Algs | Двоичная куча"; // from store
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="article" element={<Test />} />
          <Route path="*" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
}