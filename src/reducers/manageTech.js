import {combineReducers} from 'redux'



let initialUserState = {
    id: 0,
    token: "",
  }

let userReducer = (state = initialUserState, action) => {
 
    switch(action.type) {
        case "SET_USER_INFO":
            return {
            ...state,
             id: action.payload.id,
             user: action.payload.user,
             token: action.payload.token,
            
            }
        case "DISPLAY_USERS":
            return {
                ...state, 
                users: action.payload
            }

            case "UPDATE_USER":
                
                
                return {
                    ...state, 
                    user: action.payload
                }

        
        case "LOGOUT_USER":
            return { }


            default: 
            return state
        }


    }


    let initialTalentState = {
        users:[]
    }
    let talentReducer = (state = initialTalentState, action) => {
 
        switch(action.type) {
           
            case "DISPLAY_USERS":
                return {
                    ...state, 
                    users: action.payload
                }


                case "DELETE_USER": 
                return {
                    ...state,
                    users: state.users.filter(user => user.id !== action.payload)
                   
                }
            
                default: 
                return state
            }
    
    
        }

        let initialJobState = {
            jobs:[]
        }

    
        let jobReducer = (state = initialJobState, action) => {
 
            switch(action.type) {
               
                case "DISPLAY_JOBS":
                    return {
                        ...state, 
                        jobs: action.payload
                    }
        
        
                    default: 
                    return state
                }
        
        
            }

            let initialCompaniesState = {
                companies:[],
                
            }
    
    
        let companiesReducer = (state = initialCompaniesState, action) => {
 
                switch(action.type) {
                   
                    case "DISPLAY_COMPANIES":
                        return {
                            ...state, 
                            companies: action.payload
                        }
                    case "ADD_COMPANY":
                       let companyToAdd = action.payload
                       let copyOfCompanies = [...state.companies , companyToAdd]
                        return {
                            ...state, 
                            companies: copyOfCompanies
                        }
                        
                 
            
            
                        default: 
                        return state
                    }
            
            
         }
         let initialApplicationState = {
            applications:[]
        }

    
        let applicationReducer = (state = initialApplicationState, action) => {
 
            switch(action.type) {
               
                case "DISPLAY_APPLICATIONS":
                    return {
                        ...state, 
                        applications: action.payload
                    }
                    case "ADD_APPLICATION":
                        let applicationAdd = action.payload
                        let copyOfApplications = [...state.applications , applicationAdd]
                         return {
                             ...state, 
                             applications: copyOfApplications
                    }
        
                    default: 
                    return state
                }
        
        
            }
        
    
    



    const rootReducer = combineReducers({
    
        companyInformation: companiesReducer, 
        jobInformation: jobReducer, 
        applicationInformation: applicationReducer,
        userInformation: userReducer,
        talentInformation: talentReducer
    
    
    })
    
    export default rootReducer;