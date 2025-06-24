import { startTransition, useState, useTransition } from "react";

function UseTransition(){
    const [pending,startTransition]=useTransition();

    const handleButon=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000));
        })

        
    }
    return (
        <div>
            {
                pending ? <img style={{width:"30px"}} src="https://imgs.search.brave.com/I29UIhh6xLW3tMp7kuQayXuvx1Cr9u_Ayr4e3FE8djE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c2Fn/aWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9sb2FkaW5nLTg0/LmdpZg.gif" alt="" /> : null
            }
            <h1>Usetransition in react 19</h1>
            <button disabled={pending} onClick={handleButon}>Submit </button>
        </div>
    )
}

export default UseTransition;