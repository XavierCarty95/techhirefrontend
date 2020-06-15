import React from 'react'

export default function Company({company:{website , name , email , about} }) {
    return (
       
            <div class="item">
            <div class="content">
           <h1>{name}</h1>
           <p> Email: {email}</p>
           <p>Website: <a href = {website}>{website}</a></p>
           <p>About: {about} </p>
        </div>
     </div>
    )
}
