import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineClipboardCheck } from 'react-icons/hi'

const Button = ({className, path, btnText}) => {
    return (
        <>
            <Link to={`${path} `} className={`${className} btn flex details-btn`}>
                {btnText} <HiOutlineClipboardCheck className='icon' />
            </Link>
        </>
    )
}

export default Button