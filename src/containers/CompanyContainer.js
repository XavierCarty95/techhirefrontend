import React, { Component } from 'react'
import {connect } from 'react-redux'
import Company from '../company/Company'
import {NavLink} from 'react-router-dom'


class CompanyContainer extends Component {

   
render() {

        const{companies} = this.props
        let arrayOfComponents = companies.map((company) => {
           return <Company key={company.id} company={company}/>
               })
        return (
            <div >
            
            <h1 className = "center-align">Companies</h1>
            <div style={{marginBottom: "30px"}} className = "container">
            <button className="btn waves-effect waves-light green accent-4"><NavLink style={{textDecoration: "none" , color:"white" , marginTop: "10px"}} to="/addCompany"> Add A Company</NavLink></button>
            <div className="ui relaxed divided list">
            {arrayOfComponents}     
            </div>
             </div>   
            </div>
        )
    }
}








let mapStateToProps = (state) => {
 
    return {
        allTheCompanies: state.companyInformation.companies
    }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(CompanyContainer)
export default componentThatNowHasProps;