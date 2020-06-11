import React, { Component } from 'react'
import ApiContainer from '../containers/ApiContainer'


export class Home extends Component {

    state = {
        listOfJobs: []
    }

    filterApi = () => {
    
        const {searchTerm} = this.props   
        let api = [...this.state.listOfJobs]
        if(this.state.searchTerm === ""){
          return api
        } else {
           api = this.state.listOfJobs.filter((val) => {
            return val.company.toLowerCase().includes(searchTerm.toLowerCase())
          
          })
      
        }
       return api
      
      }

  componentDidMount(){

        fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1")
        .then(r => r.json())
        .then(response => {
            console.log(response)
            this.setState({
                listOfJobs: response
            })
        })

    }
    render() {
       
        return (
            <div>
                 <h1 className="center-align"> Welcome To TechHire </h1>
                 <h2 className="center-align"> Current Jobs on GitHub Api </h2>
                 <ApiContainer listOfJobs={this.state.listOfJobs} api={this.filterApi()}/>
                
            </div>
        )
    }
}

export default Home
