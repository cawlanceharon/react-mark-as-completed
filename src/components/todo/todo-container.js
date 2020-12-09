import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './todo-redux'
import { TodoView } from "./todo-view";
import { useFormik } from 'formik';

export const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [increment, setIncrement] = useState(3)
  const [filter, setFilter] = useState(false)
  const [modalVisibility, setModalVisibility] = useState({
    insert: false
  })

  useEffect(() => {
    setTodoList([
      {
        id: 1,
        task_name: 'Task 1',
        is_done: false
      },
      {
        id: 2,
        task_name: 'Task 2',
        is_done: true
      },
      {
        id: 3,
        task_name: 'Task 3',
        is_done: false
      }
    ])
  }, [])

  const formik = useFormik({
    initialValues: {
      task_name: ''
    },
    onSubmit: values => {
      setTodoList(prev => ([
        ...prev,
        {
          id: increment + 1,
          task_name: values.task_name,
          is_done: false
        }
      ]))

      setIncrement(increment + 1)
      handleModalVisibility('insert')
    },
  });

  const handleMarkAsApproved = (id) => {
    let parseTodoList = todoList.map((item, i) => {
      if (id == i + 1) {
        return { ...item, is_done: true };
      } else {
        return item;
      }
    });
    setTodoList(parseTodoList);
  }

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  const handleModalVisibility = (name) => {
    setModalVisibility(prev => ({
      ...prev,
      [name]: !modalVisibility[name]
    }))
  }

  const handleFilter = (e) => {
    setFilter(e)
  }

  return (
    <>
      <TodoView
        formik={formik}
        todoList={todoList}
        filter={filter}
        modalVisibility={modalVisibility}
        handleFilter={handleFilter}
        handleModalVisibility={handleModalVisibility}
        handleDeleteTodo={handleDeleteTodo}
        handleMarkAsApproved={handleMarkAsApproved}
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)