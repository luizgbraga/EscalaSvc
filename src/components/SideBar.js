import React from 'react';
import {
    View,
    Image,
    Button
} from 'react-native';
import styles from '../styles';

import SideBarIcon from './SideBarIcon';

export default (props) => {

    const home = require('../../assets/home.png');
    const menu = require('../../assets/menu.png');
    const settings = require('../../assets/settings.png');

    return(
        <View style={styles.containerIconsSideBar}>
            <SideBarIcon image={home} name='home' nav={props.nav} screen='Main'></SideBarIcon>
            <SideBarIcon image={menu} name='list' nav={props.nav} screen='Alunos'></SideBarIcon>
            <SideBarIcon image={settings} name='settings'></SideBarIcon>
        </View>
    )
}