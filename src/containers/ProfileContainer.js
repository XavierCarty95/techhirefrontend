import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'



 function ProfileContainer({profile: {id,image , first_name , last_name, email , title , linkedin , portfolio , github , resume , skills}, handleDelete}) {
  
    const handleClick = () => {
        
        handleDelete(id)
    
    }


    return (
        <div className = "container center-align">
        
        <img className = "ui small left floated" src = {image} style = {images} alt={first_name}/>
        <h3>Name: {first_name} {last_name}</h3>
        <p>Email: {email}</p>
        <p>Role: {title} </p>
        <p>Linkedin: {linkedin} </p>
        <p>Portfolio: {portfolio} </p>
        <p>Github: {github} </p>
        <p>Resume: {resume} </p>
        <p>Skills: {skills} </p>
        <button onClick={handleClick} className="btn waves-effect waves-light red accent-4" style={{marginRight: "5px"}}> DELETE Profile </button>
        <button className="btn waves-effect waves-light green accent-4" ><NavLink to="/updateProfile" style={{marginLeft: "5px"}}>Edit Profile</NavLink></button> 
        </div>
    )
}


const images = {
   
   borderRadius: "50%"

}

let mapStateToProps = (state) => {
 
    return {
        profile: state.userInformation.user
    }
}
export default connect(mapStateToProps)(ProfileContainer)
