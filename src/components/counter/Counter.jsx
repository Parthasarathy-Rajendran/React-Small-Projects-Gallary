import React, { useState } from "react";
import './Counter.css'

function Counter (){

    const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
                <h1 data-testid="counter">{number}</h1>
                <button 
                    className="button"
                    data-testid="incrementButton" 
                    onClick={() =>{setNumber(number + 2)}}>
                        Increment 2 times
                </button>
            </div>
		</>
        
	);
}

export default Counter