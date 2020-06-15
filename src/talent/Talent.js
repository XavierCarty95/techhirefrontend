import React from 'react'

const Talent = ({user :{id, image , first_name , last_name , email , title ,portfolio , skills , phone_number , github ,linkedin , resume}}) => {
  

  
    return (
        
        
     <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img src={image} alt={first_name} style={{height: "200px"}}/>
      </div>
      <div className="content">
       <h3>Name: {first_name} {last_name}</h3>
         
        <p>Email: {email}</p>
         <p>Role: {title} </p>
         <p>Portfolio: {portfolio} </p>
         <p>Resume: {resume} </p>
         <p>Skills {skills} </p>
         <p>{phone_number} </p>
       <a href = {github} className="fa fa-github"> </a>
       <a href = {linkedin} className="fa fa-linkedin"> </a>
         
      </div>
    </div>
  </div>
  

   
    )

}

export default Talent