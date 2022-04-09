import React,{useState} from 'react'
import Show from './Show';
function Main() {
    const [show, setShow] = useState(false);

    const ShowDetails = () => {
        setShow(!show);
    }
  return (
    <div> Show

<button onClick={ShowDetails}>
{ !show ? 'Show' : 'Hide' } details
</button>
{ show && <Show/> }
    </div>
    
  )
}

export default Main;