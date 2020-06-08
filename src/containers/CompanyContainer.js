import React from 'react';
import { connect } from 'react-redux'
import Company from '../company/Company'
 


const CompanyContainer = (props) =>  {
    console.log(props.allTheCompanies)
    let arrayOfComponents = props.allTheCompanies.map((company) => {
        return <Company key={company.id} company={company}/>
      })
    return (
        <div>
        <h1 className = "center-align">Companies</h1>
        <div className = "container">
            {arrayOfComponents}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
 
    return {
        allTheCompanies: state.companyInformation.companies
    }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(CompanyContainer)
export default componentThatNowHasProps;