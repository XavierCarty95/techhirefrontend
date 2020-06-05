import  React, { Component, Profiler } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/Navbar'
import {displayAllUsers, setUserInfo} from './actions/users'
import {connect } from 'react-redux'
import TalentContainer from './containers/TalentContainer'
import ProfileContainer from './containers/ProfileContainer'
import Register from './Forms/Register'
import Login from  './Forms/Login'

class App extends Component {

  componentDidMount() {
   if(localStorage.token){
      fetch("http://localhost:4000/users/stay_logged_in",{
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(r => r.json())
      .then(response => {
        localStorage.token = response.token
        this.props.setUserInfo(response)
   
     })


   }

   fetch("http://localhost:4000/users")
   .then(r => r.json())
   .then(response => {
      this.props.displayAllUsers(response)
   })
}
handleLoginSubmit = (user) => {
  fetch("http://localhost:4000/users/login", {
   method: "POST",
   headers: {
     "Content-type": "application/json"
   },
   body: JSON.stringify(user)
 })
 .then(r => r.json())
 .then( response => {
     console.log(response)   
  localStorage.token = response.token

     this.props.setUserInfo(response)
     this.props.history.push("/profile")

  })
 }

 renderForm = (routerProps) => {

    if(routerProps.location.pathname === "/login"){
       return <Login handleLogin={this.handleLoginSubmit} />
    } else if (routerProps.location.pathname === "/register") {
      return <Register
        formName="Register Form"
        handleRegister={this.handleRegisterSubmit}
      />
    }


 }


 renderProfile = (routerProps) => {
    if(this.props.token){
      return <ProfileContainer/> 
    } else {
      this.props.history.push("/login")
    }
 }

  render() {
    console.log(this.props)
    return (
      <div>
       <NavBar/>
       <Switch>
         <Route path="/login" render={this.renderForm}/>
         <Route path="/register" render={this.renderForm}/>
         <Route path="/profile" render={this.renderProfile}/>
         {/* <Route path="/" exact component={Home} /> */}
       </Switch>
       {/* <TalentContainer /> */}
      </div>
    )
  }
}

let mapStateToDispatch = {
    
  displayAllUsers: displayAllUsers,
  setUserInfo: setUserInfo

}



let mapStateToProps = state => {
  return {
    token: state.userInformation.token
  }
}




let componentWithRouterProps = withRouter(App)


export default connect(mapStateToProps, mapStateToDispatch)(componentWithRouterProps)
