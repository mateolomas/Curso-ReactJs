import React, { Component } from 'react'
import ItemUser from './ItemUser'
import Title from './Title'
//import UserCount from './UserCount';
//import UserForm from './UserForm';

import userList from '../data'



  
export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: userList
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
            {this.state.users.map((item, index) => {
                return ( <ItemUser key={index} user={item} /> )
            } )
            
            }
            

            </>
          )
      }
  }
  

export default App
