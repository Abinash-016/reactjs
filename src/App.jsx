// import Header from './Header'
import './App.css'
import { use, useRef, useState } from "react";
import User from './Props';
import Wrapper from './Wrapper';
import Checkbox from './checkbox';
import Clock from './clock';
import Nestedloop from './Nestedloop';
import Hooks from './Hooks';
import StyledComponent from './StyledComponent';
import Bootstrap from './reactBootstrap';
import Useref from './useRefhook';
import UComp from './Uncontrolledcomponent';
import Forward from './Forwardref';
import UseForm from './UseFormstatus';
import UseTransition from './UseTranstionHook';
import AddUser from './AddUser';
import Lifting from './liftingStateUp';
import Ob from './UpdatingObjects';
import UseAction from './useAction';
import Fragment from './fragment';
import { ContextAPI } from './ContextAPI';
import Stud from './Student';
import Subject from './Subject';
import BroRout from './BrowserRouter/BrowserRouter';







// import Comp from './Component'

// function App() {
//     const name="Abinash";


//     function sum(a,b){
//       return a+b;
//     }
//     function btn(){
//       return alert("Hey There!!!!!!!!")
//     }

//     function operation(a,b,op){
//       if(op=="+"){
//         return a+b;
//       }
//       else if(op=="-"){
//         return a-b;
//       }else{
//         return a*b;
//       }
//     }
//   return (
//     <><div>
//       <h1>
//         Code React with  {name}
//       </h1>
//           <Header/>
//           <Comp></Comp>
//           {sum(10,155)}
//           <h2>{operation(20,15)}</h2>

//           <button onClick={btn}></button>
//        </div>
//     </>
//   )
// }




// function App(){
//   const [fruit,setFruit] =useState("Apple");

//   const handleFruit=()=>{
//     setFruit("Banana");
//   }
//   const[disp,setDisplay]=useState(false);
//   const[count,setCount]=useState(0);

//   return(
//   <div>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>Change fruit state</button>


//     <h1>Counter:{count}</h1>
//     <button onClick={()=> setCount(count+1)}>Increase value...</button>



//     {
//       disp? <h1>Click on the Toggle Button</h1>:null
//     }
//     <div>
//     <button onClick={()=>setDisplay(!disp)}>Toggle</button>
//     </div> 
//   </div>
//   )
// }



// function App(){
//   return(
//       <div>
//         <h1>Props</h1>
//         <User name="Anil Sidhu" age={21} email="mabinash016@gmail.com"/>
//       </div>
//   );
// }



// function App(){
//   const[field,setField]=useState("")
//   return(
//     <div>
//       <input type="text" value={field} placeholder='Enter User Name..' onChange={(event)=>setField(event.target.value)}/>
//       <h1>{field}</h1>
//       <button style={{color:"red"}} onClick={()=>setField("")}>Clear value</button>
//       {/* <Wrapper>
//         <h1>Wrapper 1</h1>
//       </Wrapper> */}
//     </div>
//   )
// }




/*
function App(){
  const [name,setName]=useState("")
  const [pass,setPass]=useState("")
  const [email,setEmail]=useState("")
  return(
    <form action="" method="get">
      <input type="text" placeholder='Enter Name'/>
      <br /><br />
      <input type="password" placeholder='Enter password'/>
      <br /><br />
      <input type="text" placeholder='Enter email'/>
      <br /><br />
      <button>Submit</button>
    </form>
  )
}*/




/*function App(){
  return (
    <div>
    <Checkbox/>
    </div>
  )
}*/


/*
function App(){

  const[gender,setGender]=useState('Male');
  return(
    <div>
      <h1>Select your gender</h1>
      
      <h4>
        <input type="radio" onChange={(event)=> setGender(event.target.value)} name='gender' id='male' value={"Male"}/>
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(event)=> setGender(event.target.value)} name='gender' id='female' value={"Female"}/>
        <label htmlFor="female">Female</label>
      </h4>
      <h2>Selected gender: {gender} </h2>
    </div>
  )
}*/



/*
function App() {

  const userData=[
    {
      name:"Abinash",
      id:1,
      age:21,
      experience:1
    },
    {
      name:"Bikash",
      id:2,
      age:21,
      experience:2
    },
      {
      name:"Rajeesh",
      id:3,
      age:21,
      experience:2
    }

    
  ]
  return (
    <div>
      <table border={"1"}>
        <thead>
          <tr>
            <td> NAME</td>
            <td> ID</td>
            <td> AGE</td>
            <td> EXPERIENCE</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
              <tr>
            <td>{user.name}</td>
            <td> {user.id}</td>
            <td>{user.age}</td>
            <td> {user.experience}</td>
          </tr>
            ))
          }
        </tbody>
      </table>



      <h1>Dummy data</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td> ID</td>
            <td> NAME</td>
            <td> AGE</td>
            <td> EXPERIENCE</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> 001</td>
            <td>Abinash</td>
            <td>21</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}*/


/*
function App(){
  const [color,setColor]= useState('green');
  return(
    <div>
      <select onChange={(event)=> setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
      </select>
    <Clock color={color}/>
    </div>
  )
}*/


/*
function App(){
  return(
    <Nestedloop/>
  )
}*/


/*
function App(){
  return(
    <div>
      // { <Hooks/> }
      { <StyledComponent></StyledComponent> }
      <Bootstrap></Bootstrap>
    </div>
  )
}
  */


/*
function App(){
 
  const [show,setShow]=useState(false);

 return(
  <div>
    {
      show?<img src="/PASSPORT.png" alt="" width="250px"/>:null
    }
     
     <button style={{ border:"5px solid gray", borderRadius:"5px" }} onClick={()=>setShow(!show)}>Click to reveal..</button>
  </div>
 );
}*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App(){
  // const inputRef=useRef(null);
  // const updateRef=()=>{
  //   inputRef.current.value=292;
  //   inputRef.current.focus();
  // }

  // const [user,setUser] =useState('')

  return (
    <div>
      {/* <Useref/> */}
      {/* <UComp></UComp> */}
      {/* <Forward ref={inputRef}></Forward>
      <button onClick={updateRef}>Update</button> */}

        {/* <UseForm/> */}

        {/* <UseTransition/> */}

        {/* <AddUser setUser={setUser} ></AddUser>
        <Lifting  user={user} /> */}


        {/* <Ob></Ob> */}

        {/* <UseAction></UseAction> */}

        {/* <Fragment/> */}



        {/* <ContextAPI></ContextAPI>
          <Stud/>
           */}

<BroRout/>



    </div>
  )
}

export default App;
