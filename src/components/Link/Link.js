import React from 'react';
import {Link as RouterLink} from "react-router-dom";

const Link = ({children, className, to}) => {
    return (
        <RouterLink to={to} className={className}>
            {children}
        </RouterLink>
    )
}

export default Link
