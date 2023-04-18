import React, { useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import CustomMarkdown from "entities/customMarkdown"
import { storage } from "shared/config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function Test() {
  const [value, setValue] = React.useState('# 123');
  const imagesListRef = ref(storage, "articles/testArticle.md");
  
  useEffect(() => {
    getDownloadURL(imagesListRef).then((url) => {
      //@ts-ignore
      axios.get(url, { crossDomain: true }).then(res => setValue(res.data))
    })
  }, [])

  return (
    <div style={{background: "var(--background-page-color)", transition: 'background 0.4s ease', height: "100vh"}}>
      <div className="container" style={{display: 'flex', columnGap: 20}}>
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
          <CustomMarkdown
            style={{}}
          >
            {value}
          </CustomMarkdown>
        </div>
      </div>
    </div>
  );
}