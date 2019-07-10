import React, {Component} from 'react';
import './App.css';
import Data from './Data'
import Card from './Card'
import Nav from './Nav'

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: Data,
      index: 0
    }
    this.moveUpData = this.moveUpData.bind(this)
    this.moveDownData = this.moveDownData.bind(this)
    
  }
moveUpData(){
  let newIndex = 0
  if(this.state.index == 24){
    newIndex = 0
  }else{
    newIndex = this.state.index + 1
  }
  this.setState({index: newIndex})
}
moveDownData(){
  let newerIndex = this.state.index
  if(newerIndex === 0){
    newerIndex = 24
  }else{
    newerIndex--
  }
  this.setState({index: newerIndex})
}

  render(){
    //console.log(this.state)
    return (
      <div className="App">
        <header><h3 id={'header-text'}>Home</h3></header>
        <Card data={this.state.data} index={this.state.index} />
        <Nav moveUpData={this.moveUpData} moveDownData={this.moveDownData}/>
      </div>
    );
  }
}

export default App;
