import React, { useEffect } from "react";
import style from './style.module.scss'
import { Button } from "shared/ui/Button"
import CustomMarkdown from "shared/ui/customMarkdown"
import CustomMDEditor from "shared/ui/customMDEditor"
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { getArticleByTitle } from 'shared/api/articles';

const EditPage = () => {
  const [value, setValue] = React.useState<string | undefined>();
  const [searchParams] = useSearchParams();

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
        <Button>Save the draft</Button>
        <Button>Post</Button>
      </nav>
    </div>
  );
}
 
export default EditPage;