import React, { useState } from "react";

function CountDown(props) {

    const [num, setNum] = useState(props.num);

    function countDown() {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    return (
        <div>
            <div> num : {num}</div>
            <button onClick={countDown}>Click</button>
            </div>
    )
}
export default CountDown;