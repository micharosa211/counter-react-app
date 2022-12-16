import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Step.css';

class Step extends Component {

    handleChange = () => {
        console.log('test');
        this.props.updateStep(Number(this._inputStep.value));
    }
    
       
    render() {
    return(
        
        <h4 className="krok" >Krok <input onChange={this.handleChange} ref={(data) => { this._inputStep = data} } type="number" /></h4>
    )
    
    
}}








export default Step;






