import React, { useState } from 'react';

const HeadTail=()=>{
    const [flip,setFlip]=useState("")
    const [validation,setValidation]=useState("")
    const [columns,setColumns]=useState([])
 

const styling={
  main:{
    textAlign:"center",
    margin: "auto",
    width: "50%",
    marginTop:"10px",
    color:"purple"
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    marginTop:"30px",
    marginLeft: "550px",
    backgroundColor:"aqua"
  },
  button: {
    padding: "10px 20px",
    marginLeft:"10px",
    fontSize: "16px",
    backgroundColor: "blue",
    color: "pink",
    border: "none",
    cursor: "pointer",
  },
  validation:{
    color:"red"
  },
  columnContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px"
},
column: {
    width: "50px",
    height: "50px",
    border: "1px solid #ccc",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor:"pink",
    borderRadius: "5px",
}
}

    const setChange=(event)=>{
    setFlip(event.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(flip===""){
         setValidation("Please select a value")
         return;
        }else{
            setValidation("")
        }
        

        if(columns.length===0 ||columns[columns.length-1].value !==flip){
          setColumns([...columns,{value:flip,data:[flip]}]);
        }else{
          const updatedColumns=[...columns];
          updatedColumns[columns.length-1].data.push(flip);
          setColumns(updatedColumns);
        }

        setFlip("");
    }


   
  return (
    <>
    <h1 style={styling.main}>Heads and Tails</h1>
    <div>
     <select value={flip} onChange={setChange} style={styling.select}>
        <option value="">select value</option>
        <option value="H">H</option>
        <option value="T">T</option>
     </select>
     <button onClick={handleSubmit} style={styling.button}>Submit</button>
     </div>
        
    <h3 style={styling.validation}>{validation}</h3>

       
        <div style={styling.columnContainer}>
          {
            columns.map((col,colindex)=>{
              return(
                <div key={colindex}>
                  {col.data.map((item,index)=>(
                    <span key={index} style={styling.column}>{item}</span>
                  ))}
                  </div>
                  ) }
                   )}
        </div>
       


    </>
  )
}
export default HeadTail;