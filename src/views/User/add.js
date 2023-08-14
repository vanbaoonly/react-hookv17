import React from 'react';
import "./User.scss";
function AddUser(props) {
    return (

        <div className="container_form">
            <form className="form">
                <div>

                    <div className='form_grou'>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className='form_grou'>
                        <label for="userName">Username:</label>
                        <input type="text" id="userName" name="user_name" required />
                    </div>
                    <div className='form_grou'>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className='form_grou'>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className='form_grou'>
                        <label for="street">Street:</label>
                        <input type="text" id="street" name="address[street]" required />
                    </div>
                </div>
                <div>
                    <div className='form_grou'>
                        <label for="ward">Ward:</label>
                        <input type="text" id="ward" name="address[ward]" required />
                    </div>
                    <div className='form_grou'>
                        <label for="district">District:</label>
                        <input type="text" id="district" name="address[district]" required />
                    </div>
                    <div className='form_grou'>
                        <label for="city">City:</label>
                        <input type="text" id="city" name="address[city]" required />
                    </div>
                    <div className='form_grou'>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className='form_grou'>
                        <label for="job">Job:</label>
                        <input type="text" id="job" name="job" required />
                    </div>
                </div>
            </form>
            <div className='btn_add form_grou'>
                <input type="submit" value="Submit" />
                <input type="reset" value="reset" />

            </div>

        </div>

    );
}

export default AddUser;