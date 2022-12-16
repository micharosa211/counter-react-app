import React, { Component } from 'react';
import './Step2.css';


class Step2 extends Component {

    // handleChanged() => {
    // console.log('test')
    // }
    handleChange1 = () => {
        console.log('test1');
        this.props.updateStep2(Number(this._inputStep2.value));
    }

    // render() {

    // return (




    // )
    render() {
        return (
            <div>
                <h4 className="h4">Podwójny krok<input onChange={this.handleChange1} ref={(data) => { this._inputStep2 = data }} /></h4>
                <button onClick={()=>{this.props.buttonStart('addx2')}}>Aktualizuj</button>
            </div>
        )


    }

}
export default Step2;