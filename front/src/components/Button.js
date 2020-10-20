import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onCilck,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = SIZES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${ checkButtonStyle} ${ checkButtonSize}`} onClick={ onCilck } type={ type }>
            { children }
        </button>
    )
}