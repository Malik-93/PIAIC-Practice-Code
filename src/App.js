import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import propTypes from 'prop-types'
class App extends Component {  
  
  state = {
    display: true,
    names: ['Mudassir', 'Raheel', 'shoaib'],
    selected: '',
  }
  
  changeState = () => {
    this.setState( (prevState) => {
      console.log(prevState)
      return ({names: ['Aftab', 'Subhani', 'Mudassir']})
      
    })
    
    
  }
  toogleMenue = ()=>{
    if(this.state.display === true){
      this.setState({display:false})
    }else{
      
      this.setState({display:true})
    }
  }
  
  
  render() {
    return (
    <div>
        <Cities names={this.state.names} display={this.state.display} 
        changeState={this.changeState} toogleMenue={this.toogleMenue} />
        
        <h2>{this.state.selected}</h2>
    </div>

);
}
}

class Cities extends Component {

  static propTypes = {
    names: propTypes.oneOfType([propTypes.object, propTypes.array])
  }
  // state = {
    //   display: true,
    //   names: ['Mudassir', 'Raheel', 'shoaib'],
  //   selected: 'Raheel'
  // } 
 
state = {
  text: '',
  name: '',
  fname: ''
}

  changeHandler = (event)=>{
    console.log(event)
    const {name, value} = event.target
    this.setState({[name] : value})
  }

  clearAll = ()=>{
    this.setState({
      text:'' ,
      name: '' ,
      fname: ''
    })
  }
  
  render(){
    let items = this.props.names.map((n, index)=>{
      return <li key={index} >{n}{console.log(index)}</li>
    }) 
    // let cities = ['Jaranwala', 'Faisalabad', 'Lahore']
    return(
      <div>
        <ul>
          {
            this.props.display === true ? items : ''          
          }
        </ul>
          {/* <h2> {this.state.selected}</h2> */}
          <button onClick={this.props.changeState}>ChangeState</button>
          <button onClick={this.props.toogleMenue}>toogleMenue</button><br /><hr></hr>
{/*         
        <ul>{
          cities.map((value, index) => {
            return<li key={index}>{value} {console.log(index)} </li>  
          }
          )}
        </ul>
 */}
        <input type="text" name='text' placeholder="Text " value={this.state.text}  onChange={this.changeHandler} />    
        <input type="text" name='name' placeholder="Name " value={this.state.name}  onChange={this.changeHandler} />    
        <input type="text" name="fname" placeholder="fathername" value={this.state.fname}  onChange={this.changeHandler} />    
        <p>{this.state.text}</p> <br />
        <p>{this.state.name}</p> <br />
        <p>{this.state.fname}</p> <br />
        <button onClick={this.clearAll}>Clear All</button>
    
      </div>
    )
  }
}

 
export default App;
