
import useFetch from "../../custom_hook/fetchData";

const Blog = () => {

    let url = 'https://jsonplaceholder.typicode.com/posts';
    const { data: dataBlog, Loading, ErrorMes } = useFetch(url)
    let dataBlog10 = dataBlog.slice(0, 4);

    console.log(dataBlog10)

    return (
        <div className='from_user'>
            <h2>List Blog</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Iitle</th>
                        <th>Body</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        ErrorMes === false && Loading === false &&
                        dataBlog10 && dataBlog10.length > 0 &&
                        dataBlog10.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title} </td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })

                    }
                    {Loading === true &&
                        <tr>
                            <td colSpan={3}> Loading...</td>
                        </tr>
                    }
                    {
                        ErrorMes === true &&
                        <tr>
                            <td colSpan={3}> 404</td>
                        </tr>
                    }

                </tbody>

            </table>

        </div >
    )
}
export default Blog;