import React, {useState} from "react";
import "./index.css";

const App = () => {

    const [input, changeInput] = useState("");
	const [ans, changeAns] = useState("");
	const [operation, changeOperation] = useState('');
    const ops = ['+', '-', '/', '*']

	const buttonPress = event => {
		event.preventDefault();
		const value = event.target.innerHTML;
        if (ops.includes(input.slice(-1)) && ops.includes(value)){
            return;
        }
        changeInput(input + value);
	}

    const calculate = event => {
        event.preventDefault();
        changeInput(eval(input).toString());
    }

    const clear = event => {
        event.preventDefault();
        changeInput("");
    }
    

    return (
        <div className="calculatorGrid">
            <div className="outputScreen">{input ? input : ""}</div>
            <button onClick={buttonPress}>7</button>
            <button onClick={buttonPress}>8</button>
            <button onClick={buttonPress}>9</button>
            <button onClick={buttonPress} className="computation">*</button>
            <button onClick={buttonPress}>4</button>
            <button onClick={buttonPress}>5</button>
            <button onClick={buttonPress}>6</button>
            <button onClick={buttonPress} className="computation">-</button>
            <button onClick={buttonPress}>1</button>
            <button onClick={buttonPress}>2</button>
            <button onClick={buttonPress}>3</button>
            <button onClick={buttonPress} className="computation">+</button>
            <button onClick={buttonPress}>.</button>
            <button onClick={buttonPress}>0</button>
            <button onClick={calculate} className="computation">=</button>
            <button onClick={buttonPress} className="computation">/</button>
            <button onClick={clear} className="clearButton">Clear</button>
        </div>
    );
}

export default App;