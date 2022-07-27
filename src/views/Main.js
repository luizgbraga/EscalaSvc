import React from 'react';
import {
    View,
    Button
} from 'react-native';

import styles from '../styles';
import { connect } from 'react-redux';
import AnosContainer from '../components/AnosContainer';
import Title from '../components/Title';
import SideBar from '../components/SideBar';
import BoxEscala from '../components/BoxEscala';
import BoxPostos from '../components/BoxPostos';
import BoxBaixados from '../components/BoxBaixados';
import BoxTrocas from '../components/BoxTrocas';
import BoxTuCmdo from '../components/BoxTuCmdo';

const Main = (props) => {
    return(
        <View style={styles.row}>
            <View style={styles.sideBar}>
                <SideBar nav={props.navigation.navigate}></SideBar>
            </View>
            <View style={styles.mainBackground}>
                <View style={styles.header}>
                    <AnosContainer></AnosContainer>
                </View>
                <Title></Title>
                <View style={styles.row}>
                    <BoxEscala></BoxEscala>
                    <BoxPostos></BoxPostos>
                </View>
                <View style={styles.row}>
                    <BoxBaixados></BoxBaixados>
                    <BoxTrocas></BoxTrocas>
                    <BoxTuCmdo>
                    </BoxTuCmdo>     
                </View>

            </View>
        </View>
    )
}

export default connect(state => ({ page: state.page.selectedPage }))(Main);