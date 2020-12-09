import React from 'react';
import { Table, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { ParseTableTodoList } from '../common/table';
import { TodoAddNewModal } from '../common/modal';

export const TodoView = ({
        formik,
        todoList,
        filter,
        modalVisibility,
        handleFilter,
        handleModalVisibility,
        handleDeleteTodo,
        handleMarkAsApproved
    }) => {

    return (
    <>
        <TodoAddNewModal
            formik={formik}
            modalVisibility={modalVisibility}
            handleModalVisibility={handleModalVisibility}
        />
        <h1>Todo <Button variant="outline-primary" onClick={() => handleModalVisibility('insert')}>Add New</Button></h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>
                        <DropdownButton id="dropdown-basic-button" title="ID" onSelect={handleFilter}>
                            <Dropdown.Item href="#/allTask">All Task</Dropdown.Item>
                            <Dropdown.Item href="#/pending">Pending</Dropdown.Item>
                            <Dropdown.Item href="#/completed">Completed</Dropdown.Item>
                        </DropdownButton>
                    </th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <ParseTableTodoList
                    todoList={todoList}
                    filter={filter}
                    handleDeleteTodo={handleDeleteTodo}
                    handleMarkAsApproved={handleMarkAsApproved}
                />
            </tbody>
        </Table>
    </>
    )
};
