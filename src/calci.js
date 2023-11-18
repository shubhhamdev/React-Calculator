import React, {useState} from "react";
import "./styles.css";


function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState('');


    const event1 = (event) => {
        setNum1(event.target.value);
        setError("");
    }
    const event2 = (event) => {
        setNum2(event.target.value);
        setError("");
    }

    const performCalculation = (op) => {
        if(!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))){
            setError("Num can't be empty.");
            setResult("");
        } else{
            setError("");
            setOperation(op);
            calculation(op);
        }
    }

    const calculation = (op) => {
        let updatedResult = "";

        if(op === "+"){
            updatedResult = Number(num1) + Number(num2);
        }
        else if(op === "-"){
            updatedResult = Number(num1) - Number(num2);
        }
        else if(op === "*"){
            updatedResult = Number(num1) * Number(num2);
        }
        else if(op === "/"){
            updatedResult = Number(num1) / Number(num2);
        }

        setResult(updatedResult);
    }



    return( 
       <div class="box">

            <h1>React Calculator</h1>

            <div class="inputer">
                <input type="text" placeholder="Num 1" 
                  value={num1}
                  onChange={event1}/>
                <input type="text" placeholder="Num 2" 
                  value={num2}
                  onChange={event2}/>
            </div>

            <div class="btn">
                <button onClick={()=>performCalculation("+")}>+</button>
                <button onClick={()=>performCalculation("-")}>-</button>
                <button onClick={()=>performCalculation("*")}>*</button>
                <button onClick={()=>performCalculation("/")}>/</button>
            </div>

            <div>
                {error && (
                    <div style={{ paddingTop: "30px" }}>
                       <p style={{color : "red", textAlign : "center"}}>ERROR !</p>
                       <p style={{color : "black", textAlign : "center"}}>{error}</p>
                    </div>
                )}
                {result && (
                    <div style={{ paddingTop: "30px" }}>
                        <p style={{color : "blue", textAlign : "center"}}>SUCCESS</p>
                        <p style={{color : "black", textAlign : "center"}}>Your Result is Here {result}</p>
                    </div>
                )}
            </div>
       </div>
    )

}
  export default Calculator;


