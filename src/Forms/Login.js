import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Login extends Component {
    state = {
        email: "",
        password: "",
      }

      handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }


      handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleLogin(this.state)
        this.setState({
          email: "",
          password: ""
        })
      }

      
    
    render() {
        return (
            <div className ="ui center aligned">
            
              <form  style = {{marginTop: "70px"}} className= "ui form"  onSubmit = {this.handleSubmit}> 
              <h1 className= "ui center aligned" >Sign In</h1>

              <p style = {{color: "red"}}> {this.props.message} </p>
              <div className="field">
              <label htmlFor="email">Email</label>
              <input style={{width: "500px"}} placeholder = "Email" type = "text" name="email" value = {this.state.email} onChange={this.handleInput} />
             </div>
            
        
        <div className="field">
        <label htmlFor="password">Password</label>
        <input style={{width: "500px"}} placeholder = "Password" type = "password" autoComplete="off" name="password" value = {this.state.password} onChange={this.handleInput} />
          
     </div>
     Member's Don't Have An Account ? <button className="btn waves-effect waves-light green accent-4"><NavLink style={{textDecoration: "none" , color:"white"}} to="/register">Register</NavLink></button> 
      <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px" ,color: "white"}} type="submit" value="Submit"> Submit </button>
    </form>
    </div> 
      )
      }
    }

    export default Login