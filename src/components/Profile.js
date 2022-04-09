import React, {Component} from 'react';
import Show from './Show';
class Profile extends Component {
    constructor(props) {
        super(props);

        console.log("constructor")
        this.state = { 
    input:true,
   
        }
    }
    
//     componentDidMount(){
//         console.log("componnetDidMount");
//     }
// componentDidUpdate(prevprops, prevState){
//     // console.log("componnetDidUpdate")
//     // if(prevState.counter<10) this.setState({counter:prevState.counter + 1})

// console.log("componnetdidupdate")

// }

// shouldComponentUpdate(){
//     // console.log("shoudcomponentupdate",this.state.counter)
//     // return true;
//     console.log(" should")
    
// }

// componentWillUnmount(){
//     // calls only in case of hide/show the component
//     console.log("componentwillunmount")
// }
    render() { 
       // this.setState({name:"pratima"})
        //console.log("render")
       // let input = this.state.input;
        return (<div>
            <button onClick={()=> this.setState({input  :!this.state.input})} >toggle</button>
 {this.state.input ? <Show/> : <h1>hello i'm the next one </h1>}

        </div>  );
    }
}
 
export default Profile;