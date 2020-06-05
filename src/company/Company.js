import React from 'react'

export default function Company(props) {
    return (
        <div>
            
           <h1>{props.company.name}</h1>
           <p> Email: {props.company.email}</p>
           <p>Website: <a href = {props.company.website}>{props.company.website}</a></p>
           <p>About: {props.company.about} </p>
        
        </div>
    )
}
