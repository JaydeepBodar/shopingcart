import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import classes from "./Modal.module.css";
import { cartaction } from "../store/cardreducer";
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(cartaction.toggle());
  };
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  console.log(props);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
