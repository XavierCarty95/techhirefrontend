import React, { Component } from 'react'
import { connect } from 'react-redux'



 class Job extends Component {
  
    state = {

       applied: false            


    }


     handleApplication = () => {
         const user = {
                 job_id: this.props.job.id ,
                 user_id: this.props.user.id,
                 name: this.props.job.company.website
        
             } 
             this.props.handleApplication(user)
             this.setState(function(prevState){
                return {applied: !prevState.applied}
             });
           
    }
    

    render() {
        let filter;
     if(this.props.user){
        filter = this.props.user.jobs.map(job => {
            
            
          return job.id === this.props.job.id ? job.id : null 
        
        
        })
           
     }   

        return (
            <div>
            <h3>Company Name: {this.props.job.name}</h3>
            <h4>Role: {this.props.job.role}</h4>
            <h4>Work-Type: {this.props.job.work_type}</h4>
            <p>Description: {this.props.job.description}</p>
            <p>Location: {this.props.job.location}</p>
            {this.props.user && filter.includes(this.props.job.id) && !this.state.applied ? <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> You have applied to this Job</button> : null }
            {this.props.user &&  !filter.includes(this.props.job.id) && !this.state.applied ? <button onClick={this.handleApplication} className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> Apply </button> : null}
            {this.state.applied && this.props.user ? <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}> You have applied to this Job</button> : null }
            <button className="btn waves-effect waves-light green accent-4" style={{marginLeft: "5px"}}><a href = {this.props.job.company.website}> Visit Website </a></button>
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

