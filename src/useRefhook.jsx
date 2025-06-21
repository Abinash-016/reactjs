import { useRef } from "react";


function Useref() {

    const inputRef = useRef(null);
    function inputHandler() {
        inputRef.current.focus();
    }

    return (

        <div>
            <input ref={inputRef} type="text" placeholder="Enter your name..." />
            <button onClick={inputHandler}>Click to focus on the input field..</button>
        </div>
    )
}

export default Useref;