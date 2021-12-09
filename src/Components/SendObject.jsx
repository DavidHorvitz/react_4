import React from "react";

function SendObject(props) {
    const { age, name,lastName } = props.user;
    // const name = props.user.name; // one option
    // const age = props.user.age;

    return (
    <span>Happy Birthday {name} {lastName}! You are {age} years old!!</span>
    );
    }
    export default SendObject;