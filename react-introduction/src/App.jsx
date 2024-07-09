import {Greetings} from "./Greetings";

{/*Returning a component within a component as well as multiple things*/}
export function App(){
    return(
        <>
            <input type="text" />
            <input type="password" />
            <Greetings/> 
        </>
    )
}
