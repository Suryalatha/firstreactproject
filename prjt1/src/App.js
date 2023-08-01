import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

  const[data,setData]=useState([
    { id: 1, name: "Surya", age: 16, grade: "o" },
    { id: 2, name: "Latha", age: 17, grade: "A" },
    { id: 3, name: "Krishi", age: 6, grade: "A+" }
  ])
  const[ip1,setIp1]=useState();
  const[ip2,setIp2]=useState();
  const[ip3,setIp3]=useState();
  const[editid,setEditid]=useState(null);
  
  const buttonhndlr=()=>{
if(editid !== null){
  const updatedData=data.map((item)=>
  item.id===editid ?{...item, name:ip1, age:ip2, grade:ip3} : item
  
  );
  setData(updatedData)
  setEditid(null);
}else{


    let newarray={
      id: data.length +1,
      name:ip1,
      age: ip2,
      grade:ip3
 };
 setData([...data,newarray]);
}
 setIp1("");
 setIp2("");
 setIp3("");

    
  }
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleEdit = (id) => {
    const student = data.find((item) => item.id === id);
    setIp1(student.name);
    setIp2(student.age);
    setIp3(student.grade);
    setEditid(id);
  };
  return (

    <div className="App">
      <h1>
        <ul>Student Info</ul></h1>
    
       {data.map((item)=>(
       <div key={item.id}>
       <li> NAME:  {item.name} <b></b>
        AGE:   {item.age} <b></b>
        GRADE: {item.grade}

       </li>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        <button onClick={() => handleEdit(item.id)}>Edit</button>
        </div>
       
       ))} 
      
       
       <label>name</label>
       <input text="text" placeholder="name" value={ip1}  onChange={(e)=>setIp1(e.target.value)} />
       <label>age</label>
       <input text="number" placeholder="age" value={ip2}  onChange={(e)=>setIp2(e.target.value)}/>
       <label>grade</label>
       <input text="text" placeholder="grade" value={ip3}  onChange={(e)=>setIp3(e.target.value)}/>
       <button onClick={buttonhndlr}>{editid !== null ? 'Save' : 'Add'}</button>
       </div>
 

  );
}

export default App;
