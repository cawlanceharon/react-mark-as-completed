import React from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';

export const TodoAddNewModal = ({
  formik,
  modalVisibility,
  handleModalVisibility
}) => {
  return (
    <>
      <Modal show={modalVisibility.insert} onHide={() => handleModalVisibility('insert')}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="task_name">
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" placeholder="Task Name" onChange={formik.handleChange('task_name')} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};