import  React, { Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import "./App.css"
import NavBar from './components/Navbar'
import SideNav from './components/SideNav'
import Home from './components/Home'
import {displayAllUsers, setUserInfo ,logOutUser , deleteUser ,updateUser} from './actions/users'
import {AllJobs} from './actions/jobs'
import {allCompanies , addCompany} from './actions/companies'
import {addApplication , allApplications} from './actions/applications'
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
import ProfileForm from './Forms/ProfileForm'
import Footer from './components/Footer'

class App extends Component {
  state = {
     searchTerm: "",
     theSearchParameter: "All",
     message : " "

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

   fetch("https://peaceful-shelf-44568.herokuapp.com/users")
   .then(r => r.json())
   .then(response => {
      this.props.displayAllUsers(response)
   })

   fetch("https://peaceful-shelf-44568.herokuapp.com/companies")
   .then(r => r.json())
   .then(response => {
      this.props.allCompanies(response)
   })


   fetch("https://peaceful-shelf-44568.herokuapp.com/jobs")
  .then(r => r.json())
  .then(response => {
      this.props.AllJobs(response)
   })

   fetch("https://peaceful-shelf-44568.herokuapp.com/applications")
  .then(r => r.json())
  .then(response => {
      this.props.allApplications(response)
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
  if(response.message){
    this.setState({
       ...this.state, 
       message: response.message
    })

    setTimeout(() => {
      this.setState({ ...this.state , message: "" });
    }, 5000)
  
  } else {
    localStorage.token = response.token
    this.props.setUserInfo(response)
    this.props.history.push("/profile")
   }
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
        let users = [...this.props.talents , response.user]
        localStorage.token = response.token
        this.props.setUserInfo(response)
        this.props.displayAllUsers(users)
        this.props.history.push("/profile")

    })
}


handleDelete = (id) => {
  fetch(`http://localhost:4000/users/${id}`, {
    method: "DELETE",
   })
    .then(r => r.json())
    .then(response => {
      
     
      localStorage.clear("token")
       this.props.logOutUser()
       this.props.deleteUser(response)
       this.reload()
        this.props.history.push("/login")

    })
}


reload = () => 
{
    //RELOAD COMPONENT
    this.componentDidMount();
};

handleUpdate = (id , userInfo ) => {
  fetch(`http://localhost:4000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(r => r.json())
    .then(response => {
      console.log(response)
        this.props.updateUser(response)
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
       return <Login message={this.state.message} handleLogin={this.handleLoginSubmit} />
    } else if (routerProps.location.pathname === "/register") {
      return <Register handleRegister={this.handleRegisterSubmit}
      />
    }
}


 renderProfile = (routerProps) => {
    if(this.props.token){
      return <ProfileContainer  handleDelete={this.handleDelete}/> 
    } else {
      this.props.history.push("/login")
    }
 }

 renderTalent = (routerProps) => {
  if(routerProps.location.pathname === "/talent"){
    return (<div><SearchForm placeholder="search by name" searchTerm = {this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/><TalentContainer talent = {this.filterTalent()} /></div>)
  }



 }
 logout = () => {
    localStorage.clear("token")
    this.props.logOutUser()
  }

renderJob = (routerProps) => {
  if(routerProps.location.pathname === "/jobs"){
    return   (<div><div className ="container" style={{marginTop: "10px"}}><JobFilter theSearchParameter= {this.state.theSearchParameter} handleTheSearchParameter={this.handleTheSearchParamater}/></div><JobContainer jobs={this.decideWhichArrayToRender()} handleApplication={this.handleApplication}/></div>)
  }
}
 handleSearchTerm = (termFromChild) => {
  this.setState({
    searchTerm: termFromChild
  })
}

renderCompany = (routerProps) => {
  if(routerProps.location.pathname === "/companies"){
    return  (<div><SearchForm placeholder="search by company name"  searchTerm = {this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/><CompanyContainer companies ={this.filterCompanies()} /></div>)
  }
}

renderAddCompany = (routerProps) => {
  if(routerProps.location.pathname === "/addCompany"){
    return <CompanyForm handleCompany = {this.handleCompany} /> 
  }
}

renderUpdateProfile = (routerProps) => {
  if(routerProps.location.pathname === "/updateProfile"){
    return <ProfileForm handleUpdate = {this.handleUpdate} /> 
  }
}

renderHome = (routerProps) => {
  if(routerProps.location.pathname === "/"){
    return <div><SearchForm placeholder= "Search by company name" searchTerm = {this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/><Home searchTerm = {this.state.searchTerm} /> <Footer /></div> 
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
  let arrayToReturn = this.props.jobs
  
  if (theSearchParameter === "All") {
    
    arrayToReturn = this.props.jobs
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
         <Route path="/updateProfile" render={this.renderUpdateProfile}/>
         <Route path="/" render={this.renderHome}/>
       
       </Switch>
       <SideNav />
       
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
  allApplications: allApplications,
  addApplication: addApplication,
  deleteUser: deleteUser,
  updateUser: updateUser,
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
