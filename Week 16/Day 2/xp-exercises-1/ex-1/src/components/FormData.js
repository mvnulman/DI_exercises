import React from 'react';
// 

const FormData = (props) => {
    let { handleSubmit } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputWithLabel id="title" label="Title" type="text" /><br/>
                <InputWithLabel id="author" label="Author" type="text" /><br/>
                <InputWithLabel id="genre" label="Genre" type="text" /><br/>
                <InputWithLabel id="year" label="Year" type="number" /><br/>
                <button className="button" type="submit">Submit</button>
            </form>
        </>

    )
}

const InputWithLabel = (props) => {
    let { id, label, type } = props
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                required
            />
        </>
    );
}

export default FormData;