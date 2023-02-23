import context from "./Context";
import { useState } from "react";

function ContextProvider({ children }) {
    const [TaskCounter, setTaskCounter] = useState(0);
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
      

    const data = {
        TaskCounter, 
        setTaskCounter,
        UserName, 
        setUserName,
        Email, 
        setEmail,
        Password, 
        setPassword,
        FirstName, 
        setFirstName,
        LastName, 
        setLastName

    }

    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )

}
export default ContextProvider
