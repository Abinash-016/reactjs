// import Header from './Header'
import './App.css'
import { use, useState } from "react";
import User from './Props';
import Wrapper from './Wrapper';
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



function App(){
  const[field,setField]=useState("")
  return(
    <div>
      <input type="text" placeholder='Enter User Name..' onChange={(event)=>setField(event.target.value)}/>
      <h1>{field}</h1>
      <Wrapper>
        <h1>Wrapper 1</h1>
      </Wrapper>
    </div>
  )
}
export default App;
