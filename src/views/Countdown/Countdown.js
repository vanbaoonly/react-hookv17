import React, { useState, useEffect } from "react";
class CountDown extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }
    componentDidUpdate(prevPorps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer)
        }
    }
    render() {
        return (
            <>
                time
                <h2>{this.state.count}</h2>
            </>
        )
    }
}

const CountDownHook = (props) => {
    const status = props.status;
    const setstatus = props.set;
    const [count, setcount] = useState(60);
    const randomCode = Math.random().toString(36).substring(2, 10);

    useEffect(() => {

        if (status === true) {
            if (count === 0) {

                console.log(randomCode);
                return;
            }
            let timer = setInterval(() => {
                setcount(count - 1)
            }, 1000)
            return () => {

                clearInterval(timer)
            }
        } else {
            setcount(3);

            setstatus(true)
            // console.log(status)
        }
    }, [count, status])

    // console.log('status', status, "set",)
    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                {count === 0 &&
                    <span  >
                        {randomCode}
                    </span >
                }
                {
                    count > 0 &&
                    <span > {count}</span>
                }
            </h2 >
        </>
    )
}

export { CountDown, CountDownHook };