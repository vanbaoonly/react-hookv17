import { useState, useEffect } from 'react';
import "./Todo.scss"
import ListTodo from './ListTodo';
const Todo = (props) => {

    let [listTodo, setlistTodo] = useState([
        { id: "1", name: " name 1" },
        { id: "2", name: " name 2" },
        { id: "3", name: " name 3" },

    ])
    let [AddTodo, setAddTodo] = useState('')
    let [IdCounter, setIdCounter] = useState(4);

    useEffect(() => {
        console.log('run del')

    }, [listTodo]) // chỉ khi giá trị bên trong [] thay đổi thì nó sẽ thực thi
    useEffect(() => {
        console.log('run add')

    }, [AddTodo]) // chỉ khi giá trị bên trong [] thay đổi thì nó sẽ thực thi

    const ClickAddNewTodo = () => {
        if (AddTodo) {

            let Addnew = { id: IdCounter, name: AddTodo }
            console.log(Addnew)
            setlistTodo([...listTodo, Addnew])
            setAddTodo('');
            setIdCounter(IdCounter + 1)

        } else {
            alert("vui long nhap")
            return;
        }

    }
    const OnchangeInput = (event) => {
        setAddTodo(event.target.value)
    }
    const Del = (id) => {
        setlistTodo(listTodo.filter(item => item.id !== id))
        // console.log(" list -", listTodo)
    }
    return (
        <div className='Todo_App'>

            <div className='container_todo'>
                <h1>TO DO APP</h1>
                <div className='top_todo'>
                    <input className='group' type='text' value={AddTodo} onChange={(event) => OnchangeInput(event)} />
                    <button className='group' onClick={() => ClickAddNewTodo()}> + Add New</button>

                </div>

                <ListTodo listTodo={listTodo} Del={Del} />
            </div>
        </div >
    );
}

export default Todo;