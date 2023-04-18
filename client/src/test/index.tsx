import React, { useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import CustomMarkdown from "entities/customMarkdown"
import { storage } from "shared/config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { Loader } from "shared/ui/loader";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Test() {
  const [value, setValue] = React.useState(null);
  const imagesListRef = ref(storage, "articles/testArticle.md");
  
  useEffect(() => {
    getDownloadURL(imagesListRef).then((url) => {
      //@ts-ignore
      axios.get(url, { crossDomain: true }).then(res => setValue(res.data))
    })
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