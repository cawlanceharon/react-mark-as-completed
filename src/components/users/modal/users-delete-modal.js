import React from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import Axios from "axios";

export const UsersDeleteModal = ({
                                  state,
                                  handleResetUsers,
                                  handleModalView,
                                  handleModalAlertView,
                                  handleRemoveUser
                                }) => {

  const handleDeleteUser = (data) => {
    Axios.delete('https://reqres.in/api/users/'+data.id).then(response => {
        handleRemoveUser(data.id)
        handleModalView('delete', false, false);
    });
  };

  return (
    <>
      <Modal show={state.modal.delete} onHide={() => handleModalView('delete', false, false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalView('delete', false, false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser(state.form)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};
