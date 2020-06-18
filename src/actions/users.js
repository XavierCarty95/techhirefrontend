

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


export const deleteUser = (user) => {
    return {
        type: "DELETE_USER",
        payload: user

    }
}
export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        payload: user

    }
}





