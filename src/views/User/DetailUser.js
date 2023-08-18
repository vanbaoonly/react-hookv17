
import { Link, useParams, useHistory } from 'react-router-dom';
import useFetch from '../../custom_hook/fetchData';
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
        history.goBack();

    }



    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ height: "50vh" }}>
            {
                Loading === false && ErrorMes === false &&
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{detailUser.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{detailUser.phone}</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{detailUser.email}</h6>
                        <p className="card-text">   {addressString}</p>
                        <button onClick={() => BackUser()} className="btn btn-info card-link"> &#9668; Back User</button>

                    </div>
                </div>
            }

            {Loading === true &&
                <div className='ctn-logoLoading'>
                    <img src={logo} className="Nav-logo" alt="logo" />
                    <label>Loading...</label>
                </div>
            }

            {ErrorMes === true &&

                <h2 style={{ color: "#fff" }} > User information is not available</h2>
            }




        </div >
    );
}

export default DetailUser;