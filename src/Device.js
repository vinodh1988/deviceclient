import React from 'react';

export default class Device extends React.Component{

    render(){
        if(this.props.device.name==undefined)
           return (<h1>No Device Found</h1>);
        else
           return(
               <div id="device">
                   <u>Name </u>: {this.props.device.name} <br/>
                   <u>Cpu Model </u>: {this.props.device.cpuModel} <br/>
                   <u>Description </u>: {this.props.device.description} <br/>
                   <u>Agent Version </u>: {this.props.device.agentVersion} <br/>
                   <u>Collector </u>: {this.props.device.collector} <br/>
                   <u>Ip Addresses</u><ul> {this.props.device.IpAddresses.map(x=><li>{x}</li>)} </ul>
              </div>
           )
    }
}