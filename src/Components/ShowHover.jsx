import React, { useState } from "react";
import '../ShowHover.css';

function ShowHover() {
    let [time, setTime] = useState(0);

    function countObver() {
        setTime(time + 1);
    }

    function countDown() {
        setTime(time - 1);
    }

    function count_z() {
        setTime(time = 0);
    }
    return (
        <div>
            <div>{time}</div>
            <span id="showOver" onMouseOver={countObver}>+++++++++</span>
            <span id="showDown" onMouseOver={countDown}>----------</span>
            <button id="show_z" onClick={count_z}>00000000</button>
        </div>

    )
}
export default ShowHover;