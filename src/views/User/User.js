import "./User.scss";
import axios from "axios";
import { toast } from "react-toastify";
import useFetch from "../../custom_hook/fetchData";
import logo from "../logo.svg"
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUser from "./AddNewUser";
const User = (porps) => {

    let history = useHistory();
    let url = 'http://localhost:3000/data';
    const { data: DataUser, Loading, ErrorMes } = useFetch(url);

    let [NewData, setNewData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (DataUser && DataUser.length > 0) {
            let data = DataUser;
            setNewData(data);
            console.log("effect data :", data, ". datauser :", NewData)

        }

    }, [DataUser])

    const SuccessFull = (data) => {
        let dataUser = NewData;
        dataUser.unshift(data);

        setShow(false);
        setNewData(dataUser);
        console.log('add new:', NewData)
    }
    const View = (id) => {
        history.push(`/user/${id}`);
    }

    const Delete = (iddel) => {
        let data = DataUser;
        console.log('data1', data)
        let urldel = (`${url}/${iddel}`);
        let response = axios.delete(urldel);
        // if (response) {
        //     setNewData(data.filter(item => item.id !== iddel))

        // }

        // console.log('new', data)

    }
    return (
        <>
            <div className='from_user'>
                <div className="button-add">
                    <Button className="add" variant="primary" onClick={handleShow}>
                        &#43; ADD New
                    </Button>
                </div>
                <div className="container-card">
                    {
                        ErrorMes === false && Loading === false &&
                        DataUser && DataUser.length > 0 &&
                        DataUser.map((item) => {
                            return (
                                <div key={item.id} className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title"> <span>{item.id}</span> Name : {item.name}</h5>
                                        <p className="card-text">Job :  {item.job}</p>
                                        {/* <Link to={`/user/${item.id}`} className="btn btn-info card-link"> View</Link> */}
                                        <div className="btn-action">
                                            <button className="btn btn-primary" onClick={() => View(item.id)}>View</button>
                                            <button className="btn btn-danger" onClick={() => Delete(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {Loading === true &&
                    <div className='ctn-logoLoading'>
                        <img src={logo} className="Nav-logo" alt="logo" />
                        <label>Loading...</label>
                    </div>
                }
                {
                    ErrorMes === true &&
                    <span >not found 404</span>
                }
            </div >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >ADD NEW USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* component add new */}
                    <AddNewUser SuccessFull={SuccessFull} />
                </Modal.Body>

            </Modal>
        </>
    )
}


export default User;


