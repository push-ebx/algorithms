import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.scss'
import {getAllByCategories} from 'shared/api/articles';
import {Article, ArticleByCategory} from 'shared/model';
import { Link } from 'react-router-dom';

type Props = {
  show: boolean,
  setShow: ActionCreatorWithPayload<any, "offCanvas/setShowOffCanvas">,
  body?: ReactNode,
  className?: string,
}

export const CustomOffCanvas = (props: Props) => {
  const [articles, setArticles] = useState<ArticleByCategory[]>([])

  const fetchArticles = async () => {
    const res = await getAllByCategories()
    res && setArticles(res)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const dispatch = useDispatch()
  
  return (
    <>
      <Offcanvas 
        show={props.show}
        onHide={() => dispatch(props.setShow(false))}
        className={style.main}
      >
        <Offcanvas.Header closeButton className={style.header}>
          <Offcanvas.Title>
            <Link
              onClick={() => dispatch(props.setShow(false))} 
              to={"/"}
            >
              Содержание
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={style.off_canvas_body}>
          {/*хфывхфхафхывхыфхывфххфывхфхафхывхыфхывфххфывхфхафхывхыфхывфххфывхфхафхывхыфхывфх*/}
          <Accordion defaultActiveKey={""} flush alwaysOpen className={style.accordion}>
            {
              Object.entries(articles).map(([key, category]) => (
                <Accordion.Item eventKey={key} className={style.accordion_item}>
                  <Accordion.Header className={style.accordion_header}>
                    {key}
                  </Accordion.Header>
                  <Accordion.Body className={style.accordion_body}>
                    {
                      Object.entries(category).map(([key, sub_articles]) => {
                        return (
                          <Accordion defaultActiveKey={""} flush alwaysOpen className={style.accordion}>
                            <Accordion.Item eventKey={key} className={style.accordion_item}>
                                <Accordion.Header className={style.accordion_header}>
                                  {key}
                                </Accordion.Header>
                                <Accordion.Body className={style.accordion_body}>
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
                                </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        )
                      })
                    }
                  </Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}