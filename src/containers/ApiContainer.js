import React, { Component } from 'react'
import Api from '../api/Api'

export class ApiContainer extends Component {



    render() {

       
        const listArray = this.props.api.map(api => {
             
            return <Api key={api.id} api={api}/>  

        })
        return (
        <div className ="container">
            <div className="ui relaxed divided list">
                {listArray}
            </div>
            </div>
        )
    }
}

export default ApiContainer
