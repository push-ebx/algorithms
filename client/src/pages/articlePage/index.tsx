import axios from "axios";
import style from "./style.module.scss"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomMarkdown, Loader } from "shared/ui"
import { getArticleByTitle } from "shared/api/articles"

const ArticlePage = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const fetchArticle = async () => {
    const title = searchParams.get('title')

    if (title) {
      const res = await getArticleByTitle(title)
      const url = res?.file_url

      return url && axios.get(url).then(res => {
        setIsLoading(false)
        return setValue(res.data)
      })
    }
    setValue('# Page not found')
  }

  useEffect(() => {
    setIsLoading(true)
    fetchArticle()    
  }, [searchParams])

  return (
    <div className={style.page}>
      { value && !isLoading ?
        (<div className={style.article}>
          <CustomMarkdown>
            {value}
          </CustomMarkdown>
        </div>)
      : (
        <Loader className={style.loader}/>
      )}
    </div>
  );
}

export default ArticlePage