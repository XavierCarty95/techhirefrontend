import React from 'react'

const Talent = props => {
 
    return (
        <div>
        
        <h3>Name: {props.user.first_name} {props.user.last_name}</h3>
        <p>Email: {props.user.email}</p>
        <p>Role: {props.user.title} </p>
        <p>Linkedin: {props.user.linkedin} </p>
        <p>Portfolio: {props.user.portfolio} </p>
        <p>Github: {props.user.github} </p>
        <p>Resume: {props.user.resume} </p>
        <p>Skills {props.user.skills} </p>
        {/* <p>{props.user.phone_number} </p> */}
        </div>
    )

}

export default Talent