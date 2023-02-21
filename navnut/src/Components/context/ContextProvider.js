import context from "./context";
import { useState } from "react";

function ContactsProvider({ children }) {
    const [Pokemon, setPokemon] = useState([]);
    const [input, setInput] = useState("")


    const data = {
        Pokemon,
        setPokemon,
        input,
        setInput
    }
    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )

}
export default ContactsProvider
