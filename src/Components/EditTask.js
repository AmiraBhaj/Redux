import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../redux/action";

const EditTask = ({ Task }) => {
  // Modal bootstrap :
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Changements faits au Modal :

  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(Task.text);

  const handleEdit = () => {
    dispatch(edit(Task.id, editTask));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Please edit your task below : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            placeholder={Task.text}
            onChange={(e) => setEditTask(e.target.value)}
            value={editTask}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
