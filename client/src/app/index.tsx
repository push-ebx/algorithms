import './styles/index.scss';
import {useEffect} from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Content from 'pages/contentPage';
import Layout from "widgets/ui/Layout"
import EditPage from 'pages/editPage/';
import ArticlePage from 'pages/articlePage';

export default function App() {
  useEffect(() => {
    document.title = "Algs | Двоичная куча"; // from store
  }, [])

  return (
    <div className="App" style={{height: '100%'}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="article/edit" element={<EditPage />} />
          <Route path="article/create" element={<EditPage />} />
          <Route path="*" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
}