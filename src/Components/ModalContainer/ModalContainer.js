import React, { useState } from "react";
import Modal from "./Modal";

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={openModal}>Opne Modal</button>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is content of modal component</p>
        </Modal>
      </div>
    </>
  );
};

export default ModalContainer;
