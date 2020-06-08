export const  AllJobs = (jobs) => {
    return {
        type: "DISPLAY_JOBS",
        payload: jobs
        
    }
}

export const  AddJob = (job) => {
    return {
        type: "ADD_JOB",
        payload: job
        
    }
}