import context from "./Context";
import { useState } from "react";

function ContextProvider({ children }) {
    const [TaskCounter, setTaskCounter] = useState(0);


    const data = {
        TaskCounter, 
        setTaskCounter
    }
    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )

}
export default ContextProvider
