import React, { Component } from 'react'
import DateBox from './DateBox'

class GridCalendar extends Component {
    render() {
        return (
            <div className="calendar">
                <div className="calendar-row">
                    <DateBox number="1"/>
                    <DateBox number="2"/>    
                    <DateBox number="3"/>
                    <DateBox number="4"/>
                    <DateBox number="5"/>
                    <DateBox number="6"/>
                    <DateBox number="7"/>
                </div>
                <div className="calendar-row">
                    <DateBox number="8"/>
                    <DateBox number="9"/>    
                    <DateBox number="10"/>
                    <DateBox number="11"/>
                    <DateBox number="12"/>
                    <DateBox number="13"/>
                    <DateBox number="14"/>
                </div>
                <div className="calendar-row">
                    <DateBox number="15"/>
                    <DateBox number="16"/>    
                    <DateBox number="17"/>
                    <DateBox number="18"/>
                    <DateBox number="19"/>
                    <DateBox number="20"/>
                    <DateBox number="21"/>
                </div>
                <div className="calendar-row">
                    <DateBox number="22"/>
                    <DateBox number="23"/>    
                    <DateBox number="24"/>
                    <DateBox number="25"/>
                    <DateBox number="26"/>
                    <DateBox number="27"/>
                    <DateBox number="28"/>
                </div>
            </div>
        )
    }
}

export default GridCalendar
