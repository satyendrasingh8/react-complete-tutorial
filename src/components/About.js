import React from 'react'

// function Welcome(props) {
//     return <h1>Hello, {props.name} </h1>;
//   }


  // class Welcome extends React.Component {
  //   render() {
  //     return <h1>Hello, {this.props.name}</h1>;
  //   }
  // }

  // class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 'Please write an essay about your favorite DOM element.'
  //     };
  
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  
  //   handleChange(event) {
  //     this.setState({value: event.target.value});
  //     console.log("handlechange ==> ",event.target.value);
  //   }
  
  //   handleSubmit(event) {
  //     alert('An essay was submitted: ' + this.state.value);
  //     event.preventDefault();
  //     console.log("onsubmit v-->",this.state.value);
  //   }
  
  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Essay:
  //           <textarea value={this.state.value} onChange={this.handleChange} />
         
  //         </label>
          
  //         <input type="submit" value="Submit" />
  //       </form>
  //     );
  //   }
  // }
  // export default Clock;

// import Boil from './boil';

//   class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {temperature: ''};
//     }
  
//     handleChange(e) {
//       this.setState({temperature: e.target.value});
//     }
  
//     render() {
//       const temperature = this.state.temperature;
//       return (
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input
//             value={temperature}
//             onChange={this.handleChange} />
//           <Boil
//             celsius={parseFloat(temperature)} />
//         </fieldset>
//       );
//     }
//   }

//   export default Calculator;
import FancyBorder from './Boil';

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1> 
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default WelcomeDialog;