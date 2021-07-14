import React, { Component, PureComponent } from 'react';

class PureCmponent extends PureComponent{
    constructor(){
        super();
        this.state =  {
            data : 10
        }
    }

    render(){
        console.warn(this.state.data);
        return(
            <div>
                <br></br>
                Pure Component : {this.state.data}
                <button onClick= {() => this.setState({data: 10})}>Update</button>
            </div>
        )
    }
}

export default PureCmponent;