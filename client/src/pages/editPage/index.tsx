import React, { useEffect, useState } from "react";
import style from './style.module.scss'
import { Button } from "shared/ui/Button"
import CustomMarkdown from "shared/ui/customMarkdown"
import CustomMDEditor from "shared/ui/customMDEditor"
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { getArticleByTitle } from 'shared/api/articles';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";

const EditPage = () => {
  const [value, setValue] = useState<string | undefined>();
  const [searchParams] = useSearchParams();
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => { // вынести
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

      <Modal
        handleClickClose={() => setModalActive(false)}
        handleClickOk={() => setModalActive(false)}
        active={modalActive}
        title={"Сохранение"}
      >
        <div className={style.fields}>
          <div>
            <span>Название:</span>
            <Input placeholder="Введите название статьи..."/>
          </div>
          <div>
            <span>Автор:</span>
            <Input placeholder="Введите имя автора..."/>
          </div>
          <div>
            <span>Раздел:</span>
            <Input placeholder="Введите название раздела..."/>
          </div>
          <div>
            <span>Подраздел:</span>
            <Input placeholder="Введите название подраздела..."/>
          </div>
        </div> 
      </Modal>
    </div>
  );
}
 
export default EditPage;