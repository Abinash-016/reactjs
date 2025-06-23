import { useRef } from "react";
 


function UComp(){

    const userRef=useRef(null);
    const passRef=useRef(null);

    const handleForm=(event)=>{
        event.preventDefault();  //prevents reloading after submitiing 
        const user=document.querySelector("#username").value;
        console.log(user);
        const passWord=document.querySelector("#pass").value;
        console.log(passWord);
        
    }

    const handleref=(event)=>{
        event.preventDefault();
        const user=userRef.current.value;
        const pAss=passRef.current.value;
        
        console.log(user,pAss);
    }
    return <div>
        <h1>
        Uncontrolled Component
        </h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" placeholder="Enter your name " id="username" />
            <br /> <br />
            <input type="password" placeholder="Enter password " id="pass" />
            <br /><br />
            <button>Submit</button>
        </form>

<br /><br /><br />
        <h1>
        Uncontrolled Component with useRef
        </h1>
        <form action="" method="post" onSubmit={handleref}>
            <input type="text" ref={userRef} placeholder="Enter your name "  />
            <br /> <br />
            <input type="password" ref={passRef}  placeholder="Enter password "/>
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
}

export default UComp;