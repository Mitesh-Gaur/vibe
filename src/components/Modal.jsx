import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 700,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Modal = ({
  children,
  modalOpen,
  modalTitle,
  modalSubTitle,
  modalSubmitLabel,
  handleClose,
  handleSubmit,
  modalSubTitleStyle,
  modalTitleStyle,
  modalSubmitButtonStyle
}) => {

  return (
    <Backdrop onClick={handleClose}>
      {modalOpen ? <motion.div
        onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
        className="modal orange-gradient relative"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <div className="flex items-center justify-between p-4">
            <ModalTitle
              text={modalTitle}
              modalSubTitle={modalSubTitle}
              modalTitleStyle={modalTitleStyle}
              modalSubTitleStyle={modalSubTitleStyle}
            />
            <ModalButton onClick={handleClose} label="Close" />
          </div>
          <hr />
          {children}
          <ModalSubmitButton
            onClick={handleSubmit}
            label={modalSubmitLabel}
            modalSubmitButtonStyle={modalSubmitButtonStyle}
          />
        </div>
      </motion.div> : null}
    </Backdrop>
  );
};

const ModalSubmitButton = ({ onClick, label, modalSubmitButtonStyle }) => (
  <div className="p-4 pt-0">
    <motion.button
      className={`modal-button px-4 py-2 rounded ${!modalSubmitButtonStyle ? 'bg-gray-900' : modalSubmitButtonStyle}`}
      type="button"
      onClick={onClick}
    >
      <span className="text-white font-bold">{label}</span>
    </motion.button>
  </div>
)

const ModalTitle = ({ text, modalSubTitle, modalTitleStyle, modalSubTitleStyle }) => (
  <div className="modal-title">
    <h3 className={`text-gray-900 font-bold leading-7 ${modalTitleStyle}`}>{text}</h3>
    {!!modalSubTitle && <h4 className={`text-gray-600 ${modalSubTitleStyle}`}>{modalSubTitle}</h4>}
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-close-button ml-auto"
    type="button"
    onClick={onClick}
  >
    <svg version="1.1" className="w-4 h-3"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="11"
        x2="11" y2="1"
        stroke="black"
        strokeWidth="2" />
      <line x1="1" y1="1"
        x2="11" y2="11"
        stroke="black"
        strokeWidth="2" />
    </svg>
  </motion.button>
);

export default Modal;