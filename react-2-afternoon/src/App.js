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
  if(this.state.index == 25){
    newIndex = 0
  }else{
    newIndex = this.state.index++
  }
  this.setState({index: newIndex})
}
moveDownData(){
  let newerIndex = 25
  if(this.state.index == 0){
    newerIndex = 25
  }else{
    newerIndex = this.state.index--
  }
  this.setState({index: newerIndex})
}

  render(){
    return (
      <div className="App">
        <header>Home</header>
        <Card data={this.state.data} index={this.state.index} />
        <Nav moveUpData={this.moveUpData} moveDownData={this.moveDownData}/>
      </div>
    );
  }
}

export default App;
