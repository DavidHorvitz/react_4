import React, { useState } from "react";

// without useState function
// function CountButton(){
//    const count = 0;

//     function countUp(){
//         count = count + 1;
//     };
//     return(<div>
//         <h4>{count}</h4>
//         <button onClick={countUp}>Click me</button>
//     </div>
//     ); 
// };

// export default CountButton;
function CountButton() {
    const [count, setCount] = useState(0);
    function countUp() {
        
        setCount(count + 1);
    }
    function countDown() {
        setCount(count - 1);
    }
    function countClear() {
        setCount(0);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={countUp}>Count Up</button>
            <button onClick={countDown}>Count Down</button>
            <button onClick={countClear} >Clear</button>
        </div>
    );
}
export default CountButton;

