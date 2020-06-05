import React from 'react';
import { connect } from 'react-redux'
import Job from '../job/Job'
 


const JobContainer = (props) =>  {
    console.log(props.allTheJobs)
    let arrayOfComponents = props.allTheJobs.map((job) => {
        return <Job key={job.id} job={job}/>
      })
    return (
        <div>
            {arrayOfComponents}
        </div>
    )
}

let mapStateToProps = (state) => {
 
    return {
        allTheJobs: state.jobInformation.jobs
    }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(JobContainer)
export default componentThatNowHasProps;
