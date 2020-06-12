import React, { Component } from 'react'

class JobFilter extends Component {
    
    handleSearch = (evt) => {
        this.props.handleTheSearchParameter(evt.target.value)
    }
    
    render() {
        return (
            <div className = "ui form">
                 <div class="field">
                <select name="Work Type" multiple="" value={this.props.theSearchParamater} onChange={this.handleSearch}>
                <option value='All'>All</option>
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                </select>
            </div>
           </div>
        )
    }
}

export default JobFilter
