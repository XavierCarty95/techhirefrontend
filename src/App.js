import  React, { Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import "./App.css"
import NavBar from './components/Navbar'
import Home from './components/Home'
import {displayAllUsers, setUserInfo ,logOutUser} from './actions/users'
import {AllJobs} from './actions/jobs'
import {allCompanies} from './actions/companies'
import {connect } from 'react-redux'
import TalentContainer from './containers/TalentContainer'
import ProfileContainer from './containers/ProfileContainer'
import JobContainer from './containers/JobContainer'
import CompanyContainer from './containers/CompanyContainer'
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

   fetch("http://localhost:4000/companies")
   .then(r => r.json())
   .then(response => {
     console.log(response)
      this.props.allCompanies(response)
   })


   fetch("http://localhost:4000/jobs")
  .then(r => r.json())
  .then(response => {
      this.props.AllJobs(response)
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

 handleRegisterSubmit = (userInfo) => {
  fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(r => r.json())
    .then(response => {
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

 renderTalent = (routerProps) => {
  if(routerProps.location.pathname === "/talent"){
    return  <TalentContainer />
  }



 }
 logout = () => {
    localStorage.clear("token")
    this.props.logOutUser()
   

}

renderJob = (routerProps) => {
  if(routerProps.location.pathname === "/jobs"){
    return  <JobContainer/>
  }

 }

 renderCompany = (routerProps) => {
  if(routerProps.location.pathname === "/companies"){
    return  <CompanyContainer />
  }

}

  render() {
    return (
      <div>
       <NavBar logout={this.logout}/>
       <Switch>
         <Route path="/login" render={this.renderForm}/>
         <Route path="/register" render={this.renderForm}/>
         <Route path="/profile" render={this.renderProfile}/>
         <Route path="/talent" render={this.renderTalent}/>
         <Route path="/jobs" render={this.renderJob}/>
         <Route path="/companies" render={this.renderCompany}/>
         <Route path="/" component={Home}/>
       </Switch>
       
      </div>
    )
  }
}

let mapStateToDispatch = {
    
  displayAllUsers: displayAllUsers,
  setUserInfo: setUserInfo,
  logOutUser: logOutUser,
  AllJobs: AllJobs,
  allCompanies: allCompanies

}



let mapStateToProps = state => {
  return {
    token: state.userInformation.token
  }
}




let componentWithRouterProps = withRouter(App)


export default connect(mapStateToProps, mapStateToDispatch)(componentWithRouterProps)
