import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import Device from './Device';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={device:{}};
    this.loadDevice=this.loadDevice.bind(this);
  }

  loadDevice(){
    console.log("Event fired")
    let id=ReactDOM.findDOMNode(this.refs.deviceid).value;
    Request.get("http://localhost:8888/devices/"+id).then
    (
      (response)=>{
        console.log(response.body);
        this.state.device=response.body;
        this.setState(this.state);
      },
      (error)=>{
        console.log("Error");
        console.log(error);
      }
    )

  }

  render(){
      return(
        <div id="client">
             Enter Device id<input type="text" ref="deviceid"/>
             <button onClick={this.loadDevice}>Get Device</button>
             <Device device={this.state.device}></Device>
        </div>
      )
  }
}

export default App;
