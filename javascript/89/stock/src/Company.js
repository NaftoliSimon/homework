import React from 'react';
import { Link } from 'react-router-dom';


export default function Company(props) {
    return (
        <li> <Link to={`/company/${props.company.ticker}`}>
            {props.company.name}
            </Link>
        </li>
    )
}