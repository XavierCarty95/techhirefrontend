import React from 'react'
import {connect} from 'react-redux'




 function ProfileContainer(props) {
     console.log(props)
   
    return (
        <div>
            <p>{props.profile.email}</p>
            {props.profile.first_name}
            {props.profile.last_name}
            
        </div>
    )
}



let mapStateToProps = (state) => {
 
    return {
        profile: state.userInformation.user
    }
}
export default connect(mapStateToProps)(ProfileContainer)
