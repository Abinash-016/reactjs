import { useEffect, useState } from "react";

function Hooks() {
    const [counter, setCounter] = useState(0);
    const [display, setDisplay] = useState(true);

    function callOnce() {
        console.log("function called");
    }

    useEffect(() => {
        callOnce();
    }, [])

    useEffect(() => {
        console.log("mounting phase ");
    }, [])

    useEffect(() => {
        console.log("update phase ");
    }, [counter])

    useEffect(() => {
        return () => {
            console.log("unmounting phase ");
        }
    })



    // callOnce();
    return (
        <div>

            {
                display ? <h3>Displayed</h3> : null
            }

            <h1>Use of useEffect</h1>
            <button onClick={() => setCounter(counter + 1)}>counter : {counter}</button>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default Hooks;