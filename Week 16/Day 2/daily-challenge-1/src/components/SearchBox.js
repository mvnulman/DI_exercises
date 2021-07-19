import React from 'react';

const SearchBox = (props) => {
    let { handleChange } = props
    return (
        <>
                <h5>Auto Completed</h5>
                <input id="textInp" type="text" placeholder="Type the country..." onChange={handleChange}/>
        </>
    )
}

export default SearchBox;