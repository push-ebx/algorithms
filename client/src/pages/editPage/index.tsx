import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import style from './style.module.scss'
import { Button, CustomMarkdown, CustomMDEditor, Modal, Input } from "shared/ui"
import { Article } from "shared/model";
import { createArticle, getArticleByTitle } from 'shared/api/articles';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "shared/config/firebase";
import axios from 'axios';
import { CustomModal } from "./modal";

const EditPage = () => {
  const [value, setValue] = useState<string | undefined>();
  const [article, setArticle] = useState<Article>()
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const uploadArticle = () => {
    if (!value) return;

    const file = new Blob([value], { type: 'application/octet-stream' });
    const fileRef = ref(storage, `articles/${article?.title}.md`);

    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((file_url) => {
        if (article?.title && article?.author && article?.category) {
          const _article = {file_url, ...article}
          fetchCreateArticle(_article)
        }
      });
    });
  }

  const fetchCreateArticle = async (_article: Article) => { 
    const res = await createArticle(_article)
    console.log(res);
  }
  
  const fetchArticle = async () => {
    const title = searchParams.get('title')
    
    if (title) {
      const res = await getArticleByTitle(title)
      const url = res?.file_url

      if (url) {
        return axios.get(url).then(res => setValue(res.data))
      }
      return setValue('# Page not found')
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  const saveDraw = () => {
    if (article?.title && article?.author && article?.category) {
      uploadArticle()
      setModalActive(false)
    }
  }

  return (
    <div className={style.editor}>
      <div className={style.main}>
        <CustomMDEditor
          value={value}
          setValue={setValue}
          className={style['md-editor']}
        />

        <CustomMarkdown
          className={style['md-viewer']}
        >
          {value}
        </CustomMarkdown>
      </div>

      <nav className={style.navbar}>
        <Button 
          onClick={() => setModalActive(true)}
        >
          Сохранить черновик
        </Button>
        <Button>Опубликовать</Button>
      </nav>

      <CustomModal 
        modalActive={modalActive}
        setModalActive={setModalActive}
        setArticle={setArticle}
        saveDraw={saveDraw}
      />
    </div>
  );
}
 
export default EditPage;