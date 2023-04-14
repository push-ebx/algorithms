import React from "react";
import MDEditor from '@uiw/react-md-editor';
import Markdown from 'markdown-to-jsx';
import { Title } from "shared/ui/title";
import { Subtitle } from "shared/ui/subtitle";
import { Paragraph } from "shared/ui/paragraph";


export default function Test() {
  const [value, setValue] = React.useState(`
# Двоичная куча
Куча (англ. heap) — абстрактная структура данных, поддерживающая следующие операции:
Нахождение минимума.
Удаление минимума.
Добавление нового элемента в кучу.
Другое название, лучше отражающее функциональность — очередь с приоритетами (англ. priority queue).
Кучи используются во многих алгоритмах. Например, кучи используются в алгоритмах поиска кратчайшего пути, а также с помощью кучи можно проводить сортировку (путём превращения массива в кучу, а кучу в отсортированный массив).
## Устройство двоичной кучи
Двоичная куча (пирамида, сортирующее дерево, англ. binary heap) — реализация очереди с приоритетами, использующая корневое дерево, для которого выполнены три условия:
Значение в любой вершине не больше, чем значения её потомков.
У любой вершины не более двух сыновей.
Слои заполняются последовательно сверху вниз и слева направо, без «дырок».
Заметим, что двоичная куча строится неоднозначно: например, значения сыновей, которые являются листами, всегда можно менять местами. Фиксирована только сама структура и предикат «родитель не больше детей».
`);
  return (
    <div className="container" style={{display: 'flex', columnGap: 20}}>
      <MDEditor
        value={value}
        //@ts-ignore
        onChange={setValue}
        preview='edit'
        height={window.innerHeight}
        style={{
          width: '50%'
        }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      <Markdown
      options={{
        overrides: {
          h1: {
            component: Title
          },
          h2: {
            component: Subtitle
          },
          p: {
            component: Paragraph
          }
        }
      }}
        style={{
          width: '50%',
          padding: '0 50px'
        }}
      >
        {value}
      </Markdown>
    </div>
  );
}