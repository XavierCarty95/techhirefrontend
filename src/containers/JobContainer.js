import React from 'react';
import { connect } from 'react-redux'
import Job from '../job/Job'
 


const JobContainer = (props) =>  {

    console.log(props)
    let arrayOfComponents = props.jobs.map((job) => {
        return <Job key={job.id} job={job} handleApplication={props.handleApplication}/>
      })
    return (
        <div>
            <h1 className = "center-align">Job</h1>
            {arrayOfComponents}
        </div>
    )
}

let mapStateToProps = (state) => {
 
    return {
        allTheJobs: state.jobInformation.jobs,
        user: state.userInformation.user
    }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(JobContainer)
export default componentThatNowHasProps;
