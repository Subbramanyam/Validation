import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Person from './Person/Person';
import ValidationCompo from './Validation/ValidationCompo';
import Char from './Validation/Char';
import Input from './Input/Input';


class App extends Component{
 constructor(){
   super()
   this.state={
    userInput:''
}
 }
  eventHandler = (event) =>{
    this.setState({userInput:event.target.value})
  }
 dleleteHandler = (index) =>{
      const text = this.state.userInput.split('')
            text.splice(index,1)
      const updatedtext = text.join('')
      this.setState({userInput:updatedtext})
 }
 OrderHandler = ()=>{
   
 }
  render(){
    const charlist = this.state.userInput.split('').map((ch, index)=>{
          return <Char 
          character={ch} 
          key={index}
          clicked={() => {this.dleleteHandler(index)}}
          />;
    })
    return(
      <div>
      <h1>hello i am React App!</h1>
      <input type= 'text' 
      onChange= {this.eventHandler}
      value={this.state.userInput}
      />
      <p>{this.state.userInput}</p>
      <ValidationCompo 
      inputLength={this.state.userInput.length}
      
      />
    {charlist}
    <Input type='text' name='name' placeholder='your name'
     />
     <Input  type='email' name='email' placeholder='your email'
     />
     <Input  type='text' name='street' placeholder='adress'
     />
     <button btnType='Success' onClick={this.OrderHandler}>Success</button>
      </div>
    )
  }
}





















// class App extends Component {

//   state ={
//     person:[
//       {name:'subbu', age:30},
//       {name:'ravi', age:35},
//       {name:'vivi', age:30}
//     ]
//   };
// handleChange = ()=>{
//   this.setState({
//       person:[
//         {name:'vijji', age:30},
//         {name:'vijji2', age:35},
//         {name:'vivek Vardan', age:3}
//       ]
//     });
 
// }
//   render(){
//   return (
//     <div className="App">
//    <button onClick={this.handleChange}>persondata</button>
//     <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
//     <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
//     <Person name={this.state.person[2].name} age={this.state.person[2].age}/>

//     </div>
//   );
// }
// }

// const App = () => {
//   const [otherstate, setOtherState]= useState('other stuff going here');

//   const [prsState, setPrsState] = useState({
//     person: [
//       { name: 'subbu', age: 30 },
//       { name: 'ravi', age: 35 },
//       { name: 'vivi', age: 30 }
//     ],
 
//   });
//  const handleChange = () => {
//     setPrsState({
//       person: [
//         { name: 'vijji', age: 30 },
//         { name: 'vijji2', age: 35 },
//         { name: 'vivek Vardan', age: 3 }
//       ],
    
//     })
//     setOtherState("musltiple usestate is other state")
//   }
//   const nameChangeHadler = (event)=>{
//     setPrsState({
//       person: [
//         { name: 'vijji', age: 30 },
//         { name: event.target.value, age: 35 },
//         { name: 'vivek Vardan', age: 3 }
//       ],
    
//     })
//   }
 
//   return (
//     <div className="App">
//     <h1>hi i am React APP</h1>
//       <button className ="button"
    
//       onClick={handleChange}>persondata</button>
//       <Person 
//       name={prsState.person[0].name} 
//       age={prsState.person[0].age} />
//       <Person 
//       name={prsState.person[1].name}
//       age={prsState.person[1].age} 
//       changed = {nameChangeHadler}
//       />
//       <Person 
//       name={prsState.person[2].name} 
//       age={prsState.person[2].age} />
//       <Person 
//       click={handleChange} 
//       others={otherstate} 
      
//       />
      
//     </div>
//   )
// }

//class based component

export default App;
