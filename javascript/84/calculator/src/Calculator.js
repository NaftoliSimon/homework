import { Component } from "react";
import CalculateEquation from "./CalculateEquation";

export default class Calculator extends Component {
    render() {
        return (
            <>
                <input type="number"/> + 
                <input type="number"/> 
                <button> = </button>
                <div> Sum: {}</div>
                



                {/*<div id="display">Results: {}</div>
                <div className="row">
                    <button className="row">7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div className="container">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div className="container">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <br/>
                <div>
                    <button>=</button>
        </div>*/}
            </>
        );
    }
}