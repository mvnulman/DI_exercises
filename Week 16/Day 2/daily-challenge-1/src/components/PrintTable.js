import React from 'react';

const PrintTable = (props) => {
    let { content, id, handleMouse, handleClick, handleOut } = props
    return (
        <>
            <li id={id} onMouseOver={handleMouse} onClick={handleClick} 
            onMouseOut={handleOut} className="list-group-item"
            >{content}</li>
        </>
    )
}

export default PrintTable;