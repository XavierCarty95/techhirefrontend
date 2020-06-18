import React, { Component } from 'react'
import { connect } from 'react-redux'



 class Job extends Component {
  
    state = {

       applied: false            


    }


     handleApplication = () => {
         const {company , id} = this.props.job
         const user = {
                 job_id: id ,
                 user_id: this.props.user.id,
                 name: company.website
        
             } 
             this.props.handleApplication(user)
             this.setState(function(prevState){
                return {applied: !prevState.applied}
             });
           
    }
    

    render() {
        const {name , role , work_type , description , location , id , company} = this.props.job
        let filter;
     if(this.props.user){
        filter = this.props.user.jobs.map(job => {
            
            
          return job.id === id ? job.id : null 
        
        
        })
           
     }   

        return (
         
            <div class="item">
      
             <div class="content">
            <h3>Company Name: {name}</h3>
            <h4>Role: {role}</h4>
            <h4>Work-Type: {work_type}</h4>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            {this.props.user && filter.includes(id) && !this.state.applied ? <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> You have applied to this Job</button> : null }
            {this.props.user &&  !filter.includes(id) && !this.state.applied ? <button onClick={this.handleApplication} className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> Apply </button> : null}
            {this.state.applied && this.props.user ? <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> You have applied to this Job</button> : null }
            <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}><a href = {company.website} target = "_blank" rel="noopener noreferrer"> Visit Website </a></button>
           </div>
         </div>
      
        )
      }








}
let mapStateToProps = (state) => {
 
    return {
        user: state.userInformation.user

    }

}





export default connect(mapStateToProps)(Job)

