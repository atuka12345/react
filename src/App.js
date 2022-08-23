
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Validations/>
    </div>
  );
}

export default App;


function Validations () {
  const initialValues ={
     username:"", 
  lastname:"",
   email:"", 
   age:"",  
   gender:""};
  const [formValues,setFormValues] = useState(initialValues)
  const [formErors,setFormErors] = useState({})
  
  const [userList,setUserList] = useState([]);
  const [isUserUpdating, setIsUserUbdating]= useState(false)
  console.log(formValues,"formValue")
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
    console.log([name],"name")
    console.log(value,"value")
   
  }

  useEffect(()=>{
setFormErors(validate(formValues))
  },[formValues])

  // console.log("form Errors",formErors)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUserUpdating) {
const userIndex = userList.findIndex(
  (user)=> user.id === formValues.id
)
const newUserList = [...userList]
newUserList[userIndex] = formValues
setUserList(newUserList)
    }else{
       setUserList((prevUserList)=>{
      return[...prevUserList,{...formValues,id:new Date().toString()}]
    });
    }

    setFormValues({
username:"",
lastname:"",
email:"",
age:"",
gender:"",
     });
     
  }
console.log("user lists",userList)
  const validate = (value) => {
    const errors = {};
    if(value.username && value.username.length < 4) errors.username = "სახელი უნდა შეიცავდეს მინუმუ 4 ასოს";
    if(value.lastname && value.lastname.length < 4) errors.lastname = "გვარი უნდა შეიცავდეს მინიმუ 4 ასოს";
    if(value.email && value.email && !(value.email.includes("@gmail.com"))) errors.email = "იმეილი უნდა შეიცავდეს @gmail.com";
    if(value.age && value.age < 18) errors.age = "სავალდებულო ასაკი არის 18 წელი ";

    
    return errors
  } 

 const update = (identification) =>{
const user =userList.find((user) => user.id === identification);
setFormValues({
  username:user.username,
lastname:user.lastname,
email:user.email,
age:user.age,
gender:user.gender,
id:identification
})
};
  return(
   <div className='registrationList'>
    <form onSubmit= {handleSubmit}>
      <h1>დაამატე მომხმარებელი</h1>

      <select onChange={handleChange} name="gender" defaultValue={"Chose Gender"}>
        <option value={"Chose Gender"}>აირჩიეთ სქესი</option>
        <option  value={"Female"}>Female</option>
        <option  value={"Male"}>Male</option>
        <option  value={"zaza"}>zaza</option>
      </select>


      <div>
        <label>Name</label>
        <input type={"text"} name={"username"} placeholder={"Username"} value={formValues.username}  onChange={handleChange}  />
        {formErors.username && <p>{formErors.username}</p>}
      </div>
      
      <div>
        <label>Lastname</label>
        <input type={"text"} name={"lastname"} placeholder={"lastname"} value={formValues.lastname} onChange={handleChange}  />
        {formErors.lastname && <p>{formErors.lastname}</p>}
      </div>

      <div>
        <label>email</label>
        <input type={"text"} name={"email"} placeholder={"gmail.com"} value={formValues.email} onChange={handleChange}  />
        {formErors.email && <p>{formErors.email}</p>}
      </div>
      
      <div>
        <label>Age</label>
        <input type={"text"} name={"age"} placeholder={"age"} value={formValues.age} onChange={handleChange}  />
        {formErors.age && <p>{formErors.age}</p>}
      </div>
      {/* {new Map(Object.entries(formValues))} */}
      <button>submit</button>
      <p>{formValues.username} {formValues.lastname} {formValues.age} {formValues.email}</p>
    </form>
    {userList.map((user)=>{
      return <React.Fragment key={user.id}>
<h1>{user.username}</h1>
<p>{user.age}</p>
<button onClick={()=> {update(user.id);setIsUserUbdating(true )}}>update</button>
      </React.Fragment>
    })}
   </div>
  )
}