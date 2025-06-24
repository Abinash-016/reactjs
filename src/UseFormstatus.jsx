function UseForm(){
    const handleSubmit=async()=>{
        await new Promise(res=>setTimeout(res,2000));
    }
    return(
        <div>
            <form action={handleSubmit}>
                <input type="mail" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
            </form>
            <button>Submit</button>
        </div>
    )
}


export default UseForm;