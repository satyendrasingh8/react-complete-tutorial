import React, {Component} from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
    }
 componentWillUnmount(){
     console.log("componnetwillunmount is called in show")
 }

    render() { 
        return (  <div>
 <h1> hello show</h1>
        </div>);
    }
}
 
export default Show;