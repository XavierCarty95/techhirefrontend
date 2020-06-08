import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class Register extends Component {
    state = {
    
    first_name: "",
    last_name: "",
    email: "",
    title: "",
    linkedin: "",
    image: "",
    portfolio: "",
    github: "",
    resume: "",
    skills: "",
    phone_number: "",
    password: ""
  }


  handleInput = (evt) => {
    let {name , value} = evt.target
    this.setState({
        [name] : value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleRegister(this.state)
  }
    render() {
        return (
            <div className ="ui center aligned">
                <h1 className ="center-align"> Sign In</h1>
                <form className= "ui form" onSubmit = {this.handleSubmit}>
                <div class="two fields">
                <div className="field">
                <label htmlFor="first_name">
                 First Name 
                 </label>
                <input type = "text" style={{width: "500px"}} className="input" placeholder="enter your firstname"  name="first_name" value = {this.state.first_name} onChange={this.handleInput} />
                </div>
                <div className="field">
                <label htmlFor="last_name">
                Last Name </label>
                    <input style={{width: "500px"}} type = "text" className="input-width" placeholder="enter your email"  name="last_name" value = {this.state.last_name} onChange={this.handleInput} />
                
                
                </div>
                </div>
                <div class="two fields">
                <div className="field">
                <label htmlFor="email">
                    Email
                </label>
                    <input type = "email" style={{width: "500px"}}  placeholder="enter your password" name="email" value = {this.state.email} onChange={this.handleInput} />
                
                </div>
               
                <div className="field">
                <label htmlFor="title">
                Title
                </label>
                    <input type = "text" style={{width: "500px"}} placeholder="enter your first name"   name="title" value = {this.state.title} onChange={this.handleInput} />
                
                </div>
                </div>
                <div class="two fields">
                <div className="field">
                <label htmlFor="linkedin">
                 Linkedin
                 </label>
                    <input type = "text" style={{width: "500px"}} placeholder="enter your last name"  name="linkedin" value = {this.state.linkedin} onChange={this.handleInput} />
                
                </div>
                <div className="field">
                <label htmlFor="image">
                    Image
                    </label>
                    <input type = "text" style={{width: "500px"}} placeholder="image"  name="image" value = {this.state.image} onChange={this.handleInput} />
                
                </div>
                </div>
                <div class="two fields">
                <div className="field">
                <label htmlFor="portfolio">
                 Portfolio
                 </label>
                    <input type = "text" style={{width: "500px"}} placeholder="portfolio"  name="portfolio" value = {this.state.portfolio} onChange={this.handleInput} />
                
                </div>
                <div className="field">
                <label htmlFor="github">
                    Github 
                    </label>
                    <input type = "text" style={{width: "500px"}} placeholder="github"  name="github" value = {this.state.github} onChange={this.handleInput} />
               
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                <label htmlFor="resume">
                    Resume 
                    </label>
                    <input type = "text" style={{width: "500px"}} placeholder="resume"  name="resume" value = {this.state.resume} onChange={this.handleInput} />
                
                </div>
                <div className="field">
                <label htmlFor="skills">
                    Skills
                    </label>
                    <input type = "text" style={{width: "500px"}} placeholder="skills"  name="skills" value = {this.state.skills} onChange={this.handleInput} />
                
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                <label htmlFor="phone number ">
                    Phone Number
                    </label>
                    <input type = "text" style={{width: "500px"}} placeholder="resume"  name="phone_number" value = {this.state.phone_number} onChange={this.handleInput} />
               
                </div>
                <div className="field">
                <label htmlFor="password ">
                    Password
                    </label>
                    <input type = "password" style={{width: "500px"}} placeholder="password"  name="password" value = {this.state.password} onChange={this.handleInput} />
                
                </div>
                </div>
                Have an account ? <button className="btn waves-effect waves-light green accent-4" ><NavLink to="/login" style={{textDecoration: "none" , color:"white"}}>Sign In</NavLink></button> 
                <input style={{marginLeft: "5px"}}className="btn waves-effect waves-light green accent-4" type="submit" value="Submit"/>
             </form>
            </div>
        )
    }
}

export default Register