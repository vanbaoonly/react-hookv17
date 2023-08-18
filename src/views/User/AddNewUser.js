import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./User.scss";
import axios from 'axios';
import { toast } from 'react-toastify';
function AddNewUser(props) {


    const [Name, setName] = useState('');
    const [Job, setJob] = useState('');


    const HandleSubmitADD = async () => {

        if (!Name) {
            return toast.error("name not entered !");
        }
        if (!Job) {
            return toast.error("Job not entered !");
        }
        let data = {
            name: Name,
            user_name: "user3",
            password: "1",
            email: "super@gmail.com",
            address: {
                street: "Tân Sơn",
                ward: "12",
                district: "Gò Vấp",
                city: "Hồ Chí minh"
            },
            phone: "0123456",
            job: Job
        };

        let response = await axios.post('http://localhost:3000/data', data);
        if (response && response.data) {
            toast.success("Success Add New");
            props.SuccessFull(response.data);

        } else {
            toast.error("cant add new")
        }
        console.log(">>> check response : ", response.data)
    }
    const Reset = () => {
        setName('');
        setJob('');
    }


    return (

        <div className="container-form-add">
            <div className="form">
                <div className='form_group'>
                    <label >Name:</label>
                    <input type="text"
                        value={Name}
                        onChange={(event) => setName(event.target.value)} placeholder='Name...' required />
                </div>
                <div className='form_group'>
                    <label >Job :</label>
                    <input type="text"
                        value={Job}
                        onChange={(event) => setJob(event.target.value)}
                        placeholder='Job...' required />
                </div>
                <div className='btn_foot form_groud'>
                    <button className='btn btn-success' onClick={HandleSubmitADD}> &#43; ADD</button>
                    <button className='btn btn-secondary' type='reset' onClick={() => Reset()}> Reset </button>

                </div>
            </div>


        </div>

    );
}

export default AddNewUser;