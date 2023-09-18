import {useEffect, useState} from "react";
import {useSearchParams} from 'react-router-dom';
import style from './style.module.scss'
import {Button, CustomMarkdown, CustomMDEditor, CustomOffCanvas} from "shared/ui"
import {Article} from "shared/model";
import {createArticle, editArticle, getArticleByTitle} from 'shared/api/articles';
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "shared/config/firebase";
import axios from 'axios';
import {CustomModal} from "./modal";

const EditPage = () => {
  const [value, setValue] = useState<string | undefined>(); // сама статья
  const [article, setArticle] = useState<Article>()
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const uploadArticle = () => {
    if (!value) return; // надо что-то сказать

    const file = new Blob([value], {type: 'application/octet-stream'});
    const fileRef = ref(storage, `articles/${article?.title}.md`);

    uploadBytes(fileRef, file).then((snapshot) => { // выгружаем в хранилище
      getDownloadURL(snapshot.ref).then((file_url) => { // получаем ссылку на файл из хранилища
        const param_title = searchParams.get('title')
        if (param_title) { // редачим
          const _article: Article = {file_url, ...article}
          const res = fetchEditArticle(_article, param_title)
          console.log("edited")
        }
        else { // создаем
          const _article: Article = {file_url, ...article}
          const res = fetchCreateArticle(_article) // ???
        }
      });
    });
  }

  const fetchCreateArticle = async (_article: Article): Promise<string | undefined> => {
    return await createArticle(_article)
  }

  const fetchEditArticle = async (_article: Article, param_title: string): Promise<string | undefined> => {
    return await editArticle(_article, param_title)
  }

  const fetchArticle = async () => {
    const title = searchParams.get('title')

    try {
      if (title) {
        const res = await getArticleByTitle(title)
        const url = res?.file_url

        if (url) {
          setArticle(res)
          return axios.get(url).then(res => setValue(res.data))
        }
      }
    } catch (e) {
      console.log(e)
    }
    return setValue('# Page not found')
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
        article={article}
      />
    </div>
  );
}

export default EditPage;