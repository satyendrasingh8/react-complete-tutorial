import React,{useState,useEffect} from 'react'

function HooksDemo() {
const [data,setData] = useState(0);
const [num,setNum] = useState(100);


// componnetdimount and update done me chl rha h
useEffect(()=>{
    console.log("useeffect")
},[data])


useEffect(()=>{
    alert("njsfd")
},[num])
  return (
    <div>
<button onClick={()=>setData(data+1)}> click to change</button>
<button onClick={()=>setData(num+1)}> click to num</button>
<h1>{data}</h1>

    </div>
  )
}

export default HooksDemo