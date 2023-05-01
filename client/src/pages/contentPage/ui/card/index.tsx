import { Article, ArticleByCategory } from 'shared/model';
import style from './style.module.scss'
import { Link } from 'react-router-dom';
import { Subtitle } from 'shared/ui';
 
type Props = {
  category: ArticleByCategory,
  className?: string,
  name: string
}

export const Card = ({category, ...props}: Props) => {
  return (
    <div className={`${style.card} ${props.className}`}>
      <Subtitle className={style.subtitle}>{props.name}</Subtitle>
      {
        Object.entries(category).map(([key, sub_articles]) => {
          return (
            <div
              key={key}
            >
              <Subtitle className={style.subsubtitle}>{key}</Subtitle>
              <ul>
              {
                sub_articles.map((article: Article) => {
                  return (
                    <li key={article.id}>
                      <Link
                        to={`/article?title=${article.title}`}
                        className={style.link}
                      >
                        {article.title}
                      </Link>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};