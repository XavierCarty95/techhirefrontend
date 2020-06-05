import React from 'react'

export default function Job(props) {
    console.log(props.job)
    return (
        <div>
           <h3>Name: {props.job.name}</h3>
           <h4>Role: {props.job.role}</h4>
           <p>Description: {props.job.description}</p>
           <p>Location: {props.job.location}</p>
           <button className="btn waves-effect waves-light green accent-4"> Apply </button>
           <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}><a href = {props.job.company.website}> Apply on Website </a></button>
        </div>
    )
}
