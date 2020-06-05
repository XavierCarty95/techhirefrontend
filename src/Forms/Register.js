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
            <div className="container">
                <h1 className ="center-align"> Sign In</h1>
                <form onSubmit = {this.handleSubmit}>
                <label htmlFor="first_name">
                 First Name 
                <input type = "text" placeholder="enter your firstname"  name="first_name" value = {this.state.first_name} onChange={this.handleInput} />
                </label>
                <label htmlFor="last_name">
                Last Name
                    <input type = "text" placeholder="enter your email"  name="last_name" value = {this.state.last_name} onChange={this.handleInput} />
                </label>
                 Email
                <label htmlFor="email">
                    <input type = "email" placeholder="enter your password" name="email" value = {this.state.email} onChange={this.handleInput} />
                </label>
               
                <label htmlFor="title">
                Title
                    <input type = "text" placeholder="enter your first name"   name="title" value = {this.state.title} onChange={this.handleInput} />
                </label>
                <label htmlFor="linkedin">
                 Linkedin
                    <input type = "text" placeholder="enter your last name"  name="linkedin" value = {this.state.linkedin} onChange={this.handleInput} />
                </label>
                <label htmlFor="image">
                    Image
                    <input type = "text" placeholder="image"  name="image" value = {this.state.image} onChange={this.handleInput} />
                </label>
                <label htmlFor="portfolio">
                 Portfolio
                    <input type = "text" placeholder="portfolio"  name="portfolio" value = {this.state.portfolio} onChange={this.handleInput} />
                </label>
                <label htmlFor="github">
                    Github 
                    <input type = "text" placeholder="github"  name="github" value = {this.state.github} onChange={this.handleInput} />
                </label>
                <label htmlFor="resume">
                    Resume 
                    <input type = "text" placeholder="resume"  name="resume" value = {this.state.resume} onChange={this.handleInput} />
                </label>
                <label htmlFor="skills">
                    Skills
                    <input type = "text" placeholder="skills"  name="skills" value = {this.state.skills} onChange={this.handleInput} />
                </label>
                <label htmlFor="phone number ">
                    Phone Number
                    <input type = "text" placeholder="resume"  name="phone_number" value = {this.state.phone_number} onChange={this.handleInput} />
                </label>
                <label htmlFor="password ">
                    Password
                    <input type = "password" placeholder="password"  name="password" value = {this.state.password} onChange={this.handleInput} />
                </label>
                <button className="btn waves-effect waves-light green accent-4" ><NavLink to="/login" style={{textDecoration: "none" , color:"white"}}>Sign In</NavLink></button> 
                <input style={{marginLeft: "5px"}}className="btn waves-effect waves-light green accent-4" type="submit" value="Submit"/>
             </form>
            </div>
        )
    }
}

export default Register