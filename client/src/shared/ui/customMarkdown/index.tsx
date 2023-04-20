import style from './style.module.scss'
import Markdown from "markdown-to-jsx";
import { CSSProperties } from "react";
import { Paragraph } from "shared/ui/paragraph";
import { Subtitle } from "shared/ui/subtitle";
import { Title } from "shared/ui/title";

type Props = {
  children?: string,
  style?: CSSProperties,
  className?: string
}

const CustomMarkdown = (props: Props) => {
  return (
    <div className={`${style['md-viewer']} ${props.className}`} >
      <Markdown
        options={{
          overrides: {
            h1: { component: Title },
            h2: { component: Subtitle },
            p: { component: Paragraph }
          }
        }}
        style={props.style}
      >
        {props.children ?? ''}
      </Markdown>
    </div>
  )
}

export default CustomMarkdown;