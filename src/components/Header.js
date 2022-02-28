'use strict';
import React from 'react';

export default function Header (props) { 
    return (
        <header>
        <h1>Todos Incomplete: {props.incomplete}</h1>
        </header>
    )
}
