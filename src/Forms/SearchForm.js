import React, { Component } from 'react'


class SearchForm extends Component {
    
    handleThisSearch = (evt) => { 
        this.props.handleSearchTerm(evt.target.value)
        console.log(evt.target.value)
    
    }
     
    render() {
        console.log(this.props)
        return (
            <div>
                
                <div className="ui category search center-align" style={{marginTop: '30px'}}>
                 <div className="ui icon input">
                 <input className="prompt" type="text" name = "searchTerm" placeholder={this.props.placeholder} value={this.props.searchTerm} onChange={this.handleThisSearch}/>
                  <i className="search icon"></i>
                   </div>
                      <div className="results"></div>
               </div>
            </div>
        )
    }
}


export default (SearchForm)
