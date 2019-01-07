import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let names = ['Mudassir', 'Subhan', 'Aftab']
    let items = ['Biryani', 'Qourma', 'Cold Drink']
    return (
      <div>
     
      {/* <ul> */}
{/* // {names.map((value, index)=>{ */}
  {/* // return <li key={index}>{value}</li> */}
{/* // })} */}
      {/* </ul> */}
     
     <hr />
<Cities name = {names}/>
<DisplayItem  another={items}/>
<More arr = {['Hamza', 'Mubashir']} />
      </div>
    );
  }
}

class Cities extends Component {
  render(){
    let cities = ['Jaranwala', 'Faisalabad', 'Lahore']
    return(
      <div>
        <ul>
          {
            this.props.name.map((n, index)=>{
              return <li key={index}>{n}{console.log(index)}</li>
            })          
            }
        </ul>
        
        <ul>{
          cities.map((value, index) => {
            return<li key={index}>{value} {console.log(index)} </li>  
          }
          )}
        </ul>
        

      </div>
    )
  }
}

function DisplayItem(props){
 let item = props.another
  return(
<ul>
  {
    // props.another.map((items, index)=>{
    //   return <li key={index}>{items}</li>
    // })
    
    item.map((items, index)=>{
return <li key={index}>{index} {items} {console.log(index)}</li>
    }
    )}
</ul>
 )
}
 
class More extends Component {
  state = {
    more: this.props.arr
  }
  render(){
    return(
      <ul>
        {this.state.more.map((n)=>{
          return <li>{n}</li>
        })}
      </ul>
    )
  }
}


export default App;
