import React from 'react';
import {
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import { connect } from 'react-redux';
import * as actions_page from '../store/actions/setPage'

import styles from '../styles';

const SideBarIcon = ({ image, name, page, dispatch, nav, screen }) => {

    function handleTouch() {
        dispatch(actions_page.set_page(name));
        nav(screen);
    }

    return(
        <TouchableOpacity onPress={() => handleTouch()}>
            <View style={page === name ? styles.icon : styles.disabledIcon}>
                <Image source={image} style={styles.sideIcon}></Image>
            </View>
        </TouchableOpacity>
    )
}

export default connect(state => ({ page: state.page.selectedPage }))(SideBarIcon);