

export const setUserInfo = (user) => {
  
    return {
        type: "SET_USER_INFO",
        payload: user 
    }

}


export const displayAllUsers = (users) => {
    return {
        type: "DISPLAY_USERS",
        payload: users
    }

}

export const  logOutUser = () => {
    return {
        type: "LOGOUT_USER"
        
    }
}





