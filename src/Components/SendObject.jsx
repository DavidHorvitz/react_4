import React from "react";

function SendObject(props) {
    const { age, name,lastName ,id } = props.user;
    // const name = props.user.name; // one option
    // const age = props.user.age;
    const phrase = age <= 18 ? 'You are underaged!' : 'You are OK!';
    return (
    <div>Happy Birthday {name} {lastName}! You are {age} years old!! ,{phrase} your id is : {id}</div>
    );
    }
    export default SendObject;