import React from 'react'

export const LoginInput = (props) => {
    let classProp = "form-login__input"
    return (
        <form>
            <input
                className={classProp}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                name={props.name}
            />
        </form>
    )
}
