import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  show: boolean,
  setShow: ActionCreatorWithPayload<any, "offCanvas/setShowOffCanvas">,
  body?: ReactNode
}

export const CustomOffCanvas = (props: Props) => {
  const dispatch = useDispatch()
  
  return (
    <>
      <Offcanvas show={props.show} onHide={() => dispatch(props.setShow(false))}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.body}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}