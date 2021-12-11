import React from "react";

function SendObject(props) {
    const { age, name,lastName } = props.user;
    // const name = props.user.name; // one option
    // const age = props.user.age;
    const phrase = age <= 18 ? 'You are underaged!' : 'You are OK!';
    return (
    <span>Happy Birthday {name} {lastName}! You are {age} years old!! ,{phrase}</span>
    );
    }
    export default SendObject;