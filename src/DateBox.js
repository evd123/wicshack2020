import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
//import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DateBox.css";


class DateBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //currColor: "#FFFF00"
            colorVar: "light",
        }

        this.colorList = ["light", "dark", "primary", "secondary", "success", "warning", "danger", "info"]
    }
    
    setColor = () => {
        this.setState({
            colorVar: this.colorList[Math.floor(Math.random()*8)]
        });
    }

    render() {
        var number = this.props.number;
        return (
            <div className="box">
                <Button variant={this.state.colorVar} onClick = {() => this.setColor()}>
                    {number}
                </Button>
            </div>
        );
    }
}

export default DateBox
