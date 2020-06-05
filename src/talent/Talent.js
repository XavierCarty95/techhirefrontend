import React from 'react'

const Talent = props => {
 
    return (
        <div>
        <p>{props.user.first_name}</p>
        <p>{props.user.last_name}</p>
        </div>
    )

}

export default Talent