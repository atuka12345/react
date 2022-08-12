import React, { useEffect, useState } from "react";




function App() {
 const[x, setX] = useState(0)
 
 useEffect(() => {
  setX(generateUsers(users))
},[users.length])

// let btn = document.getElementById("change-title");
// btn.addEventListener("click", () => {
//   document.title ="new title"
// })

// ↑ ეს ვცადე title შესაცვლელად მაგრამ ვერ ავამუშავე :( 

const removeName = () => {
  setX(getRandomItems(users))
}  
 

  return (
    <div className="App">
      
     
      
      <div>{x}</div>
      <button className='remo' onClick={removeName}>kill  !!!!</button>
    

      
    </div>
  );
}





export default App;
 const users =  [
  {name:"atuka",id: 1,},
  {name: "ilia",id: 2,},
  {name:"petre",id: 3,},
  {name:"rusudani",id: 4,},
  {name:"giorgi",id: 5,},
  {name:"merabi",id: 6,},
  {name: "luka",id: 7,},
  {name: "lali",id: 8,},
  {name:"anamaria",id: 9,},
  {name:"lizi",id: 10,}
 ]


 const generateUsers = (array) => {
  return array.map(users =>{
    const {name,id} = users
    return (<p key={id}>{name}</p>)
  })
} 


const getRandomItems = (users) => {
if (users.length > 0){
  const rand =  Math.floor(Math.random()* users.length);
  users.splice(rand,1)
}
}











