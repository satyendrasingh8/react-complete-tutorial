import React from 'react'
import './style.css'
import style from "./custom.module.css"
function StyleDemo() {
  return (
    <div>StyleDemo

<h1 style={{color:"red",backgroundColor:"grey"}}> first Style Componnet </h1>
<h2 className="custom"> second style componnet </h2>
<h3 className={style.primary}>third style componnet </h3>
    </div>
  )
}

export default StyleDemo