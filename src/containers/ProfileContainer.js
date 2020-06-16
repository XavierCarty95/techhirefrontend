import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'



 function ProfileContainer({profile: {id,image , first_name , last_name, email , title , linkedin , portfolio , github , resume , skills}, handleDelete}) {
  
    const handleClick = () => {
        
        handleDelete(id)
    
    }


    return (
        <div style = {{marginTop: "100px"  }} className = "container text text-row center-align">
        <img className = "ui small left floated" src = {image} style = {images} alt={first_name}/>
        <div style = {{marginBottom: "100px" , marginTop: "20px"  }} className = "container">
        <h3>Name: {first_name} {last_name}</h3>
        <p>Email: {email}</p>
        <p>Role: {title} </p>
        <p>Linkedin: {linkedin} </p>
        <p>Portfolio: {portfolio} </p>
        <p>Github: {github} </p>
        <p>Resume: {resume} </p>
        <p>Skills: {skills} </p>
        <span> <button onClick={handleClick} className="btn waves-effect waves-light red accent-4" style={{marginRight: "5px" }}> DELETE Profile </button></span>
        <span><button className="btn waves-effect waves-light green accent-4" ><NavLink to="/updateProfile" style={{marginLeft: "10px"}}>Edit Profile</NavLink></button> </span>
        </div>
        </div>
    )
}


const images = {
   
   borderRadius: "50%",
   marginLeft: "20px",
   marginTop: "20px"

}

let mapStateToProps = (state) => {
 
    return {
        profile: state.userInformation.user
    }
}
export default connect(mapStateToProps)(ProfileContainer)
