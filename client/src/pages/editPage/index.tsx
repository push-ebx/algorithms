import { useEffect, useState } from "react";
import style from './style.module.scss'
import { Button } from "shared/ui/Button"
import CustomMarkdown from "shared/ui/customMarkdown"
import CustomMDEditor from "shared/ui/customMDEditor"
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { create, getArticleByTitle } from 'shared/api/articles';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "shared/config/firebase";

const EditPage = () => {
  const [value, setValue] = useState<string | undefined>();
  // article: {} <Article> + id, author_id...
  const [title, setTitle] = useState<string | undefined>();
  const [author, setAuthor] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [subCategory, setSubCategory] = useState<string | undefined>();
  
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const uploadArticle = () => {
    if (!value) return;

    const file = new Blob([value], { type: 'application/octet-stream' });
    const fileRef = ref(storage, `articles/${title}.md`);

    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((file_url) => {
        if (title && author && category && file_url) {
          const article = {
            title,
            author,
            file_url,
            category: category + '/' + subCategory
          }

          // тут будет параметром принимать
          const fetchCreateArticle = async () => { 
            const res = await create(article)
            console.log(res?.data);
          }

          fetchCreateArticle()
        }
      });
    });
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await getArticleByTitle(searchParams.get('title')!)
      const url = res?.data?.file_url
      if (url) {
        axios.get(url).then(res => setValue(res.data))
      } else {
        setValue('# Page not fonud')
      }
    }

    fetch().catch(e => console.log(e))
  }, [])

  const saveDraw = () => {
    if (title && author && category && subCategory) {
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

      // разделить на ui/components
      <Modal
        handleClickClose={() => setModalActive(false)}
        handleClickOk={() => saveDraw()}
        active={modalActive}
        title={"Сохранение"}
      >
        <div className={style.fields}>
          <div>
            <span>Название:</span>
            <Input onChange={setTitle} placeholder="Введите название статьи..."/>
          </div>
          <div>
            <span>Автор:</span>
            <Input onChange={setAuthor} placeholder="Введите имя автора..."/>
          </div>
          <div>
            <span>Раздел:</span>
            <Input onChange={setCategory} placeholder="Выберите раздел..."/>
          </div>
          <div>
            <span>Подраздел:</span>
            <Input onChange={setSubCategory} placeholder="Выберите подраздел..."/>
          </div>
        </div> 
      </Modal>
    </div>
  );
}
 
export default EditPage;