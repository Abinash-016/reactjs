function Wrapper({children}){

    return(
        <div style={{color:"green", border:"5px solid green", margin:"3px" }}>
            {children}
        </div>
    )
}

export default Wrapper;