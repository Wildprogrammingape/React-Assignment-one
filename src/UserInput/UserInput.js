import React from 'react';

const userInput = (props) =>{
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.currentValue}/>
        </div>

    )
}

// onChange触发条件:  文本内容改变
export default userInput;