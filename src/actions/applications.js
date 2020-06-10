export const  allApplications = (applications) => {
    return {
        type: "DISPLAY_APPLICATIONS",
        payload: applications
        
    }
}

export const  addApplication = (application) => {
    return {
        type: "ADD_APPLICATION",
        payload: application
        
    }
}
