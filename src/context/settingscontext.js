'use strict';
import { createContext, useState } from 'react';

export const DisplayContext = createContext({});

export default function DisplaySettings(props) {
    const [toDosShowing, setToDosShowing] = useState(3);
    const [showComplete, setShowComplete] = useState(true);

    const toggleShowComplete = () => {
        setShowComplete(showComplete ? false : true);
    }

    const exportedValues = {
        toDosShowing,
        showComplete,
        toggleShowComplete,
        changeTodosShown: setToDosShowing
    };


    return (
        <DisplayContext.Provider value={exportedValues}>
        {props.children}
        </DisplayContext.Provider>

    );


};
