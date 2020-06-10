import  React, { Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import "./App.css"
import NavBar from './components/Navbar'
import Home from './components/Home'
import {displayAllUsers, setUserInfo ,logOutUser } from './actions/users'
import {AllJobs} from './actions/jobs'
import {allCompanies , addCompany} from './actions/companies'
import {addApplication} from './actions/applications'
import {connect } from 'react-redux'
import TalentContainer from './containers/TalentContainer'
import ProfileContainer from './containers/ProfileContainer'
import JobContainer from './containers/JobContainer'
import CompanyContainer from './containers/CompanyContainer'
import Register from './Forms/Register'
import Login from  './Forms/Login'
import CompanyForm from  './Forms/CompanyForm'
import SearchForm from  './Forms/SearchForm'
import JobFilter from  './Forms/JobFilter'

class App extends Component {
  state = {
     searchTerm: "",
     theSearchParameter: "All"

  }

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

handleApplication = (applicationInfo) => {
  fetch("http://localhost:4000/applications", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(applicationInfo)
  })
    .then(r => r.json())
    .then(response => {
        this.props.addApplication(response)
        this.props.history.push("/jobs")
        

    })
}

handleCompany = (companyInfo) => {
  fetch("http://localhost:4000/companies", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(companyInfo)
  })
    .then(r => r.json())
    .then(response => {
      if (response.message) {
        alert(response.message)
      } else {
        this.props.addCompany(response)
        this.props.history.push("/companies")
      }
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
    return (<div><SearchForm  searchTerm = {this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/><TalentContainer talent = {this.filterTalent()} /></div>)
  }



 }
 logout = () => {
    localStorage.clear("token")
    this.props.logOutUser()
   

}

renderJob = (routerProps) => {
  if(routerProps.location.pathname === "/jobs"){
    return   (<div><JobFilter theSearchParameter= {this.state.theSearchParameter} handleTheSearchParameter={this.handleTheSearchParamater}/><JobContainer jobs={this.decideWhichArrayToRender()} handleApplication={this.handleApplication}/></div>)
  }

 }
 handleSearchTerm = (termFromChild) => {
  this.setState({
    searchTerm: termFromChild
  })
}

 renderCompany = (routerProps) => {
  if(routerProps.location.pathname === "/companies"){
    return  (<div><SearchForm  searchTerm = {this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/><CompanyContainer companies ={this.filterCompanies()} /></div>)
  }

}

renderAddCompany = (routerProps) => {
  if(routerProps.location.pathname === "/addCompany"){
    return <CompanyForm handleCompany = {this.handleCompany} /> 
  }
}

handleTheSearchParamater = (theSearchTerm) => {

  this.setState({
    ...this.state,
    theSearchParameter: theSearchTerm
  })
}
decideWhichArrayToRender = () => {
 
  let {theSearchParameter} = this.state
  console.log(theSearchParameter)
  let arrayToReturn = this.props.jobs
  let listOfJobs = [...this.props.jobs]
  if (theSearchParameter === "All") {
    
    arrayToReturn = listOfJobs
  }

  if (theSearchParameter === "Full-Time") {
    arrayToReturn = this.props.jobs.filter((job) => {
      return job.work_type === "Full-Time"
    })
  }

  if (theSearchParameter === "Part-Time") {
    arrayToReturn = this.props.jobs.filter((job) => {
      return job.work_type === "Part-Time"
    })
  }
  if (theSearchParameter === "Remote") {
    arrayToReturn = this.props.jobs.filter((job) => {
      return job.work_type === "Remote"
    })
  }

  return arrayToReturn
}



filterCompanies = () => {
    
   
  let companies = [...this.props.companies]
  if(this.state.searchTerm === ""){
    return companies 
  } else {
     companies = this.props.companies.filter((val) => {
      return val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    
    })

  }
 return companies

}

filterTalent = () => {
    
   
  let talents = [...this.props.talents]
  if(this.state.searchTerm === ""){
    return talents 
  } else {
     talents = this.props.talents.filter((val) => {
      return ( val.first_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      || val.last_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    
    })

  }
 return talents

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
         <Route path="/addCompany" render={this.renderAddCompany}/>
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
  allCompanies: allCompanies,
  addCompany: addCompany,
  addApplication: addApplication
  

}

let mapStateToProps = state => {
  return {
    jobs: state.jobInformation.jobs,
    companies: state.companyInformation.companies,
    talents: state.talentInformation.users,
    token: state.userInformation.token
  }
}

let componentWithRouterProps = withRouter(App)


export default connect(mapStateToProps, mapStateToDispatch)(componentWithRouterProps)
