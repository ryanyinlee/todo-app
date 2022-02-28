'use strict';
import React from 'react';

export default function Header (props) { 
    return (
        <header>
        <h1>To-Dos Incomplete: {props.incomplete}</h1>
        </header>
    )
}
