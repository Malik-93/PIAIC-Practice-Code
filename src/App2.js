import React, {Component} from 'react';

const Client = (props) => {
return <div>{props.name}</div>
}

class App2 extends Component {
constructor(){
    super()
    this.state = {
        list: ['Malik1', 'Malik2', 'Malik3'],
        searchterm: 'Mudassir'
    }
}
changText = (event)=>{
  const a = event.target.value;
  this.setState({searchterm: a})
  console.log('this is output, ' + a)
}

render(){
    console.log('rendor method')
    const {list, searchterm} = this.state;
    console.log(list, searchterm)
    
    return(
    <div>
    <input type = 'text' placeholder='Enter Something'  name='searchTerm' onChange={this.changText}></input>
    <Client name = {this.state.searchterm} />
    </div>
    )
}
}


export default App2


// import React, {Component} from 'react';

// class App2 extends Component {

// constructor(props){    
//     super(props)
//     this.check = ()=>{
//         console.log(this)
//     }
// const list = [
//     {title: 'React', url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 5,
//     }]
// this.state = { 
//     list,
//     isToogleOn: true
// }
// }

// checking() {
//     console.log(this)  
// }
 
// updateItem = ()=>{
//     let items = this.state.list.map((item)=>{
//         return <div>
//         <span>{item.author}</span>
//         <span>{item.objectID}</span>
//         <span>{item.url}</span>
//         </div>
//     });
//         console.log(items)
//         this.setState({list: items})
// }

// toggleItems = () => {
// this.setState(state => ({
//    isToogleOn: !state.isToogleOn 
// }))
// }

// hiddenItems = () => {
//     this.setState({
//         list: [''],
//         isToogleOn: '' 
//      })
// }

//     render(){
//         console.log('render')
        
//         return(
//             <div className='App2'>
//               <h1>Hello, world all of you!</h1>
//               <div>{this.state.list[0].title}</div>               
//               {/* <button onClick={this.updateItem}>updateItem</button> */}
//               {/* <button onClick={this.hiddenItems}>hiddenItems</button> */}
//               {/* <button onClick={(e)=>{this.checking(e)}}>checking</button> */}
//              {/* <button onClick={this.toggleItems}>{this.state.isToogleOn ? 'ON': 'OFF'}</button> */}
//             </div>
//         )}
// }        

// export default App2; 