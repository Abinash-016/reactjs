function Nestedloop(){
    const collegeData=[
        {
            name: "CUTM",
            city:"BBSR",
            students:[{
                name:"Abinash",
                age:20
            },
            {
                name:"Subhaish",
                age:20
            }]
        },
        {
            name:"IIT",
            city:"DELHI",
            students:[{
                name:"Abinash",
                age:20
            },
            {
                name:"Subhaish",
                age:20
            }]
        }
    ]
    return(
        <div> 
            {collegeData.map((college,index)=>(
                <div key={index}>
                    <h2>College Name: {college.name}</h2>
                    <h2>City: {college.city}</h2>
                    <hr />
                    {/* <h2>College students: {college.students}</h2> */}
                </div>
            ))
            }
        </div>
    )

}

export default Nestedloop;