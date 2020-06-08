import React from 'react'
import {connect} from 'react-redux'




 function ProfileContainer(props) {
     console.log(props)
   
    return (
        <div className = "container center-align">
        
        <img src = {props.profile.image} style = {image} alt={props.profile.first_name}/>
        <h3>Name: {props.profile.first_name} {props.profile.last_name}</h3>
        <p>Email: {props.profile.email}</p>
        <p>Role: {props.profile.title} </p>
        <p>Linkedin: {props.profile.linkedin} </p>
        <p>Portfolio: {props.profile.portfolio} </p>
        <p>Github: {props.profile.github} </p>
        <p>Resume: {props.profile.resume} </p>
        <p>Skills {props.profile.skills} </p>
            
        </div>
    )
}


const image = {
   
   borderRadius: "50%"

}

let mapStateToProps = (state) => {
 
    return {
        profile: state.userInformation.user
    }
}
export default connect(mapStateToProps)(ProfileContainer)
