import React, { Component } from 'react'

export class Api extends Component {
    render() {

        const {company, title, location, company_url} = this.props.api
        const stripedHtml = this.props.api.description.replace(/<[^>]+>/g, '');
        const string = stripedHtml.substring(0,600) + "....."


        return (
            <div>
            <h1> Company Name: {company} </h1> 
             <h3> Title: {title} </h3>
             <p> Location: {location}</p>
             <p> {string}</p>
             <a href = {company_url}> Company_url {company_url} </a>
            </div>
        )
    }
}

export default Api
