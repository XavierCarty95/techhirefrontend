import React from 'react';
import { connect } from 'react-redux'
import Talent from '../talent/Talent'
 


const TalentContainer = ({talent}) =>  {
    
    let arrayOfComponents = talent.map((user) => {
        return <Talent key={user.id} user={user}/>
      })
    return (
        <div style = {{height: "100%"}}>
            <h1 className="center-align"> Talent </h1>
            <div className="ui three column grid container">
                 {arrayOfComponents}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
 
    return {
        allTheUsers: state.talentInformation.users
    }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(TalentContainer)
export default componentThatNowHasProps;
