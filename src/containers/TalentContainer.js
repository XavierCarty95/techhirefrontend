import React from 'react';
import { connect } from 'react-redux'
import Talent from '../talent/Talent'
 


const TalentContainer = (props) =>  {
    console.log(props)
    let arrayOfComponents = props.allTheUsers.map((user) => {
        return <Talent key={user.id} user={user}/>
      })
    return (
        <div>
            <h1 className="center-align"> Talent </h1>
            {arrayOfComponents}
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
