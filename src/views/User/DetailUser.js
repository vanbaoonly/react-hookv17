
import { Link, useParams, useHistory } from 'react-router-dom';
import useFetch from '../../custom_hook/fetchData';
import Card from 'react-bootstrap/Card';
import logo from "../logo.svg";
import "../../styles/index.scss"


function DetailUser(props) {
    let history = useHistory();
    let { id } = useParams()
    let url = `http://localhost:3000/data/${id}`;
    const { data: detailUser, Loading, ErrorMes } = useFetch(url)
    const addressString = detailUser && detailUser.address
        ? `${detailUser.address.street}, ${detailUser.address.ward}, ${detailUser.address.district}, ${detailUser.address.city}`
        : 'Loading...';
    // console.log(url, id)
    const BackUser = () => {
        history.push("/user");

    }


    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ height: "50vh" }}>
            {
                Loading === false && ErrorMes === false &&
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-center '>{detailUser.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{detailUser.phone}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{detailUser.email}</Card.Subtitle>
                        <Card.Text>
                            {addressString}
                        </Card.Text>
                        <button className=" btn btn-primary" onClick={() => BackUser()} >Back</button>
                    </Card.Body>
                </Card>
            }

            {Loading === true &&
                <div className='ctn-logo'>
                    <img src={logo} className="Nav-logo" alt="logo" />
                    <label>Loading...</label>
                </div>
            }

            {ErrorMes === true &&

                <span > User does not exist</span>
            }




        </div >
    );
}

export default DetailUser;