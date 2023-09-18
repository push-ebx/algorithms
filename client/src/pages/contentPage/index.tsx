import { useEffect, useState } from 'react';
import { getAllByCategories } from 'shared/api/articles';
import { ArticleByCategory } from 'shared/model';
import { Title } from 'shared/ui';
import style from "./style.module.scss"
import { Card } from './ui/card';

const Content = () => {
  const [articles, setArticles] = useState<ArticleByCategory[]>([])
  // const [articlesByCategory, setArticlesByCategory] = useState<>()

  const fetchArticles = async () => {
    const res = await getAllByCategories()
    res && setArticles(res)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className={style.wrapper}>
      <Title className={style.title}>Содержание</Title>
        <div className={style.cards}>
          {
            Object.entries(articles).map(([key, category]) => (
              <Card key={key} category={category} name={key}></Card>
            ))
          }
          {
            Object.entries(articles).map(([key, category]) => (
              <Card key={key} category={category} name={key}></Card>
            ))
          }
          {
            Object.entries(articles).map(([key, category]) => (
              <Card key={key} category={category} name={key}></Card>
            ))
          }
        </div>
    </div>
  );
}
 
export default Content;