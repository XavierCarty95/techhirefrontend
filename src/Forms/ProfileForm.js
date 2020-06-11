import React, { Component } from 'react'
import {connect} from 'react-redux'
export class ProfileForm extends Component {
    state = {
    
        first_name:  this.props.profile.first_name || "",
        last_name:   this.props.profile.last_name || "",
        title: this.props.profile.title || "",
        linkedin: this.props.profile.linkedin || "",
        image: this.props.profile.image || "",
        portfolio: this.props.profile.portfolio || "",
        github: this.props.profile.github || "",
        resume: this.props.profile.resume || "",
        skills:  this.props.profile.skills || "",
       
      }

      handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }

      handleSubmit = (evt) => {
           evt.preventDefault() 
           this.props.handleUpdate(this.props.profile.id ,this.state)

      }
    
    render() {
        return (
            <div>
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
                <label htmlFor="title">
               Title
                </label>
                    <input type = "text" style={{width: "500px"}} placeholder="enter your title ex. Full-Stack Developer"   name="title" value = {this.state.title} onChange={this.handleInput} />
                
                </div>
                </div>
                <div class="two fields">
                <div className="field">
                <label htmlFor="linkedin">
                 Linkedin
                 </label>
                    <input type = "text" style={{width: "500px"}} placeholder="enter your linkend"  name="linkedin" value = {this.state.linkedin} onChange={this.handleInput} />
                
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
                
                <input style={{marginLeft: "5px"}}className="btn waves-effect waves-light green accent-4" type="submit" value="Submit"/>
             </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  
     return {
         profile: state.userInformation.user
     }
}


export default connect(mapStateToProps)(ProfileForm)
