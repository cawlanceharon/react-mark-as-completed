import React from 'react';
import {Button} from 'react-bootstrap';

const EmptyTable = () => {
    return (
        <tr>
            <td colSpan="4">Todo's Are All Done</td>
        </tr>
    );
};

const ParseHidden = (filter, data) => {
    switch (filter) {
        case '#/allTask':
            return false;
        case '#/pending':
            return (!data.is_done) ? false : true;
        case '#/completed':
            return (data.is_done) ? false : true;
        default:
            return false;
    }
}

export const ParseTableTodoList = ({
    todoList,
    filter,
    handleDeleteTodo,
    handleMarkAsApproved
}) => {
    return (!todoList.length) ? <EmptyTable /> : (todoList.map((data, i) => (
        <tr key={i} hidden={ParseHidden(filter, data)}>
            <td>{data.id}</td>
            <td>{data.task_name}</td>
            <td>
                {data.is_done && 'Completed'}
                {!data.is_done && 'Pending'}
            </td>
            <td>
                <Button variant="outline-danger" onClick={() => handleDeleteTodo(data.id)}>Delete</Button> &nbsp;
                {!data.is_done && <Button variant="outline-primary" onClick={e => {handleMarkAsApproved(data.id)}}>Mark As Completed</Button>}
            </td>
        </tr>
    )))
};