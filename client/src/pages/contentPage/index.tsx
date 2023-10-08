import { useEffect, useState } from 'react';
import { getAllByCategories } from 'shared/api/articles';
import { ArticleByCategory } from 'shared/model';
import {Loader, Title} from 'shared/ui';
import style from "./style.module.scss"
import { Card } from './ui/card';

const Content = () => {
  const [articles, setArticles] = useState<ArticleByCategory[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArticles = async () => {
    setIsLoading(true)
    const res = await getAllByCategories()
    res && setArticles(res)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className={style.wrapper}>
      <Title className={style.title}>Содержание</Title>
      { !isLoading ?
        (<div className={style.cards}>
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
        </div>)
        : (
        <Loader className={style.loader}/>
      )}
    </div>
  );
}
 
export default Content;