import React, { Component } from 'react'

export class Api extends Component {
    render() {

        const {company, title, location, company_url , company_logo} = this.props.api
        const stripedHtml = this.props.api.description.replace(/<[^>]+>/g, '');
        const string = stripedHtml.substring(0,600) + ".....";


        return (
            
            <div class="item">
      
            <div class="content">
            <img src = {company_logo} className="ui small image" alt={company}></img>
            <h1> Company Name: {company} </h1> 
                <h3> Title: {title} </h3>
            <p> Location: {location}</p>
        <a href = {company_url} class="header">Website</a>
        <p class="description">{string}</p>
            </div>
            </div>
            
                    )
    }
}

export default Api
