import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'



const Navbar = (props) => {
  console.log(props)
    return(
    <nav>
    <div className = "green accent-4">
    <NavLink to="/">TechHire</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
         props.token?  <li onClick={props.logout}><NavLink to="/login">Logout, {props.user.email}</NavLink></li> : <li><NavLink to="/login">Sign In</NavLink></li>
        }
        
        { props.token? <li><NavLink to="/profile">Profile</NavLink></li> : null} 
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/talent">Talent</NavLink></li>
        <li><NavLink to="/companies">Companies</NavLink></li>
      </ul>
  </div>
  </nav>
 )
}

let mapStateToProps = (state) => {
  return {
      token: state.userInformation.token,
      user: state.userInformation.user
  }

}

export default connect(mapStateToProps)(Navbar)