import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from 'shared/api/articles';

interface Article {
  title: string;
  author: string;
  file_url: string;
  category: string;
}

const Contents = () => {
  const [articles, setArticles] = useState<Article[]>([]) // внести интерфейс

  const fetchArticles = async () => {
    const res = await getAllArticles()
    const data = res?.data
    
    if (data) {
      setArticles(data)
    }   
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div>
      <h1>Content</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {
          articles.map(article => {
            return (
              // key -- id статьи
              <Link 
                key={article.title}
                to={`/article/edit?title=${article.title}`}
              >
                {article.title}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}
 
export default Contents;