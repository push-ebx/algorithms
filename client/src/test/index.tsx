import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import CustomMarkdown from "shared/ui/customMarkdown"
import { storage } from "shared/config/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import axios from "axios";
import { Loader } from "shared/ui/loader";
import { getArticleByTitle } from "shared/api/articles"
import { useSearchParams } from "react-router-dom";

export default function Test() {
  const [value, setValue] = useState<string | null>(null);
  // const imagesListRef = ref(storage, "articles/testArticle.md");
  let [searchParams] = useSearchParams();

  useEffect(() => {

    // const fetch = async () => {
    //   const res = await getArticleByTitle(searchParams.get('title')!)
    //   const url = res?.data?.file_url
    //   if (url) {
    //     axios.get(url).then(res => setValue(res.data))
    //   } else {
    //     setValue('# Page not fonud')
    //   }
    // }

    // fetch().catch(e => console.log(e))
    
    // getDownloadURL(imagesListRef).then((url) => {
    //   //@ts-ignore
    //   axios.get(url).then(res => setValue(res.data))
    // })
  }, [])

  return (
    <div style={{background: "var(--background-page-color)", transition: 'background 0.4s ease', height: "100vh"}}>
      { value ? 
      (<div className="container" style={{display: 'flex', columnGap: 20}}>
        {/* <MDEditor
          value={value}
          //@ts-ignore
          onChange={setValue}
          data-color-mode="light"
          preview='edit'
          
          height={window.innerHeight}
          style={{
            width: '50%'
          }}
        /> */}
        {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
        <div style={{
            maxWidth: 750, 
            margin: '30px auto',
            transition: 'background 0.4s ease',
            padding: 25,
            boxSizing: 'border-box', 
            background: "var(--background-article-color)", 
            borderRadius: 5
        }}>
          <CustomMarkdown>
            {value}
          </CustomMarkdown>
        </div>
      </div>)
      : (
        <Loader style={{position: 'absolute', top: '50%', left: '50%'}}/>
      )}
    </div>
  );
}