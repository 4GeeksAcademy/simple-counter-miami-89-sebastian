import { useEffect, useState } from "react";

const DigitCounter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let timerID = setInterval(() => {
            setCounter(previousCounter => previousCounter + 1)
        }, 1000)
        return () => clearInterval(timerID);

    }, [])

    const incrementCounter = () => {
        const previousCounter = counter + 1
        setCounter(previousCounter)
        return
    }

    return (
        <div className="container p-2 bg-dark">
            <div className="number-container d-flex justify-content-between p-1">
                <div className="p-5 bg-light fs-1 fw-medium">{counter % 10}</div>
                <div className="p-5 bg-light fs-1 fw-medium">{Math.floor(counter % 100/10)}</div>
                <div className="p-5 bg-light fs-1 fw-medium">{Math.floor(counter % 1000/100)}</div>
                <div className="p-5 bg-light fs-1 fw-medium">{Math.floor(counter % 10000/1000)}</div>
                <div className="p-5 bg-light fs-1 fw-medium">{Math.floor(counter % 100000/10000)}</div>
                <div className="p-5 bg-light fs-1 fw-medium">{Math.floor(counter % 1000000/100000)}</div>
            </div>
        </div>)
        ;
};
export default DigitCounter