import React, { Component } from 'react'
import Loading from  './Spinner-1.2s-151px.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Loading} alt="Loading" style={{height:"50px"}}/>
            </div>
        )
    }
}
