import {combineReducers} from 'redux'



let initialUserState = {
    id: 0,
    email: "",
    token: "",
    jobs: []
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
    
    
                default: 
                return state
            }
    
    
        }

    



    const rootReducer = combineReducers({
    
        // companies: companiesReducer, 
        // jobs: jobReducer, 
        // applications: applicationReducer,
        userInformation: userReducer,
        talentInformation: talentReducer
    
    
    })
    
    export default rootReducer;