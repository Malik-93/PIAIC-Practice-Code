// import propTypes from 'prop-types'
// import logo from './logo.svg';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';
class Child extends Component {
  state = {
    text: this.props.num
  }
  
  static getDerivedStateFromProps(props){
  console.log('getDerivedStateFromProps')
    return ({text: props.num})
  }

  render(){
    return(
      <div>
        <div style={{borderStyle: 'solid', borderColor: 'grey'}}>
        <h1>This is Child Component</h1>
        <h2>{this.state.text}</h2>
        </div>
      </div>
    )
  }
}

class App extends Component {  
  state = {
    number: 0,
    date: new Date()
  } 

  componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
  console.log('componentDidMount Number ')
    setInterval(()=>{
      this.setState(()=>({
        number: Math.ceil(Math.random() * 10),
        date: new Date()
      }))
    }, 1000)
  }
 
// setTimeout(() => {
//   ReactDOM.render(<Child />, document.getElementById('root'))
// }, 2000)  

  render() {
    console.log('render')
    return (
           <div className="App">
           <Child num = {this.state.number} />       
           <div style={{borderStyle: "solid", color: 'green'}}>
           <h1>This is Parent Component</h1>
           <hr></hr>
           <h2 style={{color: 'purple'}}> Current time :{this.state.date.toLocaleTimeString()}</h2>
           </div>
           </div>
)
}
}
export default App;
