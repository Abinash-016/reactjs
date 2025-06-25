import { useActionState } from "react";

function UseAction(){

    const handleSubmit=async (preData,formData)=>{
        let name=formData.get('name');
        let password=formData.get('password');
        console.log("Hello",name,password)
        await new Promise (res=>setTimeout(res,1000));

        if(name && password){
            return {message:'Form submitted succesfully😊😊😊'}
        }
        else{
            return {error:'fill all the details..🥲'}
        }
    }

    const [data,action,pending] =useActionState(handleSubmit,undefined)
    return (
        <div>
            <h1>Use Action Hook</h1>
            <form action={action}>
                <input type="text" placeholder="Enter your name" name="name" />
                <br /><br />
                <input type="current-password" placeholder="Current password" name="password"/>
                <br /><br />
                <button>Submit</button><hr />
                {
                    data?.error && <span style={{color:'red'}}> {data?.error}</span>
                }
                {
                    data?.message && <span style={{color:'green'}}> {data?.message}</span>
                }
            </form>
        </div>
    )
}

export default UseAction;