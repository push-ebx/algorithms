import React from "react";
import MDEditor from '@uiw/react-md-editor';
import CustomMarkdown from "entities/customMarkdown"

export default function Test() {
  const [value, setValue] = React.useState(`
# Двоичная куча
Куча (англ. heap) — абстрактная структура данных, поддерживающая следующие операции:

- Нахождениеминимума.
- Удаление минимума.
- Добавление нового элемента в кучу.

Другое название, лучше отражающее функциональность — очередь с приоритетами (англ. priority queue).

Кучи используются во многих алгоритмах. Например, кучи используются в алгоритмах поиска кратчайшего пути, а также с помощью кучи можно проводить сортировку (путём превращения массива в кучу, а кучу в отсортированный массив).

## Устройство двоичной кучи
Двоичная куча (пирамида, сортирующее дерево, англ. binary heap) — реализация очереди с приоритетами, использующая корневое дерево, для которого выполнены три условия:
1. Значение в любой вершине не больше, чем значения её потомков.
2. У любой вершины не более двух сыновей.
3. Слои заполняются последовательно сверху вниз и слева направо, без «дырок».

Заметим, что двоичная куча строится неоднозначно: например, значения сыновей, которые являются листами, всегда можно менять местами. Фиксирована только сама структура и предикат «родитель не больше детей».
`);
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