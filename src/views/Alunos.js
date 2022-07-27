import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../styles';
import { connect } from 'react-redux';
import AnosContainer from '../components/AnosContainer';
import TitleAlunos from '../components/TitleAlunos';
import SideBar from '../components/SideBar';
import AllAlunos from '../components/Alunos';


const Alunos = (props) => {
    return(
        <View style={styles.row}>
            <View style={styles.sideBar}>
                <SideBar nav={props.navigation.navigate}></SideBar>
            </View>
            <View style={styles.mainBackground}>
                <View style={styles.header}>
                    <AnosContainer></AnosContainer>
                </View>
                <TitleAlunos></TitleAlunos>
                <View style={styles.containerAlunos}>
                    <AllAlunos></AllAlunos>
                </View>
            </View>
        </View>
    )
}

export default connect(state => ({ page: state.page.selectedPage }))(Alunos);