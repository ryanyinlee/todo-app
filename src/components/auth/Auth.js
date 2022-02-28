'use strict';
import { React, useContext } from 'react';
import { When } from 'react-if';

import { AuthContext } from './Context.js';

export default function Auth(props){

const state = useContext(AuthContext)
console.log("Auth Context state is", state, "with props", props);

const isLoggedIn = state.loggedIn;
const canDo = state.capabilities.includes(props.capability);
const okToRender = isLoggedIn && canDo;

return (
    <When condition = {okToRender}>{props.children}</When>
)

}

