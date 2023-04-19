import Markdown from "markdown-to-jsx";
import { CSSProperties } from "react";
import { Paragraph } from "shared/ui/paragraph";
import { Subtitle } from "shared/ui/subtitle";
import { Title } from "shared/ui/title";

type Props = {
  children: string,
  style?: CSSProperties
}

const CustomMarkdown = ({children, style}: Props) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: { component: Title },
          h2: { component: Subtitle },
          p: { component: Paragraph }
        }
      }}
      style={style}
    >
      {children}
    </Markdown>
  )
}

export default CustomMarkdown;