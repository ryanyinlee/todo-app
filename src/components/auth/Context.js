'use strict';

import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

import { createContext, useState } from 'react';

const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
};

export const AuthContext = React.createContext();


export default function LoginProvider(props){

const [loggedIn, setLoggedIn] = useState(false);
const [capabilities, setCapabilities] = useState([]);

const logout = () => {
  setLoggedIn(false);
};

const login = (username, password, token) => {

let object = Object.values(testUsers);

  if(testUsers[username]) {
    setLoggedIn(true);
    setCapabilities(testUsers[username].capabilities);
  }

};

const can = (capability) => {
  return this?.state?.user?.capabilities?.includes(capability);
}

const state = {
  loggedIn,
  capabilities,
  logout,
  login
};

return (
<AuthContext.Provider value = {state}>{props.children}</AuthContext.Provider>
)

};
