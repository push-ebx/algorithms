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

    var grid = document.querySelector('.grid');
    // @ts-ignore
    var msnry = new Masonry( grid, {
      gutter: 10,
      itemSelector: '.grid-item',
      columnWidth: 400
    });

    // init with selector
    // @ts-ignore
    // var msnry = new Masonry( '.grid', {
    //   // options...
    // });
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className={style.wrapper}>
      <Title className={style.title}>Содержание</Title>
      <div>
        {/*<div className={`grid ${style.cards}`} data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 400 }'>*/}
        {/*  {*/}
        {/*    Object.entries(articles).map(([key, category]) => {*/}
        {/*      return <Card key={key} className='grid-item' category={category} name={key}></Card>*/}
        {/*    })*/}
        {/*  }*/}
        {/*  {*/}
        {/*    Object.entries(articles).map(([key, category]) => {*/}
        {/*      return <Card key={key} className='grid-item' category={category} name={key}></Card>*/}
        {/*    })*/}
        {/*  }*/}
        {/*  {*/}
        {/*    Object.entries(articles).map(([key, category]) => {*/}
        {/*      return <Card key={key} className='grid-item' category={category} name={key}></Card>*/}
        {/*    })*/}
        {/*  }*/}
        {/*</div>*/}
        <div>
          {
            Object.entries(articles).map(([key, category]) => {
              return <Card key={key} className='grid-item' category={category} name={key}></Card>
            })
          }
        </div>
      </div>
    </div>
  );
}
 
export default Content;