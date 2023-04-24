import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ReactNode, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import style from './style.module.scss'
import { getAllArticles } from 'shared/api/articles';
import { Article } from 'shared/model';
import { Link } from 'react-router-dom';

type Props = {
  show: boolean,
  setShow: ActionCreatorWithPayload<any, "offCanvas/setShowOffCanvas">,
  body?: ReactNode,
  className?: string,
}

export const CustomOffCanvas = (props: Props) => {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchArticles = async () => {
    const res = await getAllArticles()
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
          <Offcanvas.Title>Содержание</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={style.body}>
          <ul style={{display: 'flex', flexDirection: 'column'}}>
            {
              articles.map(article => {
                return (
                  <li>
                    <Link
                      key={article.id}
                      to={`/article?title=${article.title}`}
                      onClick={() => dispatch(props.setShow(false))}
                    >
                      {article.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}