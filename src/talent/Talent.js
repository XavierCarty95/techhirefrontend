import React from 'react'

const Talent = props => {
 
    return (
        
        
     <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src={props.user.image} alt={props.user.first_name} style={{height: "200px"}}/>
      </div>
      <div class="content">
       <h3>Name: {props.user.first_name} {props.user.last_name}</h3>
         
        <p>Email: {props.user.email}</p>
         <p>Role: {props.user.title} </p>
         <p>Portfolio: {props.user.portfolio} </p>
         <p>Resume: {props.user.resume} </p>
         <p>Skills {props.user.skills} </p>
         <p>{props.user.phone_number} </p>
       <a href = {props.user.github}> <i class="github alternate icon"></i></a>
       <a href = {props.user.linkedin}> <i class="linkedin icon"></i> </a>
         
      </div>
    </div>
  </div>
  

   
    )

}

export default Talent