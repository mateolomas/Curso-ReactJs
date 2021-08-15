import React, { Component } from 'react'
import ItemUser from './ItemUser'
import Title from './Title'
//import UserCount from './UserCount';
import UserForm from './UserForm';





  
export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Coca Cola",
            country: 'EC',
            year: 2020,
            telefono: '15'

        }
    }

    handleChange = (formValues) => {
        console.log(formValues, "datos");
        this.setState(formValues)
    }


      render() {
          return (
            <> 
            <Title text="Some title"/>

            <ItemUser company={this.state} />    
            <UserForm onChange={this.handleChange}/>
            </>
          )
      }
  }
  

export default App
