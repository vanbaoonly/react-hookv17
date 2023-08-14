import { useState } from 'react';
import './home.scss';
import { CountDown, CountDownHook } from '../Countdown/Countdown';
function Home(props) {
    let [name, setname] = useState('Anh Bao');
    let [getname, setgetname] = useState('');
    let [status, setstatus] = useState(false);
    const OnClickGetName = (event) => {
        setname(getname)
        setgetname('')
    }
    const OnChangeInout = (event) => {
        setgetname(event.target.value);
    }
    return (
        <div className='container'>
            <h1> Reactjs with Hook</h1>
            {/* <div> Lấy mã <CountDownHook status={status} /></div> */}
            <div className="layma">
                <button onClick={() => {
                    let a = status ? false : true
                    // console.log("aaaa", a)
                    return setstatus(a)
                }}> lấy Mã </button>
                <h5><CountDownHook status={status} set={setstatus} /></h5>
            </div>

            <h2>UseState Hook </h2>
            <h2>Name : {name}</h2>
            <input type='text' value={getname} onChange={(event) => OnChangeInout(event)} />
            <button type='botton' onClick={(event) => OnClickGetName(event)}> Edit Name</button>

        </div>
    );
}

export default Home;