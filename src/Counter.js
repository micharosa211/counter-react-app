import React, { Component } from 'react';
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import Step from "./Step";
import ClockFunctional from './ClockFunctional';
import Step2 from './Step2';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 5,
            stepValue2: 10,
        };
        
    }


    // binding needed when this.changeValue is a ES5 method
    // this.changeValue = this.changeValue.bind(this);

    //changeValue() { // ES5 method (no this context by default)
    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            
            if (action === 'add') {
                currentCounterValue += this.state.stepValue2;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else if (action === 'addx2') {
                currentCounterValue = currentCounterValue + (this.state.stepValue2 * 2);
            }
            else {
                currentCounterValue = 0;

            }
            return ({
                counterValue: currentCounterValue
                
            });
        });
    }

updateStep = (value) => {
    this.setState ({stepValue: value})
}

updateStep2 = (value) => {
    this.setState ({stepValue2: value})
  
}

    /* this.setState({
        counterValue: currentcounterValue
    }); */

    // console.log(action);
    /*  this.setState({
         counterValue: this.state.counterValue + 1
     // console.log('changeValue click');
     }); */
    /* this.setState((prevState) => {
        return ({
            counterValue: prevState.counterValue + 1
        });
    }); */


    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }


    render() {

        let clockElement = '';

        if (this.state.showClock) {
            // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
            clockElement = <ClockFunctional
            toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">Show Clock</span>
        }


        return (
            <div className="Counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                {clockElement}
                <Step updateStep={this.updateStep}/>
                <Step2 updateStep2={this.updateStep2} buttonStart={this.changeValue}/>
            
                


            </div>

        );
    }
}



/* function Counter (props) {
let randomNumber = Math.floor(Math.random() * (108 -1 +1) + 1);
    return (
        <div className="Counter">
            Counter:
            <span className="value">
                {props.initValue}
            </span>
        </div>
    );

}  */

export default Counter;