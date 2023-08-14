import "./Todo.scss"



function ListTodo(props) {
    let { listTodo, Del } = props
    const btn_del = (id) => {
        Del(id)
    }
    const btn_edit = () => {
    }
    return (
        <>
            <div className='listtodo' >
                {listTodo.map((item) => {
                    return (
                        <div className='items_todo' key={item.id} >
                            <span> {item.id} : {item.name}</span> <span> <button onClick={() => btn_edit()} className='btn edit'>Edit</button> <button onClick={() => btn_del(item.id)} className='btn del'>Del</button></span>

                        </div>
                    )
                })}
            </div>

        </>
    );
}

export default ListTodo;