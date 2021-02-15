import React from 'react';
import { Left, Button, Body, Title, Right, Header, Icon, Subtitle } from 'native-base';
import styles from './style';

const AppHeader = props => (
    <Header style={styles.header}>
        {props.toggleMenu && <Left>
            <Button
                transparent
                onPress={props.toggleMenu}
            >
                <Icon name="log-out"/>
            </Button>
        </Left>}
        <Body>
            <Title>{props.title} CHAT SCREEN</Title>
            
        </Body>
        {props.toggleMenu && <Right />}
    </Header>
)

export default AppHeader;
