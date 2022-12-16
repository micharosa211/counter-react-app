import React, { useState, useEffect } from "react";
import './ClockFunctional.css';

const ClockFunctional = (props) => {

    console.log('initializatin LifeCycle of component: seting [date, setDate]');
    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerID = setInterval(
            () => {tick()},
            1000
        );
        console.log('mounting & updation life cycle: componentDidMount() & comonentDidUptade()');
    

    return (() => {
        clearInterval (timerID)
        console.log('unmounting life cycle: componentWillMount()');

    });
});


    return (
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()}
                <span onClick={props.toggleClockMethod}>X</span></h4>

        </div>
    );
}

export default ClockFunctional;