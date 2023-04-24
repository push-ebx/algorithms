import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from 'shared/api/articles';
import { Article } from 'shared/model';

const Content = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchArticles = async () => {
    const res = await getAllArticles()
    res && setArticles(res)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div>
      <h1 style={{color: 'var(--text-color)', textAlign: 'center'}}>Content</h1>
      <ul style={{display: 'flex', flexDirection: 'column'}}>
        {
          articles.map(article => {
            return (
              <li>
                <Link
                  key={article.id}
                  to={`/article?title=${article.title}`}
                >
                  {article.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default Content;