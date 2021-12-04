import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const EnhancedModal = ({
  title,
  open,
  onClose,
  onSubmit,
  btn1,
  btn2,
  isBtn2 = true,
  children,
}) => {
  return (
    <Modal isOpen={open} toggle={onClose}>
      <ModalHeader toggle={onClose}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onClose}>
          {btn1}
        </Button>
        {isBtn2 === true && (
          <Button color="primary" onClick={onSubmit}>
            {btn2}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};
