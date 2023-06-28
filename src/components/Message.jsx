import React from "react";

function Message(){
    const name = 'Gordon'
    if (name)
        return <h1>GoodBye{name}</h1>;
    return <h1>Goodbye World</h1>;
};

export default Message;