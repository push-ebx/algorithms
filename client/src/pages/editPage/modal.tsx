import { Dispatch, SetStateAction } from 'react';
import { Input, Modal } from 'shared/ui'
import style from './style.module.scss'
import { Article } from 'shared/model'

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  setModalActive: Dispatcher<boolean>,
  saveDraw: () => void,
  modalActive: boolean,
  setArticle: Dispatcher<Article | undefined>,
}

export const CustomModal = (props: Props) => {
  return (
    <Modal
      handleClickClose={() => props.setModalActive(false)}
      handleClickOk={() => props.saveDraw()}
      active={props.modalActive}
      title={"Сохранение"}
    >
      <div className={style.fields}>
        <div>
          <span>Название:</span>
          <Input
            onChange={title => props.setArticle(prev => ({...prev, title}))}
            placeholder="Введите название статьи..."
          />
        </div>
        <div>
          <span>Автор:</span>
          <Input
            onChange={author => props.setArticle(prev => ({...prev, author}))}
            placeholder="Введите имя автора..."
          />
        </div>
        <div>
          <span>Раздел:</span>
          <Input
            onChange={category => props.setArticle(prev => ({...prev, category}))}
            placeholder="Выберите раздел..."
          />
        </div>
        <div>
          <span>Подраздел:</span>
          <Input
            onChange={subcategory => props.setArticle(prev => ({...prev, subcategory}))}
            placeholder="Выберите подраздел..."
          />
        </div>
      </div>
    </Modal>
  )
}