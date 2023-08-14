import "./User.scss";
import useFetch from "../../custom_hook/fetchData";
const User = () => {

    let url = 'http://localhost:3001/data';
    const { data: ListUser, Loading, ErrorMes } = useFetch(url);

    console.log(" check list", ListUser)
    return (
        <div className='from_user'>
            <h2>List User</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>user_name</th>
                        <th>password</th>
                        <th>Phone</th>
                        <th>Job</th>
                        <th>email</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        ErrorMes === false && Loading === false &&
                        ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            const addressAll = `${item.address.street}, ${item.address.ward}, ${item.address.district}, ${item.address.city}`;
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name} </td>
                                    <td>{item.user_name}</td>
                                    <td>{item.password} </td>
                                    <td>{item.phone}</td>
                                    <td>{item.job} </td>
                                    <td>{item.email}</td>
                                    <td>{addressAll} </td>

                                </tr>
                            )
                        })

                    }


                    {Loading === true &&
                        <tr>
                            <td colSpan={8}> Loading...</td>
                        </tr>
                    }

                    {
                        ErrorMes === true &&
                        <tr>
                            <td colSpan={8}> 404</td>
                        </tr>
                    }

                </tbody>

            </table>

        </div >
    )
}


export default User;


// import React, { useState } from 'react';
// import useFetch from "../../custom_hook/fetchData";
// import "./User.scss";

// const User = () => {
//     let url = 'http://localhost:3000/data';
//     const { data: ListUser, Loading, ErrorMes } = useFetch(url);
//     const [newUser, setNewUser] = useState({}); // Thông tin người dùng mới
//     const [editingId, setEditingId] = useState(null); // ID của người dùng đang được chỉnh sửa

//     const handleAddUser = async () => {
//         try {
//             // Gửi yêu cầu POST đến API để thêm người dùng mới
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newUser)
//             });

//             if (response.ok) {
//                 // Cập nhật danh sách người dùng sau khi thêm thành công
//                 const newUserWithId = { ...newUser, id: ListUser.length + 1 };
//                 setNewUser({});
//                 // Tải lại danh sách người dùng sau khi thêm
//                 // Cách này sẽ cần tối ưu hơn trong thực tế
//             } else {
//                 console.error('Lỗi khi thêm người dùng');
//             }
//         } catch (error) {
//             console.error('Lỗi:', error);
//         }
//         setNewUser({});
//     };

//     const handleEditUser = (id) => {
//         // Xử lý sự kiện sửa người dùng
//         // Cập nhật state hoặc gửi yêu cầu PUT đến API thực
//         // Set editingId để đánh dấu người dùng đang được chỉnh sửa
//         setEditingId(id);
//     };

//     const handleSaveEdit = () => {
//         // Xử lý sự kiện lưu sửa đổi người dùng
//         // Cập nhật state hoặc gửi yêu cầu PUT đến API thực
//         // Sau khi xử lý, bạn có thể reset editingId về null
//         setEditingId(null);
//     };

//     const handleDeleteUser = (id) => {
//         // Xử lý sự kiện xóa người dùng
//         // Cập nhật state hoặc gửi yêu cầu DELETE đến API thực
//     };

//     return (
//         <>
//             <div className='from_user'>
//                 <h2>List User</h2>
//                 {/* ... */}
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>STT</th>
//                             <th>Name</th>
//                             <th>user_name</th>
//                             <th>password</th>
//                             <th>Phone</th>
//                             <th>Job</th>
//                             <th>email</th>
//                             <th>address</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {ListUser && ListUser.map((item, index) => (
//                             <tr key={item.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.user_name}</td>
//                                 <td>{item.password}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.job}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     {editingId === item.id ? (
//                                         <>
//                                             <button onClick={handleSaveEdit}>Save</button>
//                                             <button onClick={() => setEditingId(null)}>Cancel</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button onClick={() => handleEditUser(item.id)}>Edit</button>
//                                             <button onClick={() => handleDeleteUser(item.id)}>Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>


//         </>
//     )
// }

// export default User;
