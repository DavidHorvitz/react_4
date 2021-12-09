import React from 'react';

function Welcome(props) {
    const nam = props.nam;
    const pre = props.pre;
    return (
        <span> Hello, {pre} {nam} !!!</span>
    );
}
export default Welcome;