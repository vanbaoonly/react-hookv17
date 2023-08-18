import "./notfound.scss";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

function NotFound404(props) {
    let history = useHistory()
    let localhost = useLocation()
    let params = useParams()
    let RouteMatch = useRouteMatch()

    const handleGoBack = () => {
        history.goBack();




    }
    const handleGoHome = () => {

        history.push('/home')
    }
    return (
        <div className="ctn-404">
            <h1>404 Not Fonud</h1>
            <h3 onClick={() => handleGoBack()} className='btn btn-primary'>Go Back</h3>
            <h3 onClick={() => handleGoHome()} className='btn btn-primary'>Go to Home</h3>

        </div>
    );
}

export default NotFound404;