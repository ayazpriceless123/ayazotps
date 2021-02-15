import React, { Component } from 'react';
import { Container, Text  } from 'native-base';
 
import AppHeader from '../../../AppHeader';
 


const MainView = (props) => {
    const {   toggleDrawer,  } = props
    return (
        <Container>
            <AppHeader toggleMenu={toggleDrawer} >

</AppHeader>           
        </Container>
    );
}
export default MainView;