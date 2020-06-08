import React, { Component } from 'react'



 class CompanyForm extends Component {
    state = {
        name: "",
        email: "",
        website: "",
        about: ""

      }

      handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }


      handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleCompany(this.state)
      }
    
    render() {
        return (
            <div className ="ui center aligned">
             <form  style = {{marginTop: "70px"}} className= "ui form"  onSubmit = {this.handleSubmit}> 
              <h1 className= "ui center aligned" >Create Company</h1>
              <div className="field">
              <label htmlFor="name">Name</label>
              <input style={{width: "500px"}} placeholder = "Name" type = "text" name="name" value = {this.state.name} onChange={this.handleInput} />
             </div>
             <div className="field">
              <label htmlFor="email">Email</label>
              <input style={{width: "500px"}} placeholder = "Email" type = "text" name="email" value = {this.state.email} onChange={this.handleInput} />
             </div>
              <div className="field">
              <label htmlFor="website">Website</label>
              <input style={{width: "500px"}} placeholder = "Website" type = "text" name="website" value = {this.state.website} onChange={this.handleInput} />
             </div>
            <div className="field">
           <label htmlFor="about">About</label>
           <input style={{width: "500px"}} placeholder = "About" type = "text" name="about" value = {this.state.about} onChange={this.handleInput} />
          
           </div>
          <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px" ,color: "white"}} type="submit" value="Submit"> Add Company  </button>
          </form>
         </div> 
         )
       }
      }


      export default CompanyForm