import React, { Component } from 'react';
import MainView from './MainView';
 
 

class MainContainer extends Component {
  

   

  

    toggleDrawer = () => {
        this.props.navigation.toggleDrawer();
    }
   
   
    render() {
      
        return (
            <MainView
                // signOut={this.signOut}
                toggleDrawer={this.toggleDrawer}
                
            />
        );
    }
}

export default MainContainer;